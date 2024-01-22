let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content , .portfolio-h2, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .socials', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});


const typed = new Typed('.multiple-text',{
    strings: ['Software Engineer', 'Data Scientist', 'Full-stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const heading = document.getElementById("friday-title");


function animateLetters() {
    let i = 0;
    const text = "F.R.I.D.A.Y";
    
    const intervalId = setInterval(() => {
      if (i < text.length) {
        heading.textContent = text.slice(0, i+1);
  
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
}
  

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateLetters();
            observer.disconnect(); // Run the animation only once
        }
    });
});
observer.observe(heading);