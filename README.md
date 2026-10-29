# portfolio-back

Backend del portfolio de Lucas Blanco. Strapi 5 con contenido en español e inglés, y un endpoint público para el formulario de contacto.

Frontend asociado: [portfolio-front](../portfolio-front).

## Contenido

- **content** (single type): textos del sitio por sección (`nav`, `common`, `home`, `about`, `contact`, `projects`) y ajustes (`settings`). Se sirve en `GET /api/content`.
- **project** (collection): proyectos con imagen, tags y contenido en bloques.
- **contact-message** (collection): mensajes del formulario de contacto. Solo se crean desde el endpoint público; se leen en el panel de administración.

Los dos idiomas están configurados como locales (`en`, `es`). El seed crea el contenido inicial y, en cada arranque, agrega solo las claves que falten: lo que se edita en el panel no se sobrescribe.

## Endpoint de contacto

`POST /api/contact-messages` (público, sin autenticación)

```json
{ "data": { "name": "...", "email": "...", "message": "...", "contact-website": "" } }
```

- `contact-website` es un campo trampa (honeypot). Si llega con valor, responde 200 y no guarda nada.
- Validación: nombre ≤ 120 caracteres, email válido, mensaje ≤ 5000 caracteres. Si falla, responde 400.
- Límite: 5 mensajes cada 10 minutos por IP. Si se supera, responde 429. El contador vive en memoria y se reinicia al reiniciar el servidor.
- IP: el front reenvía la IP del visitante en `x-contact-client-ip`, firmada con `CONTACT_PROXY_SECRET`. Sin secreto válido, se usa la IP de la conexión.

## Requisitos

- Node.js 20 o superior.

## Puesta en marcha

```bash
cp .env.example .env   # completar los secretos
npm install
npm run develop        # http://localhost:1337 (admin en /admin)
```

En desarrollo, SQLite (`.tmp/data.db`). En producción, usar Postgres: descomentar las variables `DATABASE_*` de `.env.example`.

## Variables de entorno

| Variable | Descripción |
|---|---|
| `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, `TRANSFER_TOKEN_SALT`, `JWT_SECRET`, `ENCRYPTION_KEY` | Secretos de Strapi. Deben ser valores propios, no los de ejemplo. |
| `CONTACT_PROXY_SECRET` | Secreto compartido con el front. Debe tener el mismo valor en ambos servicios. |
| `DATABASE_CLIENT`, `DATABASE_*` | Conexión a la base de datos. |

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run develop` | Desarrollo con recarga. Crea el contenido y los proyectos de ejemplo si faltan. |
| `npm run build` | Compila el panel de administración. |
| `npm start` | Arranca en producción (requiere `npm run build` antes). |

## Notas

- Los mensajes de contacto no se envían por email: hay que revisarlos en el panel de administración.
- `src/admin/` contiene la personalización del panel. Los archivos `*.example` son plantillas.

## Documentación

- [Caso de estudio: formulario de contacto con límite real por visitante](docs/caso-de-estudio.md)
