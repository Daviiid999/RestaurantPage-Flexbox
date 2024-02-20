const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const cerrarLinks = document.querySelectorAll('.nav-list a[href^="#"]');
const oscurecer = document.querySelector("#nav-container")

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    oscurecer.classList.add("obscurice");
    oscurecer.classList.add("nav-container");
}) 

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    oscurecer.classList.remove("obscurice");
    oscurecer.classList.remove("nav-container");
})

cerrarLinks.forEach(cerrarLink => {
    cerrarLink.addEventListener("click", () => {
        nav.classList.remove("visible");
        oscurecer.classList.remove("obscurice");
        oscurecer.classList.remove("nav-container");
    })
})
    