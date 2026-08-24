/**
 * SISTEMA DE INTERNACIONALIZACIÓN (i18n) - PORTAFOLIO URIEL MÉNDEZ
 */

const staticTranslations = {
  es: {
    // Navegación
    "nav.home": "Inicio",
    "nav.about": "Sobre Mí",
    "nav.trajectory": "Trayectoria",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    // Hero Section
    "hero.badge": "Disponible para nuevos retos y proyectos",
    "hero.greeting": "Hola, soy",
    "hero.exp_btn": "Ver Experiencia",
    "hero.contact_btn": "Contacto Directo",

    // About Section
    "about.title": 'Sobre <span class="gradient-text">Mí</span>',
    "about.subtitle": "Ingeniero en Sistemas Computacionales · Graduado con Mención Honorífica",

    // Trajectory Section
    "trajectory.title": 'Mi <span class="gradient-text">Trayectoria</span>',
    "trajectory.subtitle": "Experiencia profesional en la industria y formación académica.",

    // Projects Section
    "projects.title": 'Proyectos <span class="gradient-text">Destacados</span>',
    "projects.subtitle": "Investigación, aplicaciones analíticas y soluciones de software creadas.",

    // Skills Section
    "skills.title": 'Habilidades <span class="gradient-text">Técnicas y Blandas</span>',
    "skills.subtitle": "Conocimientos estructurados por áreas de especialización, herramientas e idiomas.",
    "skills.programming": "Programación y Lenguajes",
    "skills.erp": "Sistemas Empresariales y ERP",
    "skills.bi": "BI & Analítica de Datos",
    "skills.tools": "Herramientas & DevOps",
    "skills.soft": "Competencias Profesionales",
    "skills.languages": "Idiomas",

    // Contact Section
    "contact.title": 'Contacto <span class="gradient-text">Directo</span>',
    "contact.subtitle": "¿Tienes un proyecto o deseas colaborar? Estoy disponible para charlar.",
    "contact.info_title": "Información Directa",
    "contact.info_desc": "No dudes en ponerte en contacto a través de cualquiera de los siguientes medios.",
    "contact.phone_label": "Teléfono",
    "contact.email_label": "Correo Electrónico",
    "contact.location_label": "Ubicación",
    "contact.footer_text": "Diseñado y desarrollado con pasión por Uriel Méndez Romero.",

    // Modal Preview
    "modal.header_title": "Documentación Rápida: Demostrador Automático de Teoremas",
    "modal.full_page_btn": "Página Completa ↗",
    "modal.banner_title": 'Demostrador Automático de Teoremas <span class="gradient-text">(ATP)</span>',
    "modal.banner_desc": 'Motor de <strong>Computación Simbólica e Inteligencia Artificial Deductiva</strong> en Lógica Proposicional. Reemplaza la evaluación exponencial de las tablas de verdad tradicionales (2ⁿ) por una manipulación sintáctica eficiente sobre <strong>Árboles de Sintaxis Abstracta (AST)</strong>. Ofrece <strong>transparencia total</strong> al desglosar paso a paso cada regla de reescritura FNC y refutación por el <strong>Método de Resolución de Robinson</strong>.',
    "modal.pipeline_title": "Flujo de Procesamiento Algorítmico",
    "modal.step1_title": "Parsing y Análisis Formal",
    "modal.step1_desc": "Reconocimiento de premisas, conclusión y conectivos lógicos con manejo de precedencia.",
    "modal.step2_title": "Construcción del AST y Reducción al Absurdo",
    "modal.step2_desc": "Representación en Árbol Binario de Sintaxis (AST) —con operadores como nodos internos y variables como hojas— y negación de la conclusión (P₁ ∧ P₂ ∧ ... ∧ ¬C).",
    "modal.step3_title": "Normalización a Forma Normal Conjuntiva (FNC)",
    "modal.step3_desc": "Conversión en conjunciones de cláusulas disyuntivas (FNC) mediante 5 pasos (eliminación de bicondicionales, condicionales, De Morgan, doble negación y distributividad).",
    "modal.step4_title": "Método de Resolución de Robinson (□ Cláusula Vacía)",
    "modal.step4_desc": "Cancelación de literales complementarios hasta derivar la cláusula vacía, certificando la validez del teorema.",
    "modal.explore_btn": "Explorar Documentación Técnica Completa →"
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.trajectory": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    // Hero Section
    "hero.badge": "Available for new challenges & opportunities",
    "hero.greeting": "Hi, I am",
    "hero.exp_btn": "View Experience",
    "hero.contact_btn": "Get in Touch",

    // About Section
    "about.title": 'About <span class="gradient-text">Me</span>',
    "about.subtitle": "Computer Systems Engineer · Graduated with Honors",

    // Trajectory Section
    "trajectory.title": 'My <span class="gradient-text">Career Journey</span>',
    "trajectory.subtitle": "Professional industry experience and academic background.",

    // Projects Section
    "projects.title": 'Featured <span class="gradient-text">Projects</span>',
    "projects.subtitle": "Research, analytical applications, and custom software solutions.",

    // Skills Section
    "skills.title": 'Technical & Soft <span class="gradient-text">Skills</span>',
    "skills.subtitle": "Structured expertise across domain areas, tools, and spoken languages.",
    "skills.programming": "Programming & Languages",
    "skills.erp": "Enterprise Systems & ERP",
    "skills.bi": "BI & Data Analytics",
    "skills.tools": "Tools & DevOps",
    "skills.soft": "Professional Competencies",
    "skills.languages": "Spoken Languages",

    // Contact Section
    "contact.title": 'Direct <span class="gradient-text">Contact</span>',
    "contact.subtitle": "Have a project or want to collaborate? Feel free to reach out.",
    "contact.info_title": "Direct Information",
    "contact.info_desc": "Feel free to get in touch through any of the following channels.",
    "contact.phone_label": "Phone",
    "contact.email_label": "Email Address",
    "contact.location_label": "Location",
    "contact.footer_text": "Designed and built with passion by Uriel Méndez Romero.",

    // Modal Preview
    "modal.header_title": "Quick Documentation: Automated Theorem Prover",
    "modal.full_page_btn": "Full Page ↗",
    "modal.banner_title": 'Automated Theorem Prover <span class="gradient-text">(ATP)</span>',
    "modal.banner_desc": 'Symbolic Computation & Deductive Artificial Intelligence engine in Propositional Logic. Replaces traditional exponential truth table evaluation (2ⁿ) with efficient syntactic manipulation on Binary Abstract Syntax Trees (AST). Delivers full transparency by auditing step-by-step each CNF rewrite rule and Robinson\'s Resolution Method refutation.',
    "modal.pipeline_title": "Algorithmic Processing Pipeline",
    "modal.step1_title": "Parsing & Formal Analysis",
    "modal.step1_desc": "Recognition of premises, conclusion, and logical connectives with operator precedence.",
    "modal.step2_title": "AST Construction & Proof by Contradiction",
    "modal.step2_desc": "Representation in a Binary Syntax Tree (AST) —operators as internal nodes and variables as leaves— and conclusion negation (P₁ ∧ P₂ ∧ ... ∧ ¬C).",
    "modal.step3_title": "Conjunctive Normal Form (CNF) Normalization",
    "modal.step3_desc": "Conversion into conjunctions of disjunctive clauses (CNF) via 5 steps (biconditional elimination, conditional elimination, De Morgan, double negation, and distribution).",
    "modal.step4_title": "Robinson's Resolution Method (□ Empty Clause)",
    "modal.step4_desc": "Cancellation of complementary literals until deriving the empty clause, certifying theorem validity.",
    "modal.explore_btn": "Explore Full Technical Documentation →"
  }
};

function getCurrentLanguage() {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) return savedLang;

  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith('en')) {
    return 'en';
  }
  return 'es';
}

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  updateStaticTranslations(lang);
}

function updateStaticTranslations(lang = getCurrentLanguage()) {
  const translations = staticTranslations[lang] || staticTranslations['es'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = translations[key];
      } else {
        el.textContent = translations[key];
      }
    }
  });

  // Update HTML data attribute
  document.documentElement.setAttribute('lang', lang);

  // Update lang-toggle button active highlight
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    const optEs = langToggleBtn.querySelector('.lang-opt-es');
    const optEn = langToggleBtn.querySelector('.lang-opt-en');
    if (optEs && optEn) {
      if (lang === 'en') {
        optEs.classList.remove('active');
        optEn.classList.add('active');
      } else {
        optEs.classList.add('active');
        optEn.classList.remove('active');
      }
    }
  }
}
