// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Smooth Scroll & Active Menu Highlight
const navLinks = document.querySelectorAll('#nav-menu a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Close menu on mobile after click
    navMenu.classList.remove('open');
  });
});

// Scroll Event for Active Link and Background Change
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === sectionId) {
          link.classList.add('active');
        }
      });
    }
  });

  // Dynamic Background Color Gradient
  const scrollProgress = scrollY / document.body.scrollHeight;
  const lightness = 90 - (scrollProgress * 40); // from 90% to 50%
  document.body.style.background = `linear-gradient(to bottom, hsl(210, 60%, ${lightness}%), hsl(210, 60%, ${lightness - 10}%))`;
});
