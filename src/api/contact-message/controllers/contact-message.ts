import crypto from 'node:crypto';

const uid = 'api::contact-message.contact-message' as any;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB);
}

// The Next.js server forwards the visitor's real IP, since every request reaches Strapi from the
// same server. The header is only trusted when it carries CONTACT_PROXY_SECRET, so callers
// can't spoof their IP by calling Strapi directly.
function clientIp(ctx: any): string {
  const secret = process.env.CONTACT_PROXY_SECRET;
  const forwarded = ctx.request.headers['x-contact-client-ip'];
  const provided = ctx.request.headers['x-contact-proxy-secret'];
  if (
    secret &&
    typeof forwarded === 'string' &&
    typeof provided === 'string' &&
    safeEqual(provided, secret)
  ) {
    return forwarded;
  }
  return ctx.request.ip;
}

// Sliding window per IP. In-memory, so it resets when the server restarts.
function isRateLimited(ip: string) {
  const now = Date.now();
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export default {
  create: async (ctx: any) => {
    const body = ctx.request.body?.data ?? ctx.request.body ?? {};

    // Honeypot: the form renders a hidden "contact-website" field that humans leave empty.
    // Bots that fill it get a silent success so they don't learn to avoid it.
    if (body['contact-website']) {
      return { data: { ok: true } };
    }

    if (isRateLimited(clientIp(ctx))) {
      return ctx.throw(429, 'Too many messages. Please try again later.');
    }

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || name.length > 120) {
      return ctx.badRequest('Name is required (max 120 characters).');
    }
    if (!EMAIL_RE.test(email)) {
      return ctx.badRequest('A valid email is required.');
    }
    if (!message || message.length > 5000) {
      return ctx.badRequest('Message is required (max 5000 characters).');
    }

    await strapi.documents(uid).create({
      data: { name, email, message, read: false },
    });

    return { data: { ok: true } };
  },
};
