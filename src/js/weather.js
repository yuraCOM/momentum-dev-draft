const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');


export async function getWeather(town) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${town}&lang=eng&appid=6dfbd47545f720acd1a7123460a2c92d&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    // console.log(data)
    // console.log(data.cod)
    if(data.cod === "404"){
        temperature.textContent = "Error! City Not Founded!"
    }
    else{
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind Speed ${Math.round(data.wind.speed)} м/s`;
        humidity.textContent = `Humidity ${data.main.humidity}%`;
    }

    // weatherIcon.className = 'weather-icon owf';
    // weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    // temperature.textContent = `${Math.round(data.main.temp)}°C`;
    // weatherDescription.textContent = data.weather[0].description;
    // wind.textContent = `Скорость ветра ${Math.round(data.wind.speed)} м/с`;
    // humidity.textContent = `Влажность ${data.main.humidity}%`;

}

export function clearWeather(){
    // console.log('clear')
    weatherIcon.className = 'weather-icon owf';

    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = ''
    humidity.textContent =''
}
