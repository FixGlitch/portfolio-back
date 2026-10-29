# Caso de estudio: formulario de contacto sin spam y con límite real por visitante

El formulario de contacto del portfolio envía sus mensajes desde el servidor de Next.js hacia Strapi. Eso crea un problema: para Strapi, todas las solicitudes llegan desde la misma IP, la del servidor de Next. Un límite por IP en ese punto bloquearía a todos los visitantes a la vez.

## El problema

Un límite de 5 mensajes cada 10 minutos por IP era la protección contra spam. Pero la IP que ve Strapi es la del servidor del front. Con cinco mensajes de cualquier visitante, el formulario quedaba bloqueado para todos durante diez minutos.

## Por qué no basta con confiar en `X-Forwarded-For`

La cabecera con la IP real la puede enviar cualquiera. Si Strapi la aceptara sin condiciones, un bot podría llamar directamente a la API con una IP distinta en cada solicitud y evadir el límite.

## La solución

El front lee la IP real del visitante y la envía a Strapi en una cabecera propia, junto con un secreto compartido (`CONTACT_PROXY_SECRET`).

- Si el secreto coincide, Strapi usa la IP enviada para el límite.
- Si no coincide o falta, Strapi ignora la cabecera y usa la IP de la conexión.

La comparación del secreto usa `crypto.timingSafeEqual`, para que no se pueda adivinar por el tiempo de respuesta.

## Cómo lo verifiqué

Probé contra Strapi local con tres casos:

1. Sin secreto y con IP falsa: el límite sigue usando la IP real. El sexto mensaje recibe 429.
2. Con el secreto correcto y seis IPs distintas: los seis mensajes pasan.
3. Con secreto incorrecto e IP falsa: la cabecera se ignora y el límite se aplica igual.

## Lo que quedó pendiente

- El límite vive en memoria, así que se reinicia al reiniciar el servidor. Para producción con varias instancias, habría que moverlo a Redis.
- Los mensajes no generan aviso por email: hay que revisarlos en el panel de administración.
