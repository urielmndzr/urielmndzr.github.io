/**
 * DATOS CENTRALIZADOS DEL PORTAFOLIO (BILINGÜE ES / EN)
 */

const profileData = {
  name: "Uriel Méndez Romero",
  location: "Veracruz, Ver. México",
  phone: "+52 229 290 7331",
  email: "urielmendezr05@gmail.com",
  resumeUrl: "#",

  socials: {
    github: "https://github.com/urielmndzr",
    linkedin: "https://linkedin.com/in/urielmendezr",
    email: "mailto:urielmendezr05@gmail.com",
    phone: "tel:2292907331"
  },

  es: {
    title: "Ingeniero en Sistemas Computacionales",
    tagline: "Desarrollo de Software, Soluciones Empresariales y Análisis de Datos.",
    about: "Experiencia en desarrollo de software, diseño de soluciones empresariales y análisis de datos. Especializado en el diseño, desarrollo y despliegue de aplicaciones para optimizar procesos de negocio utilizando Python, Java y SQL, así como en el modelado de datos con SAP HANA y el desarrollo de soluciones analíticas con Power BI. Capacidad para colaborar con usuarios de distintas áreas para traducir requerimientos operativos en soluciones técnicas escalables. En constante formación en tecnologías emergentes, con especial interés en inteligencia artificial, automatización de procesos y desarrollo de soluciones inteligentes.",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B1+" }
    ]
  },

  en: {
    title: "Computer Systems Engineer",
    tagline: "Software Development, Enterprise Solutions, and Data Analytics.",
    about: "Experience in software development, enterprise solution design, and data analytics. Specialized in designing, developing, and deploying applications to optimize business processes using Python, Java, and SQL, as well as data modeling with SAP HANA and developing analytical solutions with Power BI. Proven ability to collaborate with cross-functional users to translate operational requirements into scalable technical solutions. Continuously training in emerging technologies, with a strong interest in artificial intelligence, process automation, and intelligent solution development.",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B1+" }
    ]
  }
};

