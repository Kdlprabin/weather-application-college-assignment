//51.8098° N, 0.2377° W
let long = 0.2150;
let lat = 51.9578;

//api url
var base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

var info;
//shows the time when the application was started
document.querySelector('#LastRefreshed').textContent = `${new Date().toLocaleTimeString()}`;

//function which activates on clicking refresh button to show the refresh time
function refresh(){
    fetch(base)
    .then((Response)=>{
        return Response.json();
    })

    .then((data)=>{
        console.log(data);
        const {temp} = data.main;
        const{sunrise,sunset} = data.sys;
        const sunriseGMT = new Date(sunrise);
        const sunsetGMT = new Date(sunset);
        const humidity = data.main.humidity;
        const pressure = data.main.pressure;
        const windspeed = data.wind.speed;
        const feel = data.main.feels_like;
        const desc = data.weather[0].description;
        const direction = data.wind.deg;
        info = data.weather[0].main;

        document.querySelector('#temperature').textContent = `${temp.toFixed(1)}  °C`;
        document.querySelector('#timerise').textContent = `${sunriseGMT.toLocaleTimeString()}`;
        document.querySelector('#timeset').textContent = `${sunsetGMT.toLocaleTimeString()}`;
        document.querySelector('#humidity').textContent =`${humidity} %`;
        document.querySelector('#pressure').textContent =`${pressure} hpa`;
        document.querySelector('#windspeed').textContent =`${(windspeed/1000 *3600).toFixed(1)} m/s`;
        document.querySelector('#feels_like').textContent = `${feel} °C`;
        document.querySelector('#main_weather_data').textContent = `${desc}`;
        document.querySelector('#windDirection').textContent = `${direction} deg`;

        //takes the refresh time and shows in the html
        document.querySelector('#LastRefreshed').textContent = `${new Date().toLocaleTimeString()}`;
    })
}