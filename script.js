
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => {
    appearOnScroll.observe(section);
  });
});
const textos = ["Front-End Developer", "Estudante de Banco de Dados", "Apaixonado por Tecnologia"];
let i = 0;
setInterval(() => {
  document.getElementById("text-dinamico").textContent = textos[i];
  i = (i + 1) % textos.length;
}, 2000);