const trajectoryData = {
  es: [
    {
      type: "work",
      period: "Diciembre 2025 – Julio 2026",
      role: "Software Developer",
      organization: "Ofix — Veracruz, México",
      points: [
        "Desarrollé e implementé mejoras funcionales en el ERP corporativo Odoo utilizando Python y XML, optimizando flujos de trabajo y procesos de distintas áreas operativas y administrativas.",
        "Colaboré con usuarios y áreas de negocio para analizar requerimientos, definir especificaciones funcionales y transformar necesidades operativas en soluciones de software.",
        "Desarrollé consultas SQL y administré información en PostgreSQL para soportar aplicaciones empresariales, garantizar la integridad de los datos y generar reportes para la toma de decisiones.",
        "Realicé pruebas manuales en ambientes de desarrollo y gestioné flujos de trabajo con Git, incluyendo commits, Pull Requests, revisión de código y liberaciones a producción."
      ],
      skills: ["Python", "Odoo ERP", "XML", "PostgreSQL", "SQL", "Git", "Pull Requests", "Code Review"]
    },
    {
      type: "work",
      period: "Febrero 2025 – Diciembre 2025",
      role: "Commercial IT Trainee",
      organization: "TenarisTamsa — Veracruz, México",
      points: [
        "Desarrollé y optimicé dashboards corporativos en Power BI, transformando información comercial en indicadores y análisis estratégicos para apoyar la toma de decisiones.",
        "Diseñé y modelé vistas relacionales en SAP HANA Studio para integrar, transformar y simplificar datos provenientes del ERP SAP para reportes analíticos.",
        "Analicé y documenté modelos de datos, relaciones, tablas y campos para apoyar procesos de migración, asegurar la consistencia de la información y facilitar el desarrollo de nuevas soluciones digitales."
      ],
      skills: ["Power BI", "SAP HANA Studio", "SAP ERP", "Modelado de Datos", "Análisis de Datos", "Soluciones Digitales"]
    },
    {
      type: "education",
      period: "2020 – 2025",
      role: "Ingeniería en Sistemas Computacionales",
      organization: "Instituto Tecnológico de Veracruz — Veracruz, México",
      points: [
        "Graduado con mención honorífica.",
        "Formación enfocada en el ciclo completo de ingeniería de software (análisis, diseño y desarrollo).",
        "Modelado de bases de datos y construcción de consultas SQL optimizadas.",
        "Sólidos fundamentos de redes informáticas."
      ],
      skills: ["Ingeniería de Software", "Programación", "Bases de Datos y SQL", "Redes Informáticas"]
    },
    {
      type: "education",
      period: "2017 – 2020",
      role: "Profesional Técnico Bachiller en Informática",
      organization: "Colegio Nacional de Educación Profesional Técnica (CONALEP) — Veracruz, México",
      points: [
        "Formación técnica con especialidad en Desarrollo de Sistemas.",
        "Enfoque en la planeación de proyectos de software.",
        "Análisis, diseño, elaboración y mantenimiento de sistemas de información."
      ],
      skills: ["Desarrollo de Sistemas", "Análisis y Diseño", "Planeación de Proyectos", "Sistemas de Información"]
    }
  ],

  en: [
    {
      type: "work",
      period: "December 2025 – July 2026",
      role: "Software Developer",
      organization: "Ofix — Veracruz, Mexico",
      points: [
        "Developed and implemented functional enhancements in the corporate Odoo ERP using Python and XML, optimizing workflows and processes across operational and administrative departments.",
        "Collaborated with users and business units to analyze requirements, define functional specifications, and translate operational needs into software solutions.",
        "Built SQL queries and managed data in PostgreSQL to support enterprise applications, ensure data integrity, and generate decision-making reports.",
        "Executed manual testing in development environments and managed Git workflows, including commits, Pull Requests, code reviews, and production releases."
      ],
      skills: ["Python", "Odoo ERP", "XML", "PostgreSQL", "SQL", "Git", "Pull Requests", "Code Review"]
    },
    {
      type: "work",
      period: "February 2025 – December 2025",
      role: "Commercial IT Trainee",
      organization: "TenarisTamsa — Veracruz, Mexico",
      points: [
        "Developed and optimized corporate Power BI dashboards, converting commercial data into strategic key performance indicators and analytics to support decision-making.",
        "Designed and modeled relational views in SAP HANA Studio to integrate, transform, and simplify data from SAP ERP for analytical reporting.",
        "Analyzed and documented data models, relationships, tables, and fields to support migration processes, ensure data consistency, and facilitate digital solution development."
      ],
      skills: ["Power BI", "SAP HANA Studio", "SAP ERP", "Data Modeling", "Data Analytics", "Digital Solutions"]
    },
    {
      type: "education",
      period: "2020 – 2025",
      role: "B.S. in Computer Systems Engineering",
      organization: "Instituto Tecnológico de Veracruz — Veracruz, Mexico",
      points: [
        "Graduated with honors.",
        "Training focused on the full software engineering lifecycle (analysis, design, and development).",
        "Database modeling and construction of optimized SQL queries.",
        "Solid fundamentals in computer networking."
      ],
      skills: ["Software Engineering", "Programming", "Databases & SQL", "Computer Networking"]
    },
    {
      type: "education",
      period: "2017 – 2020",
      role: "Technical Degree in Computer Science",
      organization: "CONALEP — Veracruz, Mexico",
      points: [
        "Technical training specialized in Systems Development.",
        "Focus on software project planning.",
        "Analysis, design, building, and maintenance of information systems."
      ],
      skills: ["Systems Development", "Analysis & Design", "Project Planning", "Information Systems"]
    }
  ]
};

