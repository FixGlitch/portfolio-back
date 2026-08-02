// Generated from the old Prisma DB dump (seed-data.json) - do not edit manually
export type SeedProject = {
  slug: string;
  title: string;
  subtitle: string | null;
  summary: string;
  metaDescription: string | null;
  tags: string[];
  content: unknown[];
  image: string | null;
};

export const settingsSeed: Record<string, Record<string, string>> = {
  en: {
    "email": "blancolucas112@gmail.com",
    "github": "https://github.com/FixGlitch",
    "siteUrl": "https://fixglitch.dev",
    "linkedin": "https://linkedin.com/in/lucasdblanco",
    "location": "Argentina",
    "siteName": "Lucas Blanco"
  },
  es: {
    "email": "blancolucas112@gmail.com",
    "github": "https://github.com/FixGlitch",
    "siteUrl": "https://fixglitch.dev",
    "linkedin": "https://linkedin.com/in/lucasdblanco",
    "location": "Argentina",
    "siteName": "Lucas Blanco"
  },
};

export const projectsSeed: Record<string, SeedProject[]> = {
  en: [
    {
        "slug": "glitch-ui",
        "title": "Glitch UI",
        "subtitle": null,
        "summary": "Biblioteca de componentes UI construida con Next.js, Tailwind y shadcn/ui.",
        "metaDescription": "Glitch UI: biblioteca de componentes moderna con Next.js y Tailwind CSS.",
        "tags": [
            "Next.js",
            "Tailwind",
            "shadcn/ui",
            "TypeScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Glitch UI es una biblioteca de componentes de interfaz de usuario que utilizo en mis proyectos. Está construida con Next.js, Tailwind CSS y shadcn/ui."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El objetivo es tener un conjunto reutilizable de componentes que sigan las mejores prácticas de accesibilidad y diseño."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Stack"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Next.js"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Tailwind CSS"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "shadcn/ui"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "TypeScript"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-glitch-ui.jpg"
    },
    {
        "slug": "coffy",
        "title": "Coffy",
        "subtitle": null,
        "summary": "Plataforma de gestión de cafetería con dashboard administrativo.",
        "metaDescription": "Coffy: plataforma de gestión de cafetería con dashboard administrativo.",
        "tags": [
            "TypeScript",
            "Next.js",
            "Dashboard"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Coffy es una plataforma completa para la gestión de una cafetería, incluyendo un dashboard administrativo para monitorear ventas, inventario y estadísticas."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El proyecto incluye un frontend con Next.js y un dashboard interactivo para la toma de decisiones."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Funcionalidades"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Dashboard administrativo"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Gestión de inventario"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Estadísticas de ventas"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Interfaz moderna"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-coffy.jpg"
    },
    {
        "slug": "todo-app",
        "title": "ToDo App",
        "subtitle": null,
        "summary": "Aplicación móvil de tareas desarrollada con React Native y Redux Toolkit.",
        "metaDescription": "ToDo App: aplicación móvil de gestión de tareas con React Native.",
        "tags": [
            "React Native",
            "Redux Toolkit",
            "TypeScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Una aplicación móvil de tareas desarrollada con React Native y gestionada con Redux Toolkit para un estado predecible y escalable."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El proyecto incluye un backend separado con autenticación JWT para sincronizar tareas entre dispositivos."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Stack móvil"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "React Native"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Redux Toolkit"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "TypeScript"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Stack backend"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Node.js"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Express"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "JWT"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "MongoDB"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-todo-app.jpg"
    },
    {
        "slug": "gastito",
        "title": "Gastito",
        "subtitle": null,
        "summary": "Aplicación de gestión de gastos personales con frontend y backend separados.",
        "metaDescription": "Gastito: app de gestión de gastos personales con arquitectura fullstack.",
        "tags": [
            "TypeScript",
            "Node.js",
            "React"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Gastito es una aplicación para el seguimiento de gastos personales. Consta de un frontend y un backend separados, ambos desarrollados en TypeScript."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El proyecto demuestra una arquitectura fullstack completa, con una API REST en el backend y una interfaz moderna en el frontend."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Tecnologías"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "TypeScript"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Node.js"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "React"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "API REST"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-gastito.jpg"
    },
    {
        "slug": "demo-social-media",
        "title": "Demo Social Media Backend",
        "subtitle": null,
        "summary": "Backend de red social demo con Node.js, Express y JWT.",
        "metaDescription": "Demo Social Media: backend de red social con autenticación y posts.",
        "tags": [
            "Node.js",
            "Express",
            "JWT",
            "JavaScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Un backend demo para una red social, construido con Node.js y Express. Incluye autenticación de usuarios con JWT y sistema de posts."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Este proyecto demuestra la construcción de una API REST completa con manejo de errores, validación y autenticación."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Endpoints"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Registro y login de usuarios"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "CRUD de posts"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Autenticación JWT"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Manjo de errores"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-demo-social-media.jpg"
    },
    {
        "slug": "demo-back-nestjs",
        "title": "Demo Backend NestJS",
        "subtitle": null,
        "summary": "API backend demo con NestJS, JWT, Passport y Jest para testing.",
        "metaDescription": "Demo Backend: API REST con NestJS, autenticación JWT y tests con Jest.",
        "tags": [
            "NestJS",
            "JWT",
            "Jest",
            "Passport",
            "TypeScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Este proyecto es una demo de un backend robusto construido con NestJS. Incluye autenticación JWT, autorización con Passport y tests unitarios con Jest."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Demuestra las mejores prácticas para la construcción de APIs escalables en Node.js."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Características"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "NestJS framework"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Autenticación JWT"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Passport strategies"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Tests con Jest"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-demo-back-nestjs.jpg"
    },
  ],
  es: [
    {
        "slug": "coffy",
        "title": "Coffy",
        "subtitle": null,
        "summary": "Plataforma de gestión de cafetería con dashboard administrativo.",
        "metaDescription": "Coffy: plataforma de gestión de cafetería con dashboard administrativo.",
        "tags": [
            "TypeScript",
            "Next.js",
            "Dashboard"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Coffy es una plataforma completa para la gestión de una cafetería, incluyendo un dashboard administrativo para monitorear ventas, inventario y estadísticas."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El proyecto incluye un frontend con Next.js y un dashboard interactivo para la toma de decisiones."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Funcionalidades"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Dashboard administrativo"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Gestión de inventario"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Estadísticas de ventas"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Interfaz moderna"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-coffy.jpg"
    },
    {
        "slug": "gastito",
        "title": "Gastito",
        "subtitle": null,
        "summary": "Aplicación de gestión de gastos personales con frontend y backend separados.",
        "metaDescription": "Gastito: app de gestión de gastos personales con arquitectura fullstack.",
        "tags": [
            "TypeScript",
            "Node.js",
            "React"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Gastito es una aplicación para el seguimiento de gastos personales. Consta de un frontend y un backend separados, ambos desarrollados en TypeScript."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El proyecto demuestra una arquitectura fullstack completa, con una API REST en el backend y una interfaz moderna en el frontend."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Tecnologías"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "TypeScript"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Node.js"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "React"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "API REST"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-gastito.jpg"
    },
    {
        "slug": "glitch-ui",
        "title": "Glitch UI",
        "subtitle": null,
        "summary": "Biblioteca de componentes UI construida con Next.js, Tailwind y shadcn/ui.",
        "metaDescription": "Glitch UI: biblioteca de componentes moderna con Next.js y Tailwind CSS.",
        "tags": [
            "Next.js",
            "Tailwind",
            "shadcn/ui",
            "TypeScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Glitch UI es una biblioteca de componentes de interfaz de usuario que utilizo en mis proyectos. Está construida con Next.js, Tailwind CSS y shadcn/ui."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El objetivo es tener un conjunto reutilizable de componentes que sigan las mejores prácticas de accesibilidad y diseño."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Stack"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Next.js"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Tailwind CSS"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "shadcn/ui"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "TypeScript"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-glitch-ui.jpg"
    },
    {
        "slug": "demo-back-nestjs",
        "title": "Demo Backend NestJS",
        "subtitle": null,
        "summary": "API backend demo con NestJS, JWT, Passport y Jest para testing.",
        "metaDescription": "Demo Backend: API REST con NestJS, autenticación JWT y tests con Jest.",
        "tags": [
            "NestJS",
            "JWT",
            "Jest",
            "Passport",
            "TypeScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Este proyecto es una demo de un backend robusto construido con NestJS. Incluye autenticación JWT, autorización con Passport y tests unitarios con Jest."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Demuestra las mejores prácticas para la construcción de APIs escalables en Node.js."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Características"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "NestJS framework"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Autenticación JWT"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Passport strategies"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Tests con Jest"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-demo-back-nestjs.jpg"
    },
    {
        "slug": "todo-app",
        "title": "ToDo App",
        "subtitle": null,
        "summary": "Aplicación móvil de tareas desarrollada con React Native y Redux Toolkit.",
        "metaDescription": "ToDo App: aplicación móvil de gestión de tareas con React Native.",
        "tags": [
            "React Native",
            "Redux Toolkit",
            "TypeScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Una aplicación móvil de tareas desarrollada con React Native y gestionada con Redux Toolkit para un estado predecible y escalable."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "El proyecto incluye un backend separado con autenticación JWT para sincronizar tareas entre dispositivos."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Stack móvil"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "React Native"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Redux Toolkit"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "TypeScript"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Stack backend"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Node.js"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Express"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "JWT"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "MongoDB"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-todo-app.jpg"
    },
    {
        "slug": "demo-social-media",
        "title": "Demo Social Media Backend",
        "subtitle": null,
        "summary": "Backend de red social demo con Node.js, Express y JWT.",
        "metaDescription": "Demo Social Media: backend de red social con autenticación y posts.",
        "tags": [
            "Node.js",
            "Express",
            "JWT",
            "JavaScript"
        ],
        "content": [
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Un backend demo para una red social, construido con Node.js y Express. Incluye autenticación de usuarios con JWT y sistema de posts."
                    }
                ]
            },
            {
                "type": "paragraph",
                "children": [
                    {
                        "type": "text",
                        "text": "Este proyecto demuestra la construcción de una API REST completa con manejo de errores, validación y autenticación."
                    }
                ]
            },
            {
                "type": "heading",
                "level": 2,
                "children": [
                    {
                        "type": "text",
                        "text": "Endpoints"
                    }
                ]
            },
            {
                "type": "list",
                "format": "unordered",
                "children": [
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Registro y login de usuarios"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "CRUD de posts"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Autenticación JWT"
                            }
                        ]
                    },
                    {
                        "type": "list-item",
                        "children": [
                            {
                                "type": "text",
                                "text": "Manjo de errores"
                            }
                        ]
                    }
                ]
            }
        ],
        "image": "/uploads/project-demo-social-media.jpg"
    },
  ],
};

export const MISSING_ES = [];
export const MISSING_EN = [];
