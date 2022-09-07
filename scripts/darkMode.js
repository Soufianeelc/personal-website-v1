const html = document.querySelector('html')
const btn = document.getElementById('switch-btn')
const icon = document.getElementById('icon')

let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  html.classList.add('dark')
  icon.src = './img/icons8-sun.svg'
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  html.classList.remove('dark')
  icon.src = './img/halfmoon.png'
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

btn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
