let currentYearContainer = document.getElementById("current-year");
let thisYear = new Date()

currentYearContainer.innerHTML = thisYear.getFullYear()


//TO-DO

const html = document.querySelector('html')
const btn = document.getElementById('switch-btn')
const icon = document.getElementById('icon')

localStorage.setItem("theme", "light")

let theme = 'light';

btn.addEventListener('click',() => {
     
    if(theme === 'light'){
        html.classList.add('dark')
        theme = 'dark'
        icon.src = './img/icons8-sun.svg'
    }
    else{
        html.classList.remove('dark')
        icon.src = './img/icons8-half-moon-32.png'
        theme = 'light'

    }
})