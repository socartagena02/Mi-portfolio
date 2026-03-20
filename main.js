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

const btnTheme = document.querySelector("#themes");

btnTheme.addEventListener("click", () => {
    const body = document.body;
    
    if (body.getAttribute("data-tema") === "light") {
        body.removeAttribute("data-tema");
    } else {
        body.setAttribute("data-tema", "light");
    }
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.setAttribute("data-tema", "dark");
}

btnTheme.addEventListener("click", () => {
    const body = document.body;
    
    if (body.getAttribute("data-tema") !== "light") {
        body.setAttribute("data-tema", "light");
    } else {
        body.removeAttribute("data-tema");
    }
});