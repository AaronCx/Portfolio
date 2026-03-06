document.addEventListener('DOMContentLoaded', function () {
  setIcon(document.documentElement.getAttribute('data-theme') || 'light');
});

function toggleTheme() {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
  setIcon(next);
}

function setIcon(theme) {
  var sun  = document.getElementById('icon-sun');
  var moon = document.getElementById('icon-moon');
  if (!sun || !moon) return;
  sun.style.display  = theme === 'dark' ? 'block' : 'none';
  moon.style.display = theme === 'dark' ? 'none'  : 'block';
}
