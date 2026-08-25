/**
 * LÓGICA PRINCIPAL - PORTAFOLIO URIEL MÉNDEZ ROMERO
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderAllContent();
  initScrollAnimations();
  initNavbarScroll();
  initMobileMenu();
  initDocModal();

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

/* --- TEMA CLARO / OSCURO CON LOCALSTORAGE --- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* --- CONMUTADOR DE IDIOMA (ES / EN) --- */
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'es';

  if (typeof updateStaticTranslations === 'function') {
    updateStaticTranslations(currentLang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const activeLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'es';
      const newLang = activeLang === 'es' ? 'en' : 'es';
      
      if (typeof setLanguage === 'function') {
        setLanguage(newLang);
      }
      renderAllContent(newLang);
    });
  }
}

function renderAllContent(lang = (typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'es')) {
  renderProfile(lang);
  renderTrajectory(lang);
  renderProjects(lang);
  renderSkills(lang);
  renderCourses(lang);
  initScrollAnimations();
}

/* --- RENDERIZADO DE PERFIL Y STATS --- */
function renderProfile(lang = 'es') {
  if (typeof profileData === 'undefined') return;

  const profileLang = profileData[lang] || profileData;

  const heroName = document.getElementById('hero-name');
  const heroTitle = document.getElementById('hero-title');
  const heroTagline = document.getElementById('hero-tagline');
  const aboutText = document.getElementById('about-text');
  const heroCtaEmail = document.getElementById('hero-cta-email');

  // Contact section elements
  const contactPhone = document.getElementById('contact-phone');
  const contactEmail = document.getElementById('contact-email');
  const contactLocation = document.getElementById('contact-location');
  const languagesContainer = document.getElementById('languages-container');

  if (heroName) heroName.textContent = profileData.name;
  if (heroTitle) heroTitle.textContent = profileLang.title || profileData.title;
  if (heroTagline) heroTagline.textContent = profileLang.tagline || profileData.tagline;
  if (aboutText) aboutText.textContent = profileLang.about || profileData.about;
  if (heroCtaEmail && profileData.socials) heroCtaEmail.href = profileData.socials.email;

  if (contactPhone && profileData.socials) {
    contactPhone.textContent = profileData.phone;
    contactPhone.href = profileData.socials.phone;
  }
  if (contactEmail && profileData.socials) {
    contactEmail.textContent = profileData.email;
    contactEmail.href = profileData.socials.email;
  }
  if (contactLocation) contactLocation.textContent = profileData.location;

  // Render languages
  const langList = profileLang.languages || profileData.languages;
  if (languagesContainer && langList) {
    languagesContainer.innerHTML = langList.map(item => `
      <div class="language-item">
        <span class="lang-name">${item.name}</span>
        <span class="lang-level">${item.level}</span>
      </div>
    `).join('');
  }
}

