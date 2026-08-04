/**
 * Datos del Sitio Web Profesional - Uriel Méndez Romero
 * Basado en el CV Oficial
 */

const profileData = {
  name: "Uriel Méndez Romero",
  title: "Ingeniero en Sistemas Computacionales",
  tagline: "Especialista en Desarrollo de Software, Soluciones Empresariales ERP & Análisis de Datos.",
  about: "Ingeniero en Sistemas Computacionales graduado con mención honorífica. Apasionado por el desarrollo de software, el diseño de soluciones empresariales y el análisis de datos. Cuento con experiencia en la implementación y despliegue de aplicaciones para optimizar procesos de negocio con Python, Java, SQL, SAP HANA y Power BI. Mi enfoque combina la colaboración ágil (CI/CD) con la formación continua en inteligencia artificial, automatización y soluciones inteligentes.",
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
    { label: "Distinción Académica", value: "Mención Honorífica" },
    { label: "Experiencia ERP & IT", value: "Empresarial" },
    { label: "Tecnologías & BI", value: "Multi-stack" },
    { label: "Compromiso Técnico", value: "100%" }
  ]
};

const trajectoryData = [
  {
    type: "work",
    period: "Diciembre 2025 – Julio 2026",
    role: "Software Developer",
    organization: "Ofix — Veracruz, México",
    description: "Diseñé, desarrollé e implementé mejoras funcionales sobre el ERP corporativo (Odoo) utilizando Python y XML (Full-Stack). Administré consultas SQL en PostgreSQL para garantizar la integridad de los datos y colaboré en ciclos ágiles de CI/CD utilizando Git y Jira.",
    skills: ["Python", "Odoo ERP", "PostgreSQL", "SQL", "Git", "Jira", "CI/CD", "XML"]
  },
  {
    type: "work",
    period: "Febrero 2025 – Diciembre 2025",
    role: "Commercial IT - Trainee",
    organization: "TenarisTamsa — Veracruz, México",
    description: "Desarrollé dashboards corporativos en Power BI para transformar datos comerciales en indicadores estratégicos. Diseñé y modelé vistas relacionales en SAP HANA Studio para integrar datos del ERP SAP y documenté modelos de datos para procesos de migración.",
    skills: ["Power BI", "SAP HANA Studio", "SAP ERP", "Modelado de Datos", "ETL", "SQL"]
  },
  {
    type: "education",
    period: "2020 – 2025",
    role: "Ingeniería en Sistemas Computacionales",
    organization: "Instituto Tecnológico de Veracruz",
    description: "Graduado con mención honorífica. Especialización en desarrollo de software, algoritmos, arquitectura de sistemas y bases de datos relacionales.",
    skills: ["Desarrollo de Software", "Algoritmos", "Bases de Datos", "Mención Honorífica"]
  },
  {
    type: "education",
    period: "2017 – 2020",
    role: "Profesional Técnico Bachiller en Informática",
    organization: "Colegio Nacional de Educación Profesional Técnica (CONALEP)",
    description: "Formación técnica con bases sólidas en programación, redes, mantenimiento de sistemas y lógica computacional.",
    skills: ["Informática", "Programación Base", "Redes"]
  }
];

const projectsData = [
  {
    id: 1,
    title: "Demostrador Automático de Teoremas (I+D)",
    category: "Investigación & Algoritmos",
    description: "Aplicación para la validación automática de argumentos lógicos, implementando parsing personalizado, algoritmos de normalización y estructuras de datos avanzadas.",
    image: "assets/images/avatar.png",
    technologies: ["Python", "Algoritmos", "Parsing", "Estructuras de Datos"],
    demoUrl: "#",
    repoUrl: "https://github.com/urielmndzr"
  },
  {
    id: 2,
    title: "Daily Diary — Gestión Ganadera",
    category: "Software de Escritorio",
    description: "Aplicación de escritorio desarrollada para la gestión ganadera, permitiendo llevar un registro sistemático del ganado y control de producción con acceso rápido a la información.",
    image: "assets/images/avatar.png",
    technologies: ["Java", "SQL Embebido", "Desktop App", "Gestión de Datos"],
    demoUrl: "#",
    repoUrl: "https://github.com/urielmndzr"
  },
  {
    id: 3,
    title: "Second Chance — Software Analítico Académico",
    category: "Software de Escritorio / Analítica",
    description: "Software de escritorio para análisis académico. Realiza extracción y limpieza de datos (ETL) desde Excel e integra una base de datos embebida para identificar patrones de bajo rendimiento escolar.",
    image: "assets/images/avatar.png",
    technologies: ["Java", "SQL Embebido", "ETL", "Análisis de Datos", "Excel Data"],
    demoUrl: "#",
    repoUrl: "https://github.com/urielmndzr"
  }
];

const skillsData = {
  programming: [
    { name: "Python", level: 92 },
    { name: "Java", level: 88 },
    { name: "SQL (PostgreSQL / SAP HANA)", level: 90 },
    { name: "C / C++", level: 80 },
    { name: "XML & Full-Stack Odoo ERP", level: 85 }
  ],
  toolsAndPlatforms: [
    { name: "Power BI & Business Intelligence", level: 90 },
    { name: "SAP HANA Studio & ERP SAP", level: 85 },
    { name: "Odoo ERP & PostgreSQL", level: 88 },
    { name: "Git, GitHub & CI/CD", level: 88 },
    { name: "Docker & REST APIs", level: 82 },
    { name: "Linux & Herramientas I+D (Jira, UML)", level: 85 }
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
