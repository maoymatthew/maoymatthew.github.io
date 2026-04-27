document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const btn = document.querySelector('.toggle-btn');

  if (savedTheme === 'light') {
    document.body.classList.add('light');
    if (btn) btn.textContent = '🌙';
  } else {
    document.body.classList.remove('light');
    if (btn) btn.textContent = '☀️';
  }
});

function toggleTheme() {
  const isLight = document.body.classList.toggle('light');
  const btn = document.querySelector('.toggle-btn');

  if (btn) {
    btn.textContent = isLight ? '🌙' : '☀️';
  }

  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
