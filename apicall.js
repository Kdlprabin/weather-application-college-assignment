const api = '43aa310cf040eb7a9bc888de93a2c9dc';

    let longktm = 85.3240;
    let longlondon = -0.118092;
    let longdli = 77.1025;

    let latktm = 27.7172;
    let latlondon = 51.509865;
    let latdli = 28.7041;

        const ktm = `https://api.openweathermap.org/data/2.5/weather?lat=${latktm}&lon=${longktm}&appid=${api}&units=metric`;
        const london = `https://api.openweathermap.org/data/2.5/weather?lat=${latlondon}&lon=${longlondon}&appid=${api}&units=metric`;
        const dli = `https://api.openweathermap.org/data/2.5/weather?lat=${latdli}&lon=${longdli}&appid=${api}&units=metric`;

        fetch(ktm)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            // console.log(data);
            const { temp } = data.main;
            const humidity = data.main.humidity;
            const sunriseKtm = (data.sys.sunrise);
            console.log(Date(sunriseKtm))

            document.querySelector('#sectemperature1').textContent = `${temp.toFixed(2)} °C`;
            document.querySelector('#sechumidity1').textContent = `${humidity} %`;

        }
        )

        fetch(london)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            // console.log(data)
            const {temp} = data.main;
            const humidity = data.main.humidity;

            document.querySelector('#sechumidity3').textContent = `${humidity} %`;
            document.querySelector('#sectemperature3').textContent = `${temp.toFixed(2)} °C`;
        })

        fetch(dli)
        .then((Response) => {
            return Response.json();
        })
        .then((data) => {
            // console.log(data)
            const {temp} =data.main;
            const humidity = data.main.humidity;

            document.querySelector('#sechumidity2').textContent = `${humidity} %`;
            document.querySelector('#sectemperature2').textContent = `${temp.toFixed(2)} °C`;
        })
    