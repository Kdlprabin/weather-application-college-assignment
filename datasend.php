<?php

$googleApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=hertfordshire&appid=43aa310cf040eb7a9bc888de93a2c9dc&units=metric";


//initializing curl
$ch = curl_init();
curl_setopt($ch,CURLOPT_HEADER,0);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_URL,$googleApiUrl);
curl_setopt($ch,CURLOPT_FOLLOWLOCATION,1);
curl_setopt($ch,CURLOPT_VERBOSE,0);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);


//executing curl
$response = curl_exec($ch);

//closing curl
curl_close($ch);

//data decoding into json
$data = json_decode($response);

//assigning data from database into respective variables
$main = $data->weather[0]->main;
$temp = $data->main->temp;
$feels_like = $data->main->feels_like;
$pressure = $data->main->pressure;
$humidity = $data->main->humidity;
$wind_speed = $data->wind->speed;
$wind_degree = $data->wind->deg;
$sunrise = $data->sys->sunrise;
$sunset = $data->sys->sunset;
$desc = $data->weather[0]->description;


//establishing connection with database( weatherapp )
$conn = new mysqli('localhost','root','Chitwannepal#4','weatherapp','3306');
if($conn->connect_error){
    die();
}else{
}
?>