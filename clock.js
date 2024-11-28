const clock = document.querySelector("#clock")
const reloadClock = () => {
    const date = new Date()
    const timeRightNow = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`
    clock.textContent = timeRightNow
}
setInterval(reloadClock, 1000);