const projectsData = {
  es: [
    {
      id: 1,
      title: "Demostrador Automático de Teoremas (2024)",
      category: "Computación Simbólica e Inteligencia Artificial",
      description: "Motor de Computación Simbólica e IA Deductiva diseñado para la validación automática de teoremas en Lógica Proposicional. Sustituye el cómputo exponencial de las tablas de verdad tradicionales (2ⁿ) por una manipulación sintáctica eficiente sobre Árboles de Sintaxis Abstracta (AST). Garantiza trazabilidad transparente al auditar y desglosar paso a paso cada regla de reescritura FNC y derivación mediante el Método de Resolución de Robinson.",
      image: "assets/images/projects/theorem-prover/logo.png",
      images: [
        "assets/images/projects/theorem-prover/logo.png"
      ],
      technologies: ["Java", "JavaCC", "Computación Simbólica", "Lógica Proposicional", "AST Binarios", "Normalización FNC", "Resolución de Robinson"],
      demoUrl: "#",
      docUrl: "theorem-prover.html",
      hasDocModal: true,
      repoUrl: "https://github.com/urielmndzr/AutomatedTheoremProver"
    },
    {
      id: 2,
      title: "Daily Diary (2023)",
      category: "Software de Escritorio",
      description: "Aplicación de escritorio desarrollada en Java para la gestión ganadera integral. Permite la administración del ganado, el seguimiento de la producción de leche y la generación de reportes por periodos. Incluye módulos para el registro de venta del ganado, optimizando la organización operativa y centralizando la información del negocio.",
      image: "assets/images/projects/daily-diary/logo.png",
      images: [
        "assets/images/projects/daily-diary/logo.png"
      ],
      technologies: ["Java", "SQL", "Gestión Ganadera", "Análisis y Diseño"],
      demoUrl: "#",
      repoUrl: "https://github.com/urielmndzr"
    },
    {
      id: 3,
      title: "Second Chance (2019)",
      category: "Software de Escritorio / Analítica",
      description: "Aplicación de escritorio desarrollada en Java para la detección temprana de estudiantes con bajo rendimiento académico. Automatiza la extracción y procesamiento de datos (ETL) a partir de archivos Excel, generando reportes simplificados que permiten identificar factores críticos y respaldar la toma de decisiones de los docentes.",
      image: "assets/images/projects/second-chance/logo.png",
      images: [
        "assets/images/projects/second-chance/logo.png"
      ],
      technologies: ["Java", "ETL (Excel Data)", "SQL Embebido", "Analítica Académica"],
      demoUrl: "#",
      repoUrl: "https://github.com/urielmndzr"
    }
  ],

  en: [
    {
      id: 1,
      title: "Automated Theorem Prover (2024)",
      category: "Symbolic Computation & Artificial Intelligence",
      description: "Symbolic Computation and Deductive AI engine designed for automatic theorem validation in Propositional Logic. Replaces the exponential combinatorial evaluation of traditional truth tables (2ⁿ) with efficient syntactic manipulation on Binary Abstract Syntax Trees (AST). Guarantees transparent traceability by auditing and breaking down step-by-step each CNF rewrite rule and derivation via Robinson's Resolution Method.",
      image: "assets/images/projects/theorem-prover/logo.png",
      images: [
        "assets/images/projects/theorem-prover/logo.png"
      ],
      technologies: ["Java", "JavaCC", "Symbolic Computation", "Propositional Logic", "Binary AST", "CNF Normalization", "Robinson Resolution"],
      demoUrl: "#",
      docUrl: "theorem-prover-en.html",
      hasDocModal: true,
      repoUrl: "https://github.com/urielmndzr/AutomatedTheoremProver"
    },
    {
      id: 2,
      title: "Daily Diary (2023)",
      category: "Desktop Software",
      description: "Desktop application developed in Java for comprehensive livestock management. Enables cattle tracking, milk production monitoring, and periodic reporting. Features dedicated sales registration modules, streamlining operational workflows and centralizing business data.",
      image: "assets/images/projects/daily-diary/logo.png",
      images: [
        "assets/images/projects/daily-diary/logo.png"
      ],
      technologies: ["Java", "SQL", "Livestock Management", "Analysis & Design"],
      demoUrl: "#",
      repoUrl: "https://github.com/urielmndzr"
    },
    {
      id: 3,
      title: "Second Chance (2019)",
      category: "Desktop Software / Analytics",
      description: "Desktop application developed in Java for early identification of students at academic risk. Automates data extraction and ETL processing from Excel spreadsheets, producing streamlined reports to highlight critical risk factors and support faculty decision-making.",
      image: "assets/images/projects/second-chance/logo.png",
      images: [
        "assets/images/projects/second-chance/logo.png"
      ],
      technologies: ["Java", "ETL (Excel Data)", "Embedded SQL", "Academic Analytics"],
      demoUrl: "#",
      repoUrl: "https://github.com/urielmndzr"
    }
  ]
};

