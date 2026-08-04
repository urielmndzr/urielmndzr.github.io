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
  initContactForm();
});

/* --- TEMA CLARO / OSCURO CON LOCALSTORAGE --- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
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

  if (statsContainer && profileData.stats) {
    statsContainer.innerHTML = profileData.stats.map(stat => `
      <div class="stat-item">
        <div class="stat-number gradient-text">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
  }
}

/* --- RENDERIZADO DE TRAYECTORIA --- */
function renderTrajectory() {
  const timelineContainer = document.getElementById('timeline-container');
  if (!timelineContainer || typeof trajectoryData === 'undefined') return;

  timelineContainer.innerHTML = trajectoryData.map((item, index) => `
    <div class="timeline-item reveal ${index % 2 === 0 ? 'reveal-delay-1' : 'reveal-delay-2'}">
      <div class="timeline-dot"></div>
      <div class="timeline-content glass-card">
        <div class="timeline-header">
          <span class="timeline-period">${item.period}</span>
        </div>
        <h3 class="timeline-role">${item.role}</h3>
        <div class="timeline-org">${item.organization}</div>
        <p class="timeline-desc">${item.description}</p>
        <div class="tag-list">
          ${item.skills.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
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
          ${project.repoUrl !== '#' ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener" class="project-link">
              <span>GitHub / Repositorio</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* --- RENDERIZADO DE HABILIDADES & IDIOMAS --- */
function renderSkills() {
  const programmingContainer = document.getElementById('programming-skills');
  const toolSkillsContainer = document.getElementById('tool-skills');
  const softSkillsContainer = document.getElementById('soft-skills');
  const languagesContainer = document.getElementById('languages-container');

  if (typeof skillsData === 'undefined') return;

  const renderSkillList = (skills) => skills.map(skill => `
    <div class="skill-item">
      <div class="skill-info">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" data-level="${skill.level}"></div>
      </div>
    </div>
  `).join('');

  if (programmingContainer && skillsData.programming) {
    programmingContainer.innerHTML = renderSkillList(skillsData.programming);
  }
  if (toolSkillsContainer && skillsData.toolsAndPlatforms) {
    toolSkillsContainer.innerHTML = renderSkillList(skillsData.toolsAndPlatforms);
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

        // Animar barras de habilidades si están en el elemento visible
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = `${level}%`;
        });
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

/* --- FORMULARIO DE CONTACTO --- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      
      btn.disabled = true;
      btn.innerHTML = 'Enviando...';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        
        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.className = 'form-status success';
          formStatus.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
        }
        
        form.reset();
        
        setTimeout(() => {
          if (formStatus) formStatus.style.display = 'none';
        }, 5000);
      }, 1200);
    });
  }
}
