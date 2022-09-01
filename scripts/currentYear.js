let currentYearContainer = document.getElementById("current-year");
let thisYear = new Date()

currentYearContainer.innerHTML = thisYear.getFullYear()


//TO-DO

const html = document.querySelector('html')
const btn = document.getElementById('switch-btn')
const icon = document.getElementById('icon')

localStorage.setItem("theme", "light")

// let theme = 'light';

// btn.addEventListener('click',() => {
     
//     if(theme === 'light'){
//         html.classList.add('dark')
//         theme = 'dark'
//         icon.src = './img/icons8-sun.svg'
//     }
//     else{
//         html.classList.remove('dark')
//         icon.src = './img/halfmoon.png'
//         theme = 'light'

//     }
// })
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

