const skillsData = {
  es: {
    programming: [
      "Java",
      "Python",
      "C",
      "C++",
      "SQL",
      "XML"
    ],
    databasesAndErp: [
      "Odoo ERP",
      "SAP ERP",
      "SAP HANA Studio",
      "PostgreSQL",
      "MongoDB",
      "Bases de Datos Relacionales"
    ],
    biAndAnalytics: [
      "Power BI",
      "Business Intelligence",
      "Modelado de Datos",
      "Análisis de Datos",
      "Visualización de Datos",
      "ETL",
      "Microsoft Excel"
    ],
    toolsAndDevops: [
      "Git",
      "Docker",
      "APIs REST",
      "Linux",
      "Jira",
      "UML",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "NetBeans",
      "Redes de Computadoras"
    ],
    softSkills: [
      "Adaptabilidad",
      "Proactividad",
      "Responsabilidad",
      "Resolución de Problemas",
      "Trabajo en Equipo",
      "Autodidacta",
      "Pensamiento Analítico",
      "Liderazgo"
    ]
  },
  en: {
    programming: [
      "Java",
      "Python",
      "C",
      "C++",
      "SQL",
      "XML"
    ],
    databasesAndErp: [
      "Odoo ERP",
      "SAP ERP",
      "SAP HANA Studio",
      "PostgreSQL",
      "MongoDB",
      "Relational Databases"
    ],
    biAndAnalytics: [
      "Power BI",
      "Business Intelligence",
      "Data Modeling",
      "Data Analytics",
      "Data Visualization",
      "ETL",
      "Microsoft Excel"
    ],
    toolsAndDevops: [
      "Git",
      "Docker",
      "REST APIs",
      "Linux",
      "Jira",
      "UML",
      "Visual Studio Code",
      "IntelliJ IDEA",
      "NetBeans",
      "Computer Networks"
    ],
    softSkills: [
      "Adaptability",
      "Proactivity",
      "Responsibility",
      "Problem Solving",
      "Teamwork",
      "Self-Taught",
      "Analytical Thinking",
      "Leadership"
    ]
  }
};

/* --- INFORMACIÓN DE CURSOS Y CERTIFICACIONES --- */
const coursesData = {
  es: [
    {
      id: "agile-project-management",
      title: "Gestión de Proyectos y Fundamentos de Metodología Agile",
      issuer: "Santander Open Academy",
      date: "28 de Agosto de 2026",
      duration: "8 Horas · 2 Módulos",
      serialNumber: "OA-2026-0828003123206",
      description: "Fundamentos de gestión ágil de proyectos, marcos Kanban y Scrum, innovación con Design Thinking y validación ágil con Lean Startup.",
      points: [
        "Principios y valores del Manifiesto Ágil, roles, eventos y artefactos en Scrum, y gestión visual del trabajo con Kanban (WIP, Lead/Cycle Time).",
        "Integración holística: Design Thinking para empatizar e idear, Lean Startup para construir y validar el MVP, y Scrum para iterar y escalar el producto."
      ],
      certificatePdf: "assets/certificates/gestion-proyectos-agile.pdf"
    },
    {
      id: "responsible-prompting",
      title: "Prompting Responsable: Maximiza la IA en tu Negocio",
      issuer: "Santander Open Academy",
      date: "11 de Enero de 2026",
      duration: "8 Horas · 2 Módulos",
      serialNumber: "OA-2026-0111002149883",
      description: "Creación de prompts efectivos, integración de IA en la rutina diaria, automatización No-Code y uso responsable de la IA.",
      points: [
        "Diseño paso a paso de prompts efectivos para potenciar la creatividad e integrar la IA en flujos de trabajo diarios.",
        "Desarrollo de automatizaciones y soluciones de software sin programar (No-Code) bajo principios éticos de IA responsable."
      ],
      certificatePdf: "assets/certificates/prompting-responsable-ia.pdf"
    },
    {
      id: "gemini-ai",
      title: "Domina la IA con Gemini",
      issuer: "Santander Open Academy",
      date: "11 de Enero de 2026",
      duration: "2 Horas · 2 Módulos",
      serialNumber: "OA-2026-0111002148166",
      description: "Uso de Gemini como asistente personal de Google para productividad, creación de contenido, investigación e IA responsable.",
      points: [
        "Uso de Gemini para optimizar la productividad diaria, investigación avanzada y aprendizaje asistido.",
        "Diseño y creación de contenidos digitales aplicando principios éticos de Inteligencia Artificial Responsable."
      ],
      certificatePdf: "assets/certificates/domina-ia-gemini.pdf"
    },
    {
      id: "english-fundamentals",
      title: "English Fundamentals: Successful Networking and Interviews",
      issuer: "Santander Open Academy",
      date: "2 de Noviembre de 2025",
      duration: "8 Horas · 2 Módulos",
      serialNumber: "OA-2025-1102001910114",
      description: "Técnicas de comunicación ejecutiva en inglés: Small Talk, Elevator Pitch, entrevistas laborales (internas/externas) y reuniones.",
      points: [
        "Desarrollo de Elevator Pitch profesional, vocabulario técnico de habilidades y técnicas de Small Talk.",
        "Preparación para entrevistas de trabajo (internas y externas), reuniones corporativas y oratoria efectiva."
      ],
      certificatePdf: "assets/certificates/english-fundamentals-networking.pdf"
    },
    {
      id: "power-bi",
      title: "Fundamentos de Power BI",
      issuer: "Santander Open Academy",
      date: "14 de Septiembre de 2025",
      duration: "8 Horas · 2 Módulos",
      serialNumber: "OA-2025-0914001715504",
      description: "Importación, análisis y visualización de datos en Power BI Desktop, optimizando su presentación en el editor Power Query.",
      points: [
        "Importación de datos, formateo de columnas y diseño de informes dinámicos y tableros interactivos.",
        "Configuración de paneles de filtros, formatos condicionales y optimización de datos en Power Query."
      ],
      certificatePdf: "assets/certificates/power-bi.pdf"
    },
    {
      id: "data-science-intro",
      title: "Introducción a la Ciencia de Datos",
      issuer: "Santander Open Academy",
      date: "13 de Septiembre de 2025",
      duration: "6 Horas · 2 Módulos",
      serialNumber: "OA-2025-0913001711171",
      description: "Importancia de la ciencia de datos en los negocios, aplicaciones de Big Data y procesos de limpieza y calidad de datos.",
      points: [
        "Uso de la Ciencia de Datos y Big Data para generar ventajas competitivas y acelerar el éxito empresarial.",
        "Estrategias de calidad y limpieza de datos, resolución de problemas y el rol humano en el procesamiento de información."
      ],
      certificatePdf: "assets/certificates/introduccion-ciencia-de-datos.pdf"
    }
  ],
  en: [
    {
      id: "agile-project-management",
      title: "Project Management and Agile Fundamentals",
      issuer: "Santander Open Academy",
      date: "August 28, 2026",
      duration: "8 Hours · 2 Modules",
      serialNumber: "OA-2026-0828003123206",
      description: "Agile project management fundamentals, Scrum & Kanban frameworks, innovation with Design Thinking, and agile validation with Lean Startup.",
      points: [
        "Agile Manifesto values and principles, Scrum roles, events, and artifacts, and visual workflow management using Kanban (WIP, Lead/Cycle Time).",
        "Integrating Design Thinking for user empathy, Lean Startup for MVP validation, and Scrum for iterative scaling and product delivery."
      ],
      certificatePdf: "assets/certificates/gestion-proyectos-agile.pdf"
    },
    {
      id: "responsible-prompting",
      title: "Responsible Prompting: Maximize AI in Your Business",
      issuer: "Santander Open Academy",
      date: "January 11, 2026",
      duration: "8 Hours · 2 Modules",
      serialNumber: "OA-2026-0111002149883",
      description: "Effective prompt creation, daily AI integration, No-Code automation, and ethical AI practice.",
      points: [
        "Step-by-step design of effective prompts to boost creativity and integrate AI into daily workflows.",
        "Developing No-Code software solutions and automations guided by responsible and ethical AI principles."
      ],
      certificatePdf: "assets/certificates/prompting-responsable-ia.pdf"
    },
    {
      id: "gemini-ai",
      title: "Mastering AI with Gemini",
      issuer: "Santander Open Academy",
      date: "January 11, 2026",
      duration: "2 Hours · 2 Modules",
      serialNumber: "OA-2026-0111002148166",
      description: "Using Gemini as a Google personal assistant for productivity, content creation, research, and responsible AI.",
      points: [
        "Leveraging Gemini to streamline daily productivity workflows, research, and assisted learning.",
        "AI-assisted content creation and digital design guided by Responsible AI principles."
      ],
      certificatePdf: "assets/certificates/domina-ia-gemini.pdf"
    },
    {
      id: "english-fundamentals",
      title: "English Fundamentals: Successful Networking and Interviews",
      issuer: "Santander Open Academy",
      date: "November 2, 2025",
      duration: "8 Hours · 2 Modules",
      serialNumber: "OA-2025-1102001910114",
      description: "Executive English communication skills: Small Talk, Elevator Pitch, job interviews (internal/external), and corporate meetings.",
      points: [
        "Developing professional Elevator Pitches, technical skills vocabulary, and executive Small Talk techniques.",
        "Preparing for internal and external job interviews, corporate meetings, and effective speaking."
      ],
      certificatePdf: "assets/certificates/english-fundamentals-networking.pdf"
    },
    {
      id: "power-bi",
      title: "Power BI Fundamentals",
      issuer: "Santander Open Academy",
      date: "September 14, 2025",
      duration: "8 Hours · 2 Modules",
      serialNumber: "OA-2025-0914001715504",
      description: "Importing, analyzing, and visualizing data in Power BI Desktop, optimizing presentation in the Power Query editor.",
      points: [
        "Data import, column formatting, and interactive report and dashboard design.",
        "Configuring filter panels, conditional formatting, and data optimization in Power Query."
      ],
      certificatePdf: "assets/certificates/power-bi.pdf"
    },
    {
      id: "data-science-intro",
      title: "Introduction to Data Science",
      issuer: "Santander Open Academy",
      date: "September 13, 2025",
      duration: "6 Hours · 2 Modules",
      serialNumber: "OA-2025-0913001711171",
      description: "Essential role of data science in business, Big Data applications, and data quality/cleansing processes.",
      points: [
        "Leveraging Data Science and Big Data to drive competitive advantage and accelerate business success.",
        "Analysis of enterprise applications and methodologies for ensuring data quality."
      ],
      certificatePdf: "assets/certificates/introduccion-ciencia-de-datos.pdf"
    }
  ]
};
