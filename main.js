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
      color: "#1a0b2e" 
    }
  });
}

loadParticles();

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