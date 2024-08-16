/* BOTON DE SCROLL EN EL HEADER*/
const arrow = document.querySelector('#b-arrow');


    arrow.addEventListener("click", () => {
       const scroll = document.querySelector("#firtcontent");
       scroll.scrollIntoView({ behavior: 'smooth' });
});

//FIJAR EL NAV
// FIJAR EL NAV
const navContainer = document.getElementById("nav");

// Cálculo inicial de la posición del navContainer
let navPosition = navContainer.getBoundingClientRect().top + window.scrollY;

// Función para manejar el scroll
function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= navPosition) {
        navContainer.style.position = "fixed";
        navContainer.style.top = "-1";
        navContainer.style.width = "97%"; // Asegúrate de que el div ocupe todo el ancho
    } else {
        navContainer.style.position = "static"; // O "relative", dependiendo de tu diseño
    }
}

// Agregar el listener para el evento de scroll
window.addEventListener("scroll", handleScroll);

// Recalcular la posición cuando se redimensiona la ventana
window.addEventListener("resize", () => {
    navPosition = navContainer.getBoundingClientRect().top + window.scrollY;
});
