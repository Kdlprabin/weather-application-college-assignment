function Set(){
    var city = document.getElementById("inputbox").value;
    document.getElementById("searchLocation").innerHTML = city;
    //link for searching weather information by city name
    Searchbase="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=43aa310cf040eb7a9bc888de93a2c9dc&units=metric";
    //=https://api.openweathermap.org/data/2.5/onecall?q=${city}appid=${KEY}
fetch(Searchbase)
.then((searchResponse)=>{
    return searchResponse.json();
})
.then((searchData)=>{
    document.getElementById("searchLocation").innerHTML = searchData.name;
    document.getElementById("searchMain").innerHTML=searchData.weather[0].description;
    document.getElementById("searchHumidity").innerHTML=searchData.main.humidity+" %";
    document.getElementById("searchPressure").innerHTML=searchData.main.pressure+" hpa";
    document.getElementById("searchWindSpeed").innerHTML=searchData.wind.speed+" km/hr";
    document.getElementById("searchWindDirection").innerHTML=searchData.wind.deg+" deg";
    document.getElementById("searchInfo").style.visibility="visible";
})
}