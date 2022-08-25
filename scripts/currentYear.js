let currentYearContainer = document.getElementById("current-year");
let thisYear = new Date()

currentYearContainer.innerHTML = thisYear.getFullYear()

window.scrollTo({
    top: 0,
    behavior: 'smooth'
})