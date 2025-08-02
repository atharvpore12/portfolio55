// Load Particles.js
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles loaded');
});

// Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Typing animation
const text = ["Future Founder", "Tech Enthusiast", "AI Explorer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typeElement = document.getElementById("type-text");
  if (!typeElement) return;

  if (isDeleting) {
    currentText = text[index].substring(0, charIndex--);
  } else {
    currentText = text[index].substring(0, charIndex++);
  }

  typeElement.textContent = currentText;

  if (!isDeleting && charIndex === text[index].length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 60 : 120);
  }
}
type();
