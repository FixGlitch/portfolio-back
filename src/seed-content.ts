// All editorial content (settings + page sections) for the single content type
export type SeedContent = Record<string, unknown>;

export const contentSeed: Record<'en' | 'es', SeedContent> = {
  en: {
    settings: {
      email: 'blancolucas112@gmail.com',
      github: 'https://github.com/FixGlitch',
      siteUrl: 'https://fixglitch.dev',
      linkedin: 'https://linkedin.com/in/lucasdblanco',
      location: 'Argentina',
      siteName: 'Lucas Blanco',
    },
    nav: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      settings: 'Settings',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
      language: 'Language',
    },
    common: {
      skipToContent: 'Skip to content',
      back: 'Back',
    },
    home: {
      metaTitle: 'Lucas Blanco, Fullstack Developer',
      metaDescription:
        'Fullstack developer with 6+ years of experience. I care about how things work just as much as how they look: performance, scalability, and craft.',
      ogDescription:
        'Selected projects in web development and fullstack applications.',
      role: 'Software Developer | Frontend',
      introLead:
        "I'm a software developer specialized in fullstack with 6+ years of experience.",
      introPrefix: 'I care about how',
      workLabel: 'things work',
      introMiddle: 'just as much as how they',
      lookLabel: 'they look',
      badgesWork: ['Node.js', 'TypeScript', 'APIs', 'PostgreSQL'],
      badgesLook: ['React', 'Next.js', 'UI/UX', 'Responsive'],
      currently: 'Currently frontend developer at',
      currentlyRole: 'and available for freelance projects.',
      projectsHeading: 'Projects',
      githubAria: 'Github',
      avatarAlt: 'Portrait of Lucas Blanco',
    },
    about: {
      metaTitle: 'About · Lucas Blanco',
      metaDescription:
        'Lucas Blanco is a fullstack developer from Argentina, passionate about building scalable web applications and quality user experiences.',
      heading: 'About',
      avatarAlt: 'avatar of Lucas',
      bio: [
        {
          text: "I'm {name}, a software developer specialized in fullstack with more than 4 years of experience in implementations, automations and integrations. I studied at {university} and since then I've been building web applications that work well and look good.",
          name: 'Lucas Blanco',
          university: 'Universidad de Buenos Aires',
        },
        {
          text: 'I currently work as a Frontend Developer at Creativedog Agency, where I use Next.js, React.js, JavaScript, CSS and Strapi daily to build web applications.',
        },
        {
          text: 'Previously I worked at DevLabs as a Full Stack Programmer, where I developed web and mobile applications using Next.js, React.js, Node.js and Redux Toolkit. I also worked as a freelance developer building complete solutions for clients.',
        },
        {
          text: 'My main stack includes React, TypeScript, Node.js, Express, and databases like PostgreSQL and MongoDB. I also use Docker, Git and Figma in my daily workflow.',
        },
        {
          text: "I'm always learning something new. I'm proactive, resourceful and determined. If you have an idea or need help with a project, don't hesitate to reach out.",
        },
      ],
      readCV: 'View CV',
    },
    contact: {
      metaTitle: 'Contact · Lucas Blanco',
      metaDescription:
        "Let's work together. I'm always open to chat about what we can build.",
      heading: "Let's work together.",
      subtext1: "I'm always open to chat.",
      subtext2: "Let's talk about what we can build.",
      formTitle: 'Send me a message',
      repliesIn: 'Replies in 1-2 days',
      nameLabel: 'Name',
      namePlaceholder: 'Jane Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'jane@example.com',
      messageLabel: 'Message',
      messagePlaceholder: "Hi Lucas, I'd love to chat about...",
      replyNote: "I'll reply directly to your email.",
      send: 'Send',
      sent: 'Sent',
      basedIn: 'Argentina',
      downloadCV: 'Download CV (PDF) →',
    },
    projects: {
      metaTitle: 'Projects · Lucas Blanco',
      metaDescription: 'Selected projects by Lucas Blanco.',
      back: 'Back',
      interested: 'Interested in working together?',
      getInTouch: 'Get in touch →',
    },
  },
  es: {
    settings: {
      email: 'blancolucas112@gmail.com',
      github: 'https://github.com/FixGlitch',
      siteUrl: 'https://fixglitch.dev',
      linkedin: 'https://linkedin.com/in/lucasdblanco',
      location: 'Argentina',
      siteName: 'Lucas Blanco',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      contact: 'Contacto',
      settings: 'Ajustes',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema',
      language: 'Idioma',
    },
    common: {
      skipToContent: 'Saltar al contenido',
      back: 'Volver',
    },
    home: {
      metaTitle: 'Lucas Blanco, Desarrollador Fullstack',
      metaDescription:
        'Desarrollador fullstack con más de 6 años de experiencia. Me importa cómo funcionan las cosas tanto como cómo se ven: rendimiento, escalabilidad y calidad.',
      ogDescription:
        'Proyectos seleccionados de desarrollo web y aplicaciones fullstack.',
      role: 'Software Developer | Frontend',
      introLead:
        'Soy un software developer especializado en fullstack con más de 6 años de experiencia.',
      introPrefix: 'Me importa cómo',
      workLabel: 'funcionan las cosas',
      introMiddle: 'tanto como cómo',
      lookLabel: 'se ven',
      badgesWork: ['Node.js', 'TypeScript', 'APIs', 'PostgreSQL'],
      badgesLook: ['React', 'Next.js', 'UI/UX', 'Responsive'],
      currently: 'Actualmente frontend developer en',
      currentlyRole: 'y disponible para proyectos freelance.',
      projectsHeading: 'Proyectos',
      githubAria: 'Github',
      avatarAlt: 'Retrato de Lucas Blanco',
    },
    about: {
      metaTitle: 'Sobre mí · Lucas Blanco',
      metaDescription:
        'Lucas Blanco es un desarrollador fullstack de Argentina, apasionado por construir aplicaciones web escalables y experiencias de usuario de calidad.',
      heading: 'Sobre mí',
      avatarAlt: 'avatar de Lucas',
      bio: [
        {
          text: 'Soy {name}, un software developer especializado en fullstack con más de 4 años de experiencia en implementaciones, automatizaciones e integraciones. Estudié en la {university} y desde entonces me dedico a construir aplicaciones web que funcionan bien y se ven bien.',
          name: 'Lucas Blanco',
          university: 'Universidad de Buenos Aires',
        },
        {
          text: 'Actualmente trabajo como Frontend Developer en Creativedog Agency, donde uso Next.js, React.js, JavaScript, CSS y Strapi diariamente para construir aplicaciones web.',
        },
        {
          text: 'Anteriormente trabajé en DevLabs como Programador Full Stack, donde desarrollé aplicaciones web y móviles usando Next.js, React.js, Node.js y Redux Toolkit. También trabajé como desarrollador freelance construyendo soluciones completas para clientes.',
        },
        {
          text: 'Mi stack principal incluye React, TypeScript, Node.js, Express y bases de datos como PostgreSQL y MongoDB. También uso Docker, Git y Figma en mi día a día.',
        },
        {
          text: 'Siempre estoy aprendiendo algo nuevo. Soy proactivo, resolutivo y decidido. Si tenés una idea o necesitás ayuda con un proyecto, no dudes en contactarme.',
        },
      ],
      readCV: 'Ver CV',
    },
    contact: {
      metaTitle: 'Contacto · Lucas Blanco',
      metaDescription:
        'Trabajemos juntos. Siempre estoy abierto a charlar sobre lo que podemos construir.',
      heading: 'Trabajemos juntos.',
      subtext1: 'Siempre estoy abierto a charlar.',
      subtext2: 'Hablemos de lo que podemos construir.',
      formTitle: 'Envíame un mensaje',
      repliesIn: 'Respondo en 1-2 días',
      nameLabel: 'Nombre',
      namePlaceholder: 'Juan Pérez',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'juan@ejemplo.com',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Hola Lucas, me encantaría charlar sobre...',
      replyNote: 'Te responderé directamente a tu correo.',
      send: 'Enviar',
      sent: 'Enviado',
      basedIn: 'Argentina',
      downloadCV: 'Descargar CV (PDF) →',
    },
    projects: {
      metaTitle: 'Proyectos · Lucas Blanco',
      metaDescription: 'Proyectos seleccionados de Lucas Blanco.',
      back: 'Volver',
      interested: '¿Interesado en trabajar juntos?',
      getInTouch: 'Ponte en contacto →',
    },
  },
};
