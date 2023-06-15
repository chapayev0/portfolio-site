
  
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');

menuicon.onclick = () => {

    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
  
    function makeNavbarActive() {
      let currentSection = '';
  
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navbarLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');
        }
      });
    }
  
    makeNavbarActive(); // Set initial active state on page load
  
    window.addEventListener('scroll', makeNavbarActive);
  });

  window.onscroll = () => {

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

  };
  
  
  ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .service-container, .protfolio-box, .contact form, .hireme-container, .dream', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .personal-content, .text-block ', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content, .service-details, .mywork-block', { origin:'right' });
    
const typed = new Typed('.multiple-text',{

    strings:['Fullstack Developer', 'Web Designer', 'Graphic Designer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
