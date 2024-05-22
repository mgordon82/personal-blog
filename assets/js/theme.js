// find the element for the theme switcher
const themeSwitcher = document.getElementById('themeSwitch');
const container = document.getElementById('container');
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
    localStorage.setItem('mode', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    localStorage.setItem('mode', 'dark');
  }
});

function init() {
  mode = localStorage.getItem('mode') || 'dark';
  container.setAttribute('class', mode);
}

init();