/* --- RENDERIZADO DE TRAYECTORIA --- */
function renderTrajectory(lang = 'es') {
  const timelineContainer = document.getElementById('timeline-container');
  if (!timelineContainer || typeof trajectoryData === 'undefined') return;

  const dataList = (lang === 'en' && trajectoryData.en) ? trajectoryData.en : (trajectoryData.es || trajectoryData);

  timelineContainer.innerHTML = dataList.map((item, index) => {
    let contentHtml = '';
    if (item.points && Array.isArray(item.points)) {
      contentHtml = `
        <ul class="timeline-bullets">
          ${item.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      `;
    } else if (item.description) {
      contentHtml = `<p class="timeline-desc">${item.description}</p>`;
    }

    return `
      <div class="timeline-item reveal ${index % 2 === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-card">
          <div class="timeline-header">
            <span class="timeline-period">${item.period}</span>
          </div>
          <h3 class="timeline-role">${item.role}</h3>
          <div class="timeline-org">${item.organization}</div>
          ${contentHtml}
          <div class="tag-list">
            ${item.skills.map(s => `<span class="tag">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* --- RENDERIZADO DE PROYECTOS --- */
function renderProjects(lang = 'es') {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid || typeof projectsData === 'undefined') return;

  const dataList = (lang === 'en' && projectsData.en) ? projectsData.en : (projectsData.es || projectsData);
  const viewDocBtnLabel = lang === 'en' ? 'View Documentation' : 'Ver Documentación';

  projectsGrid.innerHTML = dataList.map((project, index) => `
    <div class="project-card glass-card reveal reveal-delay-${(index % 3) + 1}">
      <div class="project-img-wrapper">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <span class="project-category">${project.category}</span>
      </div>
      <div class="project-info">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tag-list" style="margin-bottom: 1rem;">
          ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.docUrl ? `
            <a href="${project.docUrl}" class="btn btn-primary btn-open-doc" style="padding: 0.45rem 1rem; font-size: 0.82rem;" data-doc-target="${project.docUrl}">
              <span>${viewDocBtnLabel}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
            </a>
          ` : ''}
          ${project.repoUrl && project.repoUrl !== '#' ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener" class="project-link">
              <span>GitHub</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Re-bind modal buttons after render
  initDocModal();
}

/* --- RENDERIZADO DE HABILIDADES Y IDIOMAS --- */
function renderSkills(lang = 'es') {
  const programmingContainer = document.getElementById('programming-skills');
  const erpContainer = document.getElementById('erp-skills');
  const biContainer = document.getElementById('bi-skills');
  const devopsContainer = document.getElementById('devops-skills');
  const softSkillsContainer = document.getElementById('soft-skills');

  if (typeof skillsData === 'undefined') return;

  const currentSkills = skillsData[lang] || skillsData.es || skillsData;

  const renderChips = (skills) => (skills || []).map(skill => `
    <span class="skill-chip">
      <span class="chip-dot"></span>
      ${skill}
    </span>
  `).join('');

  if (programmingContainer) {
    const list = currentSkills.programming || skillsData.programming || [];
    programmingContainer.innerHTML = renderChips(list);
  }
  if (erpContainer) {
    const list = currentSkills.databasesAndErp || skillsData.databasesAndErp || [];
    erpContainer.innerHTML = renderChips(list);
  }
  if (biContainer) {
    const list = currentSkills.biAndAnalytics || skillsData.biAndAnalytics || [];
    biContainer.innerHTML = renderChips(list);
  }
  if (devopsContainer) {
    const list = currentSkills.toolsAndDevops || skillsData.toolsAndDevops || [];
    devopsContainer.innerHTML = renderChips(list);
  }

  // Render soft skills badges for current language
  const softList = currentSkills.softSkills || (skillsData[lang] && skillsData[lang].softSkills) || skillsData.softSkills || [];
  if (softSkillsContainer && softList) {
    softSkillsContainer.innerHTML = softList.map(soft => `
      <span class="soft-skill-badge">${soft}</span>
    `).join('');
  }
}

/* --- ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER) --- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('active');
    }
    observer.observe(el);
  });
}

/* --- HEADER Y MENU ACTIVO CON SCROLL --- */
function initNavbarScroll() {
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --- MENU MOVIL --- */
function initMobileMenu() {
  const mobileToggleBtn = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* --- MODAL DE DOCUMENTACIÓN TÉCNICA --- */
function initDocModal() {
  const modal = document.getElementById('doc-modal');
  const closeBtn = document.getElementById('doc-modal-close');
  const openBtns = document.querySelectorAll('.btn-open-doc');

  if (!modal) return;

  const openModal = (e) => {
    if (e.ctrlKey || e.metaKey) return;
    
    e.preventDefault();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Update modal action buttons href based on language
    const currentLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'es';
    const targetDocUrl = currentLang === 'en' ? 'theorem-prover-en.html' : 'theorem-prover.html';
    
    modal.querySelectorAll('a[href*="theorem-prover"]').forEach(link => {
      link.href = targetDocUrl;
    });
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', openModal));

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --- RENDERIZADO DE CURSOS Y CERTIFICACIONES --- */
function renderCourses(lang) {
  const coursesGrid = document.getElementById('courses-grid');
  if (!coursesGrid || typeof coursesData === 'undefined') return;

  const dataList = (lang === 'en' && coursesData.en) ? coursesData.en : (coursesData.es || coursesData);
  const viewPdfLabel = lang === 'en' ? 'View Certificate (PDF)' : 'Ver Certificado (PDF)';
  const serialLabel = lang === 'en' ? 'Serial No.:' : 'No. Serie:';

  coursesGrid.innerHTML = dataList.map((course, index) => `
    <div class="course-card glass-card reveal reveal-delay-${(index % 3) + 1}">
      <div class="course-card-header">
        <div class="course-icon-badge">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
          </svg>
        </div>
        <span class="course-date-badge">${course.date}</span>
      </div>

      <h3 class="course-title">${course.title}</h3>
      <div class="course-issuer">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>${course.issuer}</span>
      </div>

      <div class="course-meta">
        <span class="course-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          ${course.duration}
        </span>
        <span class="course-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
          <strong>${serialLabel}</strong> ${course.serialNumber}
        </span>
      </div>

      <p class="course-desc">${course.description}</p>

      ${course.points && course.points.length ? `
        <ul class="course-bullets">
          ${course.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      ` : ''}



      <div class="course-footer">
        <a href="${course.certificatePdf}" target="_blank" rel="noopener" class="btn-pdf">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span>${viewPdfLabel}</span>
        </a>
      </div>
    </div>
  `).join('');
}
