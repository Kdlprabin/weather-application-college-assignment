//51.8098° N, 0.2377° W
let long = 0.2150;
let lat = 51.9578;
const api = 'e08cf201c4d31b5287a7fa1c7f1e2db4';
const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

fetch(base)
.then((Response)=>{
    return Response.json();
})
.then((data)=>{
    console.log(data);
    const {temp} = data.main;
    const sunriseGMT = new Date(data.sys.sunrise*1000);
    const sunsetGMT = new Date(data.sys.sunset*1000);
    const humidity = data.main.humidity;
    const pressure = data.main.pressure;
    const windspeed = data.wind.speed;
    const feel = data.main.feels_like;

    document.querySelector('#temperature').textContent = `${temp.toFixed(1)}  °C`;
    document.querySelector('#timerise').textContent = `${sunriseGMT}`;
    document.querySelector('#timeset').textContent = `${sunsetGMT}`;
    document.querySelector('#humidity').textContent =`${humidity} %`;
    document.querySelector('#pressure').textContent =`${pressure} hpa`;
    document.querySelector('#windspeed').textContent =`${windspeed} km/h`;
    document.querySelector('#feels_like').textContent = `${feel} °C`;
})