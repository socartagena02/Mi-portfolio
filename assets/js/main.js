async function loadParticles() {
  await tsParticles.load("tsparticles", {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" }
      }
    },
    background: {
      color: "#000000" 
    }
  });
}

loadParticles();

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});

let lastScrollTop = 0;
const navbar= document.querySelector("nav")

window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.classList.add("nav-hidden");
    }else{
        navbar.classList.remove("nav-hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);


const btnVerMas = document.getElementById('btnverMas');
const carpeta = document.getElementById('proyectos2');
const overlay = document.getElementById('dolphinOverlay');

btnVerMas.addEventListener('click', (e) => {
    e.preventDefault();
    carpeta.classList.toggle('mostrar');
    overlay.classList.toggle('mostrar');
});

overlay.addEventListener('click', () => {
    carpeta.classList.remove('mostrar');
    overlay.classList.remove('mostrar');
});

document.querySelector('.btn-close').addEventListener('click', () => {
    carpeta.classList.remove('mostrar');
    overlay.classList.remove('mostrar');
});

emailjs.init("0gKZvg9hLyn7Ta5hp");

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const datos = {
        nombre: document.getElementById('name').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('message').value
    };

    const btn = document.querySelector('.btn-send');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    emailjs.send("service_reo0iin", "template_rsafffm", datos)
        .then(() => {
            btn.textContent = 'Enviado ✓';
            this.reset();
            setTimeout(() => {
                btn.textContent = 'Enviar';
                btn.disabled = false;
            }, 3000);
        })
        .catch(() => {
            btn.textContent = 'Error, intenta de nuevo';
            btn.disabled = false;
        });
});

const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_sobre: "Sobre mi",
        nav_proyectos: "Mis proyectos",
        nav_tecnologias: "Tecnologías",
        nav_contacto: "Contacto",
        hero_titulo: "Hola soy <span>Sofía Cartagena</span>",
        hero_subtitulo: "Ingeniera en informática | Desarrolladora Full Stack",
        hero_cv: "Descargar CV",
        hero_proyectos: "Ver mis proyectos",
        sobre_titulo: "Sobre mí",
        sobre_p1: "Ingeniera en informática especializada en desarrollo full-stack con foco en backend utilizando Python, Django y PostgreSQL. He desarrollado aplicaciones web, APIs REST y soluciones orientadas a la automatización y gestión de información.",
        sobre_p2: "Complemento mis conocimientos backend con experiencia en tecnologías frontend como Angular, TypeScript y React Native, participando en el desarrollo de interfaces modernas y aplicaciones multiplataformas",
        sobre_h3:"Me interesa construir software estable, mantenible y centrado en resolver problemas reales.",
        exp_titulo: "Experiencia",
        exp_cargo: "Sept 2025 - Nov 2025 | Jornada completa",
        edu_titulo: "Educación",
        edu_carrera: "Ingeniería en Informática",
        edu_fecha: "Mar 2022 - Dic 2025",
        cert_titulo: "Certificaciones",
        proy_titulo: "Mis proyectos",
        tec_titulo: "Tecnologías",
        tec_diseno: "Frontend",
        tec_lenguajes: "Backend",
        tec_bd: "Base de datos",
        tec_framework: "Framework",
        tec_control: "Herramientas",
        tec_deploy: "Infraestructura",
        proy_explorar: "Explorar mas proyectos",
        idiomas_titulo: "Idiomas",
        idiomas_es: "Español",
        idiomas_es_nivel: "Nativo",
        idiomas_en: "Inglés",
        idiomas_en_nivel: "Inglés intermedio B2",
        contacto_titulo: "Trabajemos juntos",
        contacto_subtitulo: "Envíame un mensaje",
        contacto_nombre: "Nombre completo",
        contacto_email: "Correo electrónico",
        contacto_mensaje: "Mensaje",
        contacto_enviar: "Enviar",
        contacto_desc: "Siempre dispuesta a discutir nuevas oportunidades, proyectos creativos o colaboraciones. Ya sea que tengas un proyecto en mente o quieras explorar posibilidades, me encantaría conectar.",
        contacto_li1: "Desarrollo web.",
        contacto_li2: "Diseño UI/UX.",
        contacto_li3: "APIs REST.",
        contacto_li4: "Desarrollo aplicaciones.",
        footer: "© 2026 Sofía Cartagena",
        exp_hospital: "Hospital Geriátrico La Paz de la Tarde",
        exp_li1: "<span>Gestión de infraestructura de red:</span> Configuración y despliegue de conectividad cableada e inalámbrica, garantizando la estabilidad de la red local (LAN).",
        exp_li2: "<span>Mantenimiento preventivo y correctivo:</span> Resolución de incidencias de hardware y software en las estaciones de trabajo, optimizando el rendimiento de los equipos.",
        exp_li3: "<span>Administración de periféricos:</span> Instalación, configuración y \"provisionamiento\" de sistemas de impresión y dispositivos de red, reduciendo tiempos de inactividad técnica.",
        exp_li4: "<span>Soporte multiplataforma:</span> Diagnóstico técnico y alfabetización digital para usuarios finales, facilitando la adopción de nuevas herramientas tecnológicas.",
        proy_zstars:"Z-STARS AI - Plataforma web de Estimulación cognitiva.",
        proy_zstars_desc: "Plataforma web de Estimulación cognitiva con minijuegos interactivos e IA.",
        proy_ai: "Herramienta para detectar caras en asistencia.",
        proy_stars:"Starsverse - Página web e-commerce automatizado.",
        proy_starsverse: "Una plataforma de compras online para fanáticos del anime.",
        proy_AgeUp: "AgeUp_Games es un sistema web de minijuegos cognitivos para el adulto mayor.",
        proy_paradise: "The Paradise of the Wheel es una aplicación móvil de viajes para alumnos de la institución.",
        App_social: "Red social gamificada - Full-Stack Mobile",
        music_disc: "App móvil con backend API para interacción social gamificada en equipo.",
        contacto_subtitulo: "Envíame un mensaje"
    },
    en: {
        nav_inicio: "Home",
        nav_sobre: "About me",
        nav_proyectos: "My Projects",
        nav_tecnologias: "Technologies",
        nav_contacto: "Contact",
        hero_titulo: "Hi, I'm <span>Sofía Cartagena</span>",
        hero_subtitulo: "Computer Engineer | Full Stack Developer",
        hero_cv: "Download CV",
        hero_proyectos: "View my projects",
        sobre_titulo: "About Me",
        sobre_p1: "Computer Engineer specializing in full-stack development with a focus on backend using Python, Django, and PostgreSQL. I have developed web applications, REST APIs, and solutions focused on automation and information management.",
        sobre_p2: "I complement my backend expertise with experience in frontend technologies such as Angular, TypeScript, and React Native, contributing to the development of modern interfaces and cross-platform applications.",
        sobre_h3:"I'm committed to building stable, maintainable software that focuses on solving real-world problems.",
        exp_titulo: "Experience",
        exp_cargo: "Sept 2025 - Nov 2025 | Full-time",
        edu_titulo: "Education",
        edu_carrera: "Computer Engineering",
        edu_fecha: "Mar 2022 - Dec 2025",
        cert_titulo: "Certifications",
        proy_titulo: "My Projects",
        tec_titulo: "Technologies",
        tec_diseno: "Frontend",
        tec_lenguajes: "Backend",
        tec_bd: "Databases",
        tec_framework: "Frameworks",
        tec_control: "DevTools",
        tec_deploy: "Infrastructure",
        proy_explorar: "Explore more projects",
        idiomas_titulo: "Languages",
        idiomas_es: "Spanish",
        idiomas_es_nivel: "Native",
        idiomas_en: "English",
        idiomas_en_nivel: "Intermediate B2",
        contacto_titulo: "Let's Work Together",
        contacto_subtitulo: "Send me a message",
        contacto_nombre: "Full name",
        contacto_email: "Email address",
        contacto_mensaje: "Message",
        contacto_enviar: "Send",
        contacto_desc: "Always open to discussing new opportunities, creative projects, or collaborations. Whether you have a project in mind or just want to explore possibilities, I'd love to connect.",
        contacto_li1: "Web Development.",
        contacto_li2: "UI/UX Design.",
        contacto_li3: "REST APIs.",
        contacto_li4: "Apps development.",
        footer: "© 2026 Sofía Cartagena",
        exp_hospital: "La Paz de la Tarde Geriatric Hospital",
        exp_li1: "<span>Network infrastructure management:</span> Configuration and deployment of wired and wireless connectivity, ensuring local network (LAN) stability.",
        exp_li2: "<span>Preventive and corrective maintenance:</span> Resolution of hardware and software incidents on workstations, optimizing equipment performance.",
        exp_li3: "<span>Peripheral administration:</span> Installation, configuration and provisioning of printing systems and network devices, reducing technical downtime.",
        exp_li4: "<span>Cross-platform support:</span> Technical diagnosis and digital literacy for end users, facilitating adoption of new technological tools.",
        proy_zstars:"Z-STARS AI - Cognitive stimulation web platform.",
        proy_zstars_desc: "Web platform for cognitive stimulation with interactive mini-games and AI.",
        proy_ai: "Tool for detecting faces in attendance tracking.",
        proy_starsverse: "An online shopping platform for anime fans.",
        proy_stars:"Starsverse - Automated e-commerce website.",
        proy_AgeUp: "AgeUp_Games is a web-based cognitive mini-game system for the elderly.",
        proy_paradise: "The Paradise of the Wheel is a mobile travel app for students of the institution.",
        App_social: "Gamified social network - Full-Stack Mobile",
        music_disc: "Mobile app with an API backend for gamified team-based social interaction.",
        contacto_subtitulo: "Send me a message",
    }
};

