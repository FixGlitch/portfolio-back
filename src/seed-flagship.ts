import type { SeedProject } from './seed-data';

// Flagship projects shown on the portfolio. Seeded in development only when missing;
// existing entries are never overwritten, so edits made in the admin panel are kept.
const p = (text: string) => ({ type: 'paragraph', children: [{ type: 'text', text }] });
const h2 = (text: string) => ({ type: 'heading', level: 2, children: [{ type: 'text', text }] });
const ul = (items: string[]) => ({
  type: 'list',
  format: 'unordered',
  children: items.map((text) => ({ type: 'list-item', children: [{ type: 'text', text }] })),
});

export const flagshipProjectsSeed: Record<string, SeedProject[]> = {
  en: [
    {
      slug: 'rumbo',
      title: 'Rumbo',
      subtitle: 'Goal manager with stages and automatic progress',
      summary: 'Fullstack app to set goals, break them into stages and track progress, overdue dates and outcomes.',
      metaDescription: 'Rumbo: fullstack goal manager built with NestJS and Next.js.',
      tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeScript', 'Vitest'],
      content: [
        p('Rumbo helps you set goals and follow them through. Each goal can be split into stages, and its progress is calculated from the stages you complete.'),
        p('Goals can be marked as achieved, pending, in progress or not achieved. The dashboard highlights overdue goals, and you can filter and search by title or description.'),
        h2('Stack'),
        ul(['NestJS 11 with TypeORM and PostgreSQL', 'JWT authentication', 'Next.js 16 with Tailwind CSS', 'Vitest: 47 backend tests and 52 frontend tests']),
      ],
      image: null,
    },
    {
      slug: 'fluxo',
      title: 'Fluxo',
      subtitle: 'Real-time collaborative issue tracker',
      summary: 'Kanban-style issue tracker with teams, cycles, initiatives and live updates over WebSockets.',
      metaDescription: 'Fluxo: a real-time collaborative issue tracker built with NestJS and Next.js.',
      tags: ['NestJS', 'Socket.IO', 'Next.js', 'Zustand', 'PostgreSQL'],
      content: [
        p('Fluxo is an issue tracker inspired by Linear. Teams organize work in issues, cycles and initiatives, and changes show up live for everyone in the workspace.'),
        p('Most screens are complete: issues with comments, attachments and reactions, cycle planning with metrics, and an agent that answers questions about your backlog. Billing currently runs in simulated mode.'),
        h2('Stack'),
        ul(['NestJS 11 with TypeORM, PostgreSQL and Socket.IO', 'Next.js with Zustand for client state', 'JWT authentication and data scoped to each workspace']),
      ],
      image: null,
    },
    {
      slug: 'vuelto',
      title: 'Vuelto',
      subtitle: 'Shared expenses with automatic debt settlement',
      summary: 'Split group expenses and settle debts with the fewest possible transfers. Web and mobile apps, with receipt scanning.',
      metaDescription: 'Vuelto: shared expenses and debt settlement with web, mobile and OCR.',
      tags: ['NestJS', 'Next.js', 'React Native', 'Expo', 'Tesseract.js'],
      content: [
        p('Vuelto splits group expenses between members, with custom splits when needed. It calculates each person’s balance and suggests the smallest set of transfers to settle everything.'),
        p('You can photograph a receipt and the app reads the total and the line items with OCR, so you do not have to type them in.'),
        h2('Stack'),
        ul(['NestJS 11 backend with TypeORM and PostgreSQL', 'Next.js with Redux Toolkit for the web app', 'Expo and React Native for the mobile app', 'Tesseract.js for receipt OCR']),
      ],
      image: null,
    },
    {
      slug: 'cimbra',
      title: 'Cimbra',
      subtitle: 'CLI that scaffolds fullstack projects',
      summary: 'Command-line tool that generates a ready-to-run project: Next.js, NestJS and PostgreSQL, with several templates.',
      metaDescription: 'Cimbra: a CLI that scaffolds Next.js and NestJS projects.',
      tags: ['Node.js', 'CLI', 'tsup', 'Vitest', 'Next.js', 'NestJS'],
      content: [
        p('Cimbra is a command-line tool. Running "cimbra new my-app" creates a project with a frontend, a backend and a database configuration, ready to start.'),
        p('It offers templates for fullstack, dashboard, backend-only, frontend-only and Expo apps. The fullstack template generates a backend and frontend that compile.'),
        h2('Stack'),
        ul(['TypeScript compiled with tsup', 'Interactive prompts with @clack/prompts', 'Vitest test suite']),
      ],
      image: null,
    },
  ],
  es: [
    {
      slug: 'rumbo',
      title: 'Rumbo',
      subtitle: 'Gestor de objetivos con etapas y progreso automático',
      summary: 'App fullstack para fijar objetivos, dividirlos en etapas y seguir el progreso, los vencimientos y los resultados.',
      metaDescription: 'Rumbo: gestor de objetivos fullstack con NestJS y Next.js.',
      tags: ['NestJS', 'Next.js', 'PostgreSQL', 'TypeScript', 'Vitest'],
      content: [
        p('Rumbo te ayuda a fijar objetivos y seguirlos hasta el final. Cada objetivo se puede dividir en etapas, y su progreso se calcula según las etapas completadas.'),
        p('Los objetivos pueden estar logrados, pendientes, en progreso o no logrados. El panel destaca los objetivos vencidos, y puedes filtrar y buscar por título o descripción.'),
        h2('Stack'),
        ul(['NestJS 11 con TypeORM y PostgreSQL', 'Autenticación con JWT', 'Next.js 16 con Tailwind CSS', 'Vitest: 47 tests en el back y 52 en el front']),
      ],
      image: null,
    },
    {
      slug: 'fluxo',
      title: 'Fluxo',
      subtitle: 'Gestor de incidencias colaborativo en tiempo real',
      summary: 'Gestor de incidencias estilo kanban con equipos, ciclos, iniciativas y actualizaciones en vivo por WebSockets.',
      metaDescription: 'Fluxo: gestor de incidencias colaborativo en tiempo real con NestJS y Next.js.',
      tags: ['NestJS', 'Socket.IO', 'Next.js', 'Zustand', 'PostgreSQL'],
      content: [
        p('Fluxo es un gestor de incidencias inspirado en Linear. Los equipos organizan el trabajo en incidencias, ciclos e iniciativas, y los cambios aparecen en vivo para todo el espacio de trabajo.'),
        p('La mayoría de las pantallas están completas: incidencias con comentarios, adjuntos y reacciones, planificación de ciclos con métricas, y un asistente que responde preguntas sobre el backlog. El billing funciona en modo simulado por ahora.'),
        h2('Stack'),
        ul(['NestJS 11 con TypeORM, PostgreSQL y Socket.IO', 'Next.js con Zustand para el estado del cliente', 'Autenticación con JWT y datos por espacio de trabajo']),
      ],
      image: null,
    },
    {
      slug: 'vuelto',
      title: 'Vuelto',
      subtitle: 'Gastos compartidos con saldo de deudas automático',
      summary: 'Reparte los gastos del grupo y salda las deudas con la menor cantidad de transferencias. Web y app móvil, con lectura de tickets.',
      metaDescription: 'Vuelto: gastos compartidos y saldo de deudas con web, app móvil y OCR.',
      tags: ['NestJS', 'Next.js', 'React Native', 'Expo', 'Tesseract.js'],
      content: [
        p('Vuelto reparte los gastos del grupo entre sus integrantes, con repartos personalizados cuando hace falta. Calcula el saldo de cada persona y propone el menor número de transferencias para saldar todo.'),
        p('Puedes fotografiar un ticket y la app lee el total y los ítems con OCR, así no tienes que cargarlos a mano.'),
        h2('Stack'),
        ul(['Backend con NestJS 11, TypeORM y PostgreSQL', 'Web con Next.js y Redux Toolkit', 'App móvil con Expo y React Native', 'Tesseract.js para el OCR de tickets']),
      ],
      image: null,
    },
    {
      slug: 'cimbra',
      title: 'Cimbra',
      subtitle: 'CLI que genera proyectos fullstack',
      summary: 'Herramienta de línea de comandos que genera un proyecto listo para correr: Next.js, NestJS y PostgreSQL, con varias plantillas.',
      metaDescription: 'Cimbra: CLI que genera proyectos Next.js y NestJS.',
      tags: ['Node.js', 'CLI', 'tsup', 'Vitest', 'Next.js', 'NestJS'],
      content: [
        p('Cimbra es una herramienta de línea de comandos. Al ejecutar "cimbra new mi-app" se crea un proyecto con front, back y configuración de base de datos, listo para arrancar.'),
        p('Ofrece plantillas para fullstack, dashboard, solo back, solo front y apps Expo. La plantilla fullstack genera un back y un front que compilan.'),
        h2('Stack'),
        ul(['TypeScript compilado con tsup', 'Preguntas interactivas con @clack/prompts', 'Suite de tests con Vitest']),
      ],
      image: null,
    },
  ],
};
