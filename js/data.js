/**
 * Datos del Sitio Web Profesional - Uriel Méndez Romero
 * Basado en el CV Oficial
 */

const profileData = {
  name: "Uriel Méndez Romero",
  title: "Ingeniero en Sistemas Computacionales",
  tagline: "Desarrollo de Software, Soluciones Empresariales y Análisis de Datos.",
  about: "Ingeniero en Sistemas Computacionales con experiencia en el desarrollo de aplicaciones empresariales y soluciones basadas en datos. He participado en el análisis de requerimientos, el diseño e implementación de nuevas funcionalidades, así como en el desarrollo de reportes y procesos utilizando Python, Java, SQL, SAP HANA, Power BI y Grafana. Mi enfoque se centra en transformar necesidades del negocio en soluciones tecnológicas que optimicen procesos y faciliten la toma de decisiones, aplicando prácticas ágiles, CI/CD y un aprendizaje continuo en inteligencia artificial, automatización y tecnologías emergentes.",
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
    { name: "Inglés", level: "B1 (Intermedio)" }
  ],

  stats: [
    { label: "Experiencia ERP e IT", value: "Empresarial" },
    { label: "Tecnologías y BI", value: "Multi-Stack" },
    { label: "Distinción Académica", value: "Mención Honorífica" }
  ]
};

const trajectoryData = [
  {
    type: "work",
    period: "Diciembre 2025 – Julio 2026",
    role: "Software Developer",
    organization: "Ofix — Veracruz, México",
    points: [
      "Diseñé, desarrollé e implementé mejoras funcionales sobre el ERP corporativo (Odoo) utilizando Python, XML y JavaScript (Full-Stack), optimizando la eficiencia de los procesos del sistema.",
      "Colaboré con usuarios y áreas de negocio clave (contabilidad, crédito, costos y logística) para analizar requerimientos y transformar sus necesidades operativas en soluciones de software escalables.",
      "Estructuré consultas SQL y administré datos en PostgreSQL para respaldar aplicaciones empresariales, garantizar la integridad de la información y generar reportes operativos para la toma de decisiones.",
      "Participé en ciclos de desarrollo ágiles con Git y Jira, impulsando procesos de integración y despliegue continuo (CI/CD) para acelerar la entrega de funcionalidades y asegurar la estabilidad del sistema."
    ],
    skills: ["Python", "Odoo ERP", "JavaScript", "PostgreSQL", "SQL", "Git / Jira", "CI/CD", "Full-Stack"]
  },
  {
    type: "work",
    period: "Febrero 2025 – Diciembre 2025",
    role: "Commercial IT - Trainee",
    organization: "TenarisTamsa — Veracruz, México",
    points: [
      "Desarrollé dashboards corporativos en Power BI para transformar información clave del proceso comercial de la compañía en indicadores estratégicos que optimizaron el seguimiento y la toma de decisiones.",
      "Diseñé y modelé vistas relacionales en SAP HANA Studio para integrar y simplificar datos del ERP SAP, incrementando la disponibilidad de la información en reportes analíticos.",
      "Analicé y documenté modelos de datos correspondientes a reportes críticos del área, facilitando procesos de migración, garantizando la consistencia de la información y respaldando el desarrollo de nuevas soluciones digitales."
    ],
    skills: ["Power BI", "SAP HANA Studio", "SAP ERP", "Modelado de Datos", "Análisis de Datos", "Soluciones Digitales"]
  },
  {
    type: "education",
    period: "2020 – 2025",
    role: "Ingeniería en Sistemas Computacionales",
    organization: "Instituto Tecnológico de Veracruz",
    points: [
      "Graduado con mención honorífica.",
      "Formación enfocada en el ciclo completo de ingeniería de software (análisis, diseño y desarrollo).",
      "Modelado de bases de datos y construcción de consultas SQL optimizadas.",
      "Sólidos fundamentos de redes informáticas."
    ],
    skills: ["Ingeniería de Software", "Programación", "Bases de Datos y SQL", "Redes Informáticas", "Mención Honorífica"]
  },
  {
    type: "education",
    period: "2017 – 2020",
    role: "Profesional Técnico Bachiller en Informática",
    organization: "Colegio Nacional de Educación Profesional Técnica (CONALEP)",
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
    title: "Demostrador Automático de Teoremas (I+D)",
    category: "Investigación y Algoritmos",
    description: "Marco computacional diseñado para automatizar la validación de argumentos en Lógica Proposicional mediante la transformación de lenguaje formal en demostraciones ejecutables por máquina. Incorpora un analizador léxico y sintáctico (parser) personalizado desarrollado con JavaCC, estructuras de Árboles de Sintaxis Binaria (AST) para la aplicación recursiva de leyes lógicas, un motor de normalización a Forma Normal Conjuntiva (CNF) y demostración automática de teoremas (ATP) basada en el Principio de Resolución.",
    image: "assets/images/projects/theorem-prover/logo.png",
    images: [
      "assets/images/projects/theorem-prover/logo.png"
    ],
    technologies: ["Java", "JavaCC", "Lógica Proposicional", "Parsing", "Resolución ATP"],
    demoUrl: "#",
    repoUrl: "https://github.com/urielmndzr/AutomatedTheoremProver"
  },
  {
    id: 2,
    title: "Daily Diary — Gestión Ganadera",
    category: "Software de Escritorio",
    description: "Aplicación de escritorio desarrollada en Java para la gestión ganadera integral. Permite la administración del ganado, el seguimiento de la producción de leche y la generación de reportes por periodos. Incluye módulos para el registro de venta del ganado, optimizando la organización operativa y centralizando la información del negocio.",
    image: "assets/images/projects/daily-diary/logo.png",
    images: [
      "assets/images/projects/daily-diary/logo.png"
    ],
    technologies: ["Java", "SQL Embebido", "Gestión Ganadera", "Reportes y Analítica"],
    demoUrl: "#",
    repoUrl: "https://github.com/urielmndzr"
  },
  {
    id: 3,
    title: "Second Chance — Software Analítico Académico",
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
    { name: "Python", level: 92 },
    { name: "Java", level: 90 },
    { name: "SQL (PostgreSQL / SAP HANA)", level: 90 },
    { name: "C / C++", level: 80 },
    { name: "XML y Full-Stack Odoo ERP", level: 80 }
  ],
  toolsAndPlatforms: [
    { name: "Power BI, Grafana y Business Intelligence", level: 90 },
    { name: "SAP HANA Studio y ERP SAP", level: 85 },
    { name: "Odoo ERP y PostgreSQL", level: 85 },
    { name: "Git, GitHub y CI/CD", level: 90 },
    { name: "Docker y REST APIs", level: 80 },
    { name: "Linux y Herramientas Colaborativas (Jira, UML)", level: 90 }
  ],
  softSkills: [
    "Adaptabilidad",
    "Proactividad",
    "Responsabilidad",
    "Resolución de Problemas",
    "Trabajo en Equipo",
    "Autodidacta",
    "Liderazgo"
  ]
};
