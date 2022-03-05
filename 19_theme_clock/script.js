const toggle = document.querySelector('.toggle')
const html = document.querySelector('html')
const Elhours = document.querySelector('.needle.hours')
const Elminute = document.querySelector('.needle.minute')
const Elsecond = document.querySelector('.needle.second')
const Eltime = document.querySelector('.time')
const Eldate = document.querySelector('.date')
const centerPoint = document.querySelector('.center-point')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec']

toggle.addEventListener('click', (e)=>{
    if(!html.classList.contains('dark')){
        html.classList.add('dark')
        console.dir(e.target)
        e.target.textContent = 'Light mode'
    }else{
        html.classList.remove('dark')
        e.target.textContent = 'Dark mode'
    }
})

function setTime(){
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM' 

    Elhours.style.transform = `translate(-50%, -100%) rotate(${scale(hours, 0, 11, 0, 360)}deg)`
    Elminute.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`
    Elsecond.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`

    Eltime.innerText = `${hoursForClock}:${minute < 10 ? `0${minute}`: minute} ${ampm}`

    Eldate.innerHTML = `${days[day]}, ${Months[month]} <span class="circle">${day}</span>`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()

setInterval(setTime, 1000)