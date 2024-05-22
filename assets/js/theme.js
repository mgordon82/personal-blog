// find the element for the theme switcher
const themeSwitcher = document.getElementById('themeSwitch');
const container = document.getElementById('container');
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.classList.remove('dark');
    container.classList.add('light');
    localStorage.setItem('mode', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.classList.remove('light');
    container.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  }
});

function init() {
  mode = localStorage.getItem('mode') || 'dark';
  container.classList.add(mode);
}

init();
