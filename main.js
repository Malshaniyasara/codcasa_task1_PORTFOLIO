let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); // Update the selector here

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('active', window.scrollY > 100);
};

// Add smooth scrolling to navigation links phone eke size ekt hduna
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth' // Add smooth scrolling behavior
            });
        }

        // Close the menu (if needed)
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
//scrool eke wada
ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});
//myname set eka uda idn ena eka heading okkm enw animation eka
ScrollReveal().reveal('.home-content,.heading' ,{origin:'top' });
//phto eka mage eka animation
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box ,.contact form',{origin:'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right' });
 
//typescript
const element = document.querySelector('.multiple-text');

if (element) {
    const options = {
        strings: ['Frontend Developer', 'Frontend Developer', 'Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    };

    const typed = new Typed(element, options);
}


// Get all image elements
const images = document.querySelectorAll('.image-box img');

// Add a click event listener to each image
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Toggle the "clicked" class for the clicked image
    image.classList.toggle('clicked');
  });
});
