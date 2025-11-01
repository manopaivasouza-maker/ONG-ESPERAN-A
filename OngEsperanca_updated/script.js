document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.5rem';
  }
});

// Simple contact form handler (simulation)
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  alert('Obrigado, ' + name + '! Sua mensagem foi enviada (simulação).');
  e.target.reset();
}