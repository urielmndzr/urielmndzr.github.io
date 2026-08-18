# Uriel Mendez - Sitio Web Profesional y Portafolio

Este repositorio contiene la estructura completa y el código fuente de mi página web profesional, diseñada para ser publicada directamente en **GitHub Pages** en la dirección `https://urielmndzr.github.io`.

---

## 🚀 Jerarquía de Archivos y Carpetas

```text
urielmndzr.github.io/
├── index.html              # Estructura principal semántica, SEO y layout de la página
├── css/
│   ├── style.css           # Variables globales, temas (claro/oscuro) y diseño base
│   ├── components.css      # Estilos para navegación, hero, trayectoria, proyectos y contacto
│   └── animations.css      # Keyframes, animaciones flotantes y scroll reveal
├── js/
│   ├── data.js             # Datos estructurados (Perfil, Trayectoria, Proyectos, Habilidades)
│   └── main.js             # Lógica de renderizado dinámico, conmutador de tema y menú móvil
├── assets/
│   ├── images/
│   │   ├── profile/        # Foto de perfil (profile_picture.jpg)
│   │   ├── favicon/        # Iconos de sitio y favicons
│   │   └── projects/       # Imágenes organizadas por proyecto
│   └── icons/              # Iconos auxiliares
└── README.md               # Documentación y guía de despliegue
```

---

## 🛠️ Cómo Personalizar tu Información

Para actualizar tu información, trayectoria o proyectos **no necesitas modificar el HTML**. Todo está centralizado en el archivo:

📄 **[`js/data.js`](file:///d:/Documentos/website/urielmndzr.github.io/js/data.js)**

### 1. Perfil Principal (`profileData`)
Modifica tu nombre, título profesional, biografía y enlaces sociales:
```javascript
const profileData = {
  name: "Uriel Mendez",
  title: "Tu Profesión o Especialidad",
  tagline: "Tu frase de presentación...",
  about: "Tu biografía detallada...",
  email: "tu@correo.com",
  socials: {
    github: "https://github.com/urielmndzr",
    linkedin: "https://linkedin.com/in/urielmndzr"
  }
};
```

### 2. Trayectoria (`trajectoryData`)
Añade o edita tus roles de experiencia laboral y formación académica:
```javascript
const trajectoryData = [
  {
    type: "work",
    period: "2024 - Presente",
    role: "Tu Rol Principal",
    organization: "Nombre de la Empresa / Proyecto",
    description: "Descripción de tus logros e impacto...",
    skills: ["Tecnología 1", "Tecnología 2"]
  }
];
```

### 3. Proyectos (`projectsData`)
Agrega tus proyectos destacados con enlaces a demos y repositorios.

---

## 📢 Despliegue en GitHub Pages

Dado que este repositorio se llama `urielmndzr.github.io`, GitHub Pages lo desplegará **automáticamente** en la raíz de tu dominio una vez que envíes los cambios:

```bash
git add .
git commit -m "feat: estructura inicial de sitio web profesional"
git push origin main
```

En un par de minutos tu sitio estará en vivo en:  
👉 **`https://urielmndzr.github.io`**