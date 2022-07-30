<?php

$conn = new mysqli('localhost','root','','weatherapp_2.0','3307');

if($conn->connect_error){
    echo "connection failed";
}else{
    echo "connection success";
}

?>