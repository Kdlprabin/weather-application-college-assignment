//function to display the image according to the situation.
function displayImage(Url){
    document.getElementById("displayImage").style.backgroundImage = Url;
}
// displayImage("url('images/sunrise.jpg')");
function changeImage(){
    var time = new Date().getHours();

    if(time<8 && time>4){
        displayImage("url('images/sunrise.jpg')");
    }
    else if(time<20 && time>17){
        displayImage("url('images/sunset.jpg')");
    }
    else{
        displayImage("url('images/RainCase.jpg')")
    }
    setTimeout(()=>{changeImage(),1000})
}
//display image during according to the situation.
changeImage();