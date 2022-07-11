//51.8098° N, 0.2377° W

const api = 'e08cf201c4d31b5287a7fa1c7f1e2db4';

const tempC = document.querySelector('#temperature');
const sunriseDOM = document.querySelector('.timerise');
const sunsetDOM = document.querySelector('.timeset');

const tempktm = document.querySelector('#ktmtemp');
const temppkh = document.querySelector('#pkhtemp');
const tempdli = document.querySelector('#dlitemp');

const humidityktm =document.querySelector('#ktmrainChance');
const humiditypkh =document.querySelector('#pkhrainChance');
const humiditydli =document.querySelector('#dlirainChance');

const humidityToday = document.querySelector('#humidity');
const windspeedToday = document.querySelector('#windspeed');
const uvindexToday = document.querySelector('#uvIndex');
const pressureToday = document.querySelector('#pressure');
const rain = document.querySelector('#chancebar1').style.width;

window.addEventListener('load', () => {});

window.addEventListener('load', () => {
    let long = 0.2150;
    let longktm = 85.3240;
    let longpkh = 83.9856;
    let longdli = 77.1025;

    let lat = 51.9578;
    let latktm = 27.7172;
    let latpkh = 28.2096;
    let latdli = 28.7041;
    // if(navigator.geolocation){
        // navigator.geolocation.getCurrentPosition((position) => {
        // long = position.coords.longitude;
        // lat = position.coords.latitude;
        const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
        const ktm = `https://api.openweathermap.org/data/2.5/weather?lat=${latktm}&lon=${longktm}&appid=${api}&units=metric`;
        const pkh = `https://api.openweathermap.org/data/2.5/weather?lat=${latpkh}&lon=${longpkh}&appid=${api}&units=metric`;
        const dli = `https://api.openweathermap.org/data/2.5/weather?lat=${latdli}&lon=${longdli}&appid=${api}&units=metric`;

        fetch(base)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => 
        {
            const { temp } = data.main;
            const {sunrise,sunset} = data.sys;
            const sunriseGMT = new Date(sunrise*1000);
            const sunsetGMT = new Date(sunset*1000);
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const windspeed = data.wind.speed;
            const uvindex = data.main.feels_like;

            tempC.textContent = `${temp.toFixed(2)} °C`;
            sunriseDOM.textContent = `${sunriseGMT.toLocaleTimeString()}`;
            sunsetDOM.textContent = `${sunsetGMT.toLocaleTimeString()}`;
            humidityToday.textContent =`${humidity} %`;
            pressureToday.textContent =`${pressure} hpa`;
            windspeedToday.textContent =`${windspeed} km/h`;
            uvindexToday.textContent = `${uvindex} °C`;
        }
        )
        ;

        fetch(ktm)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            const { temp } = data.main;
            const humidity = data.main.humidity;

            tempktm.textContent = `${temp.toFixed(2)} °C`;
            humidityktm.textContent = `${humidity} %`;

        }
        )

        fetch(pkh)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            const {temp} = data.main;
            const humidity = data.main.humidity;

            humiditypkh.textContent = `${humidity} %`;
            temppkh.textContent = `${temp.toFixed(2)} °C`;
        })

        fetch(dli)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            const {temp} =data.main;
            const humidity = data.main.humidity;

            humiditydli.textContent = `${humidity} %`;
            tempdli.textContent = `${temp.toFixed(2)} °C`;
        })
        });
//     }

// }
// );
