let currentYearContainer = document.getElementById("current-year");
let thisYear = new Date()

currentYearContainer.innerHTML = thisYear.getFullYear()


//TO-DO

const html = document.querySelector('html')
const btn = document.getElementById('switch-btn')
const icon = document.getElementById('icon')

let theme = 'light';

btn.addEventListener('click',() => {
     
    if(theme === 'light'){
        html.classList.add('dark')
        theme = 'dark'
        icon.src = './img/half-moon.png'
    }
    else{
        html.classList.remove('dark')
        icon.src = './img/sunny.png'
        theme = 'light'

    }
})