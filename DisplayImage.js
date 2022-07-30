//function to display the image.
function displayImage(Url){
    document.getElementById("displayImage").style.backgroundImage = Url;
}

//function to display the image according to the situation.
function changeImage(){
    var time = new Date().getHours();    
    //time based image 
    
    //sunrise
    if(time<8 && time>4){
        displayImage("url('images/sunrise.jpg')");
    }
    //sunset
    else if(time<20 && time>17){
        displayImage("url('images/sunset.jpg')");
    }

    //weather based image


    else if(info == "Clear"){
        if(time>8 && time<17){
            displayImage("url('images/clearsky.jpg')");
        }
        else if(time>17){
            displayImage("url('images/night.jpg')")
        }
    }
    else if(info == "Thunderstorm"){
        displayImage("url('images/ThunderStorm.jpg')")
    }
    else if(info == "Drizzle"){
        displayImage("url('images/RainCase.jpg')")
    }
    else if(info == "Rain"){
        displayImage("url('images/rain.jpg')")
    }
    else if(info == "Snow"){
        displayImage("url('images/snow.jpg')")
    }
    else if(info == "Clouds"){
        displayImage("url('images/rainClouds.jpg')")
    }
    else{
        displayImage("url('images/clearsky.jpg')")
    }

    setTimeout(()=>{changeImage(),60000})
}
//display image during according to the situation.
changeImage();