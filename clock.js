function getDay(){
    list=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayNo = new Date().getDay();
    document.getElementById("day").innerHTML = list[dayNo];
}
function getTime(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    document.getElementById("ampm").innerHTML = "AM";

    if(h>12){
        document.getElementById("ampm").innerHTML = "PM"
        h=h-12;
        document.getElementById("hours").innerHTML = h;
    }
    setTimeout(()=>{getTime(),1000});
}
function getDate(){
    list = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var monthNo = new Date().getMonth();
    var year = new Date().getFullYear();

    document.getElementById("month").innerHTML = list[monthNo];
    document.getElementById("year").innerHTML = year;
}

getDate();
getTime();
getDay();