/**
 * LÓGICA PRINCIPAL - PORTAFOLIO URIEL MÉNDEZ ROMERO
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProfile();
  renderTrajectory();
  renderProjects();
  renderSkills();
  initScrollAnimations();
  initNavbarScroll();
  initMobileMenu();
  initDocModal();
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

/* --- RENDERIZADO DE PERFIL Y STATS --- */
function renderProfile() {
  if (typeof profileData === 'undefined') return;

  const heroName = document.getElementById('hero-name');
  const heroTitle = document.getElementById('hero-title');
  const heroTagline = document.getElementById('hero-tagline');
  const aboutText = document.getElementById('about-text');
  const statsContainer = document.getElementById('stats-container');
  const heroCtaEmail = document.getElementById('hero-cta-email');

  // Contact section elements
  const contactPhone = document.getElementById('contact-phone');
  const contactEmail = document.getElementById('contact-email');
  const contactLocation = document.getElementById('contact-location');

  if (heroName) heroName.textContent = profileData.name;
  if (heroTitle) heroTitle.textContent = profileData.title;
  if (heroTagline) heroTagline.textContent = profileData.tagline;
  if (aboutText) aboutText.textContent = profileData.about;
  if (heroCtaEmail) heroCtaEmail.href = profileData.socials.email;

  if (contactPhone) {
    contactPhone.textContent = profileData.phone;
    contactPhone.href = profileData.socials.phone;
  }
  if (contactEmail) {
    contactEmail.textContent = profileData.email;
    contactEmail.href = profileData.socials.email;
  }
  if (contactLocation) contactLocation.textContent = profileData.location;
}

/* --- RENDERIZADO DE TRAYECTORIA --- */
function renderTrajectory() {
  const timelineContainer = document.getElementById('timeline-container');
  if (!timelineContainer || typeof trajectoryData === 'undefined') return;

  timelineContainer.innerHTML = trajectoryData.map((item, index) => {
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
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid || typeof projectsData === 'undefined') return;

  projectsGrid.innerHTML = projectsData.map((project, index) => `
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
              <span>Ver Documentación</span>
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
}

/* --- RENDERIZADO DE HABILIDADES Y IDIOMAS --- */
function renderSkills() {
  const programmingContainer = document.getElementById('programming-skills');
  const erpContainer = document.getElementById('erp-skills');
  const biContainer = document.getElementById('bi-skills');
  const devopsContainer = document.getElementById('devops-skills');
  const softSkillsContainer = document.getElementById('soft-skills');
  const languagesContainer = document.getElementById('languages-container');

  if (typeof skillsData === 'undefined') return;

  const renderChips = (skills) => skills.map(skill => `
    <span class="skill-chip">
      <span class="chip-dot"></span>
      ${skill}
    </span>
  `).join('');

  if (programmingContainer && skillsData.programming) {
    programmingContainer.innerHTML = renderChips(skillsData.programming);
  }
  if (erpContainer && skillsData.databasesAndErp) {
    erpContainer.innerHTML = renderChips(skillsData.databasesAndErp);
  }
  if (biContainer && skillsData.biAndAnalytics) {
    biContainer.innerHTML = renderChips(skillsData.biAndAnalytics);
  }
  if (devopsContainer && skillsData.toolsAndDevops) {
    devopsContainer.innerHTML = renderChips(skillsData.toolsAndDevops);
  }

  // Render soft skills badges
  if (softSkillsContainer && skillsData.softSkills) {
    softSkillsContainer.innerHTML = skillsData.softSkills.map(soft => `
      <span class="soft-skill-badge">${soft}</span>
    `).join('');
  }

  // Render languages
  if (languagesContainer && profileData.languages) {
    languagesContainer.innerHTML = profileData.languages.map(lang => `
      <div class="language-item">
        <span class="lang-name">${lang.name}</span>
        <span class="lang-level">${lang.level}</span>
      </div>
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

  revealElements.forEach(el => observer.observe(el));
  document.querySelectorAll('.skills-group').forEach(el => observer.observe(el));
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
    // Si la pantalla es pequeña o prefiere abrir en nueva pestaña con Ctrl/Cmd, permite el comportamiento por defecto del enlace.
    if (e.ctrlKey || e.metaKey) return;
    
    e.preventDefault();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
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

