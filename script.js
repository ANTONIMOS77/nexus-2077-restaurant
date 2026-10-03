const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}

const form = document.querySelector('.form-reserva');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Reserva enviada com sucesso! Em breve entraremos em contato.');
    form.reset();
  });
}