function applyLang(lang) {
    const t = translations[lang];
    document.getElementById('lang-toggle').textContent =
        lang === 'es' ? 'EN' : 'ES';

    localStorage.setItem('lang', lang);

    document.querySelector('.btn-download').href =
        lang === 'en'
            ? './assets/Sofia_Cartagena_FullStack_CV_EN.pdf'
            : './assets/Sofia_Cartagena_FullStack_CV.pdf';

    document.getElementById('lang-toggle').textContent = lang === 'es' ? 'EN' : 'ES';
    localStorage.setItem('lang', lang);

    document.querySelector('a[href="#hero"]').textContent = t.nav_inicio;
    document.querySelector('a[href="#proyectos"]').textContent = t.nav_proyectos;
    document.querySelector('a[href="#contacto"]').textContent = t.nav_contacto;
    document.querySelector('a[href="#sobremi"]').textContent = t.nav_sobre;

    document.querySelector('#hero h2').innerHTML = t.hero_titulo;
    document.querySelector('#hero p').textContent = t.hero_subtitulo;
    document.querySelector('.btn-download').innerHTML = t.hero_cv + ' <i class="bi bi-download"></i>';
    document.querySelector('.boton-proyectos a').textContent = t.hero_proyectos;

    document.querySelector('#sobremi h2').textContent = t.sobre_titulo;
    const sobreP = document.querySelectorAll('#sobremi .sobremi-texto p');
    sobreP[0].textContent = t.sobre_p1; 
    sobreP[1].textContent = t.sobre_p2;

document.querySelector('#sobremi .sobremi-texto h3').textContent = t.sobre_h3;
    document.querySelector('#tecnologias h2').textContent = t.tec_titulo;
    document.querySelector('.frontend-dev h4').innerHTML = t.tec_diseno + ' <i class="bi bi-brush"></i>';
    document.querySelector('.backend-dev h4').innerHTML = t.tec_lenguajes + ' <i class="bi bi-file-code"></i>';
    document.querySelector('.bd h4').innerHTML = t.tec_bd + ' <i class="bi bi-database"></i>';
    document.querySelector('.framework h4').innerHTML = t.tec_framework + ' <i class="bi bi-bootstrap"></i>';
    document.querySelector('.control h4').innerHTML = t.tec_control + ' <i class="bi bi-git"></i>';
    document.querySelector('.deploy h4').innerHTML = t.tec_deploy + ' <i class="bi bi-rocket-takeoff"></i>';

    document.querySelector('#experience h2').textContent = t.exp_titulo;
    
    const expH4 = document.querySelectorAll('#experience .exp1 h4');
    expH4[0].innerHTML = t.exp_cargo;

    document.querySelector('#education h2').textContent = t.edu_titulo;
    document.querySelectorAll('.edu-text h3')[1].textContent = t.edu_carrera;
    document.querySelector('.edu-text h4').textContent = t.edu_fecha;
    document.querySelector('.cert-info h3').textContent = t.cert_titulo;

    document.querySelector('#proyectos h2').textContent = t.proy_titulo;
    document.querySelector('.otros-proyectos p').textContent = t.proy_explorar;

    document.querySelector('#language h2').textContent = t.idiomas_titulo;
    document.querySelector('.spanish h3').textContent = t.idiomas_es;
    document.querySelector('.spanish p').textContent = t.idiomas_es_nivel;
    document.querySelector('.english h3').textContent = t.idiomas_en;
    document.querySelector('.english p').textContent = t.idiomas_en_nivel;

    document.querySelector('#contacto h2').textContent = t.contacto_titulo;
    document.querySelector('label[for="name"]').textContent = t.contacto_nombre;
    document.querySelector('label[for="email"]').textContent = t.contacto_email;
    document.querySelector('label[for="message"]').textContent = t.contacto_mensaje;
    document.querySelector('.btn-send').innerHTML = t.contacto_enviar + ' <i class="bi bi-send"></i>';
    document.querySelector('.descripcion p').textContent = t.contacto_desc;
    const descLi = document.querySelectorAll('.descripcion li');
    descLi[0].textContent = t.contacto_li1;
    descLi[1].textContent = t.contacto_li2;
    descLi[2].textContent = t.contacto_li3;
    descLi[3].textContent = t.contacto_li4;

    document.querySelector('footer p').textContent = t.footer;
    document.querySelectorAll('[data-i18n]').forEach(el => {
    
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
    });
  }


function toggleLang() {
    const current = localStorage.getItem('lang') || 'es';
    applyLang(current === 'es' ? 'en' : 'es');
}

const savedLang = localStorage.getItem('lang') || 'es';
applyLang(savedLang);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));