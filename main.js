const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// menu show 
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// menu hidden
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// doi bacground haeder
function scrollHeader(){
    const header = document.getElementById('header');

    if(this.scrollY >= 50)
        header.classList.add('scroll-header');
    else 
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// swipper js
var swiperPopular = new Swiper(".popular-container", {
    loop : true, 
    spaceBetween : 24,
    slidesPreview: 'auto',
    grapCursor : true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween: 48,
        },
      },
  });

//   mixiup js
let mixerFeatued = mixitup('.featured-content', {
    selectors: {
        target: '.featured-card'
    },
    animation: {
        duration: 300
    }
});

const linkFeatured = document.querySelectorAll('featured-item');

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))

// scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    
    if(this.scrollY >= 350)
        scrollUp.classList.add('show-scroll');
    else 
        scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

// scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

// scroll reaval animation]
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset : true
})

sr.reveal('.home-title, .popular-container, .feature-img, .featured-filter')
sr.reveal('.home-sub', {delay : 500})
sr.reveal('.home-elec', {delay : 500})
sr.reveal('.home-img', {delay : 700})
sr.reveal('.home-car-data', {delay : 900, interval: 100, origin: 'bottom'})
sr.reveal('.home-btn', {delay : 1000, origin: 'bottom'})
sr.reveal('.about-group, .offer-data', {origin: 'left'})
sr.reveal('.about-data, .offer-img', {origin: 'right'})
sr.reveal('.feature-map', {delay: 600, origin: 'bottom'})
sr.reveal('.feature-card', {interval: 300})
sr.reveal('.featured-card, .logo-content, .footer-content', {interval: 100})