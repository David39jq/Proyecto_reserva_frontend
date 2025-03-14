/*==================== MOSTRAR MENÚ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validar que existan variables
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // Agregamos la clase show-menu a la etiqueta div con la clase nav__menu
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== ELIMINAR MENÚ MÓVIL ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Cuando hacemos clic en cada enlace nav__link, eliminamos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===================== SECCIONES DE DESPLAZAMIENTO ENLACE ACTIVO =====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CAMBIAR ENCABEZADO DE FONDO =====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== MOSTRAR DESPLAZAMIENTO SUPERIOR =====================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*===================== TEMA OSCURO-CLARO ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema seleccionado previamente (si fue seleccionado por el usuario)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// Validamos si el usuario eligió previamente un tema
if (selectedTheme) {
  // Si se cumple la validación preguntamos cuál fue el problema para saber si activamos o desactivamos la oscuridad.
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activar/desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
    //Agrega o elimina el tema oscuro/icono
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Guardamos el tema y el icono actual que eligio el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== ANIMACIÓN DE REVELACIÓN DE DESPLAZAMIENTO =====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1400,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 100
})