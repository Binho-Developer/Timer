const timeAlive = document.querySelector("#timeAlive")
const day = document.querySelector("#day")
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const showDays = document.querySelector(".days")
const showMonths = document.querySelector(".months")
const showYears = document.querySelector(".years")
const date = new Date()

const showTimeYear = (e) => {
    const years = date.getFullYear() - e.target.value
    console.log(e.target.value, years)
    showYears.textContent = `${years} Years`
}
const showTimeMonth = (e) => {
    const months = (date.getMonth() + 1) - e.target.value
    console.log(e.target.value, months)
    showMonths.textContent = `${months} Months`
}
const showTimeDay = (e) => {
    const days = date.getUTCDate() - e.target.value
    console.log(e.target.value, days)
    showDays.textContent = `${days} Days`
}
month.addEventListener('input', showTimeMonth)
year.addEventListener('input', showTimeYear)
day.addEventListener('input', showTimeDay)