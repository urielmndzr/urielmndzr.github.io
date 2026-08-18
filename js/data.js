/**
 * Datos del Sitio Web Profesional - Uriel Méndez Romero
 * Basado en el CV Oficial Actualizado
 */

const profileData = {
  name: "Uriel Méndez Romero",
  title: "Ingeniero en Sistemas Computacionales",
  tagline: "Desarrollo de Software, Soluciones Empresariales y Análisis de Datos.",
  about: "Experiencia en desarrollo de software, diseño de soluciones empresariales y análisis de datos. Especializado en el diseño, desarrollo y despliegue de aplicaciones para optimizar procesos de negocio utilizando Python, Java y SQL, así como en el modelado de datos con SAP HANA y el desarrollo de soluciones analíticas con Power BI. Capacidad para colaborar con usuarios de distintas áreas para traducir requerimientos operativos en soluciones técnicas escalables. En constante formación en tecnologías emergentes, con especial interés en inteligencia artificial, automatización de procesos y desarrollo de soluciones inteligentes.",
  location: "Veracruz, Ver. México",
  phone: "+52 229 290 7331",
  email: "urielmendezr05@gmail.com",
  resumeUrl: "#", // Enlace a CV en PDF

  socials: {
    github: "https://github.com/urielmndzr",
    linkedin: "https://linkedin.com/in/urielmendezr",
    email: "mailto:urielmendezr05@gmail.com",
    phone: "tel:2292907331"
  },

  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "B1+" }
  ]
};

const trajectoryData = [
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
];

const projectsData = [
  {
    id: 1,
    title: "Demostrador Automático de Teoremas (2024)",
    category: "Investigación y Algoritmos",
    description: "Marco computacional diseñado para automatizar la validación de argumentos en Lógica Proposicional mediante la transformación de lenguaje formal en demostraciones ejecutables por máquina. Incorpora un analizador léxico y sintáctico (parser) personalizado desarrollado con JavaCC, estructuras de Árboles de Sintaxis Binaria (AST) para la aplicación recursiva de leyes lógicas, un motor de normalización a Forma Normal Conjuntiva (CNF) y demostración automática de teoremas (ATP) basada en el Principio de Resolución.",
    image: "assets/images/projects/theorem-prover/logo.png",
    images: [
      "assets/images/projects/theorem-prover/logo.png"
    ],
    technologies: ["Java", "Lógica Proposicional", "Parsing", "Algoritmos", "Estructuras de Datos"],
    demoUrl: "#",
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
];

const skillsData = {
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
    "Redes de computadoras"
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
};
