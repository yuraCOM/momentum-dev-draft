
let currentTime = new Date(); //текущая дата
// время
let hoursMinutes = currentTime.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute:'2-digit'
});
hoursMinutes = +hoursMinutes.split(':').join('.')


// время суток
export let timeOfDay = getTimeOfDay(hoursMinutes)
export function getTimeOfDay(currentTime){
    return (currentTime>= 6 && currentTime <= 11.59) ? "morning" :
        (currentTime>= 12 && currentTime <= 17.59) ? 'day' :
            (currentTime>= 18 && currentTime <= 23.59) ? 'evening':
                (currentTime>= 0 && currentTime <= 5.59) ? 'night': false
}
// document.querySelector('.greeting').innerHTML = `Good ${timeOfDay}`

//показываем время
export function showTime() {
    const time = document.querySelector('.time');
    // console.log(time)
    const date = new Date();
    time.textContent = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    document.querySelector('.greeting').innerHTML = `Good ${timeOfDay}, `

}

// показываем дату
export function showDate() {
    let dateView = document.querySelector('.date')
    dateView.innerHTML = currentTime.toLocaleString('en-us', {weekday: 'long', month:'long', day:'numeric'})
}




