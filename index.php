<?php
include('datasend.php');
if (isset($_GET['refresh'])) {
    header('location:index.php');
    $send_query = "INSERT INTO weather(main,descript,temperature,humidity,pressure,wind_speed,wind_deg,feels_like,sunrise,sunset) VALUES ('$main','$desc','$temp','$humidity','$pressure','$wind_speed','$wind_degree','$feels_like','$sunrise','$sunset')";
    $send = mysqli_query($conn, $send_query);
    if ($send) {
    } else {
        echo "data sending failed";
    }
} else {
    $send_query = "SELECT * FROM weather order by id desc";
    $sql_getdata_query = mysqli_query($conn, $send_query);
    $rowdata = mysqli_fetch_object($sql_getdata_query);
}
?>

<!-- send information about the weather condition to displayImage.js -->
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weatheria</title>
    <link rel="stylesheet" href="mediaQueries.css">
    <link rel="stylesheet" href="searchSection.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- main part of the weather app  -->
    <div id="main">
        <div class="container1">
            <!--the left located boxes-->
            <div class="infoBox infoBox1">
                <!--temperature data in celsius-->
                <p class="fontsizinglarge" id="temperature"><?php print_r($rowdata->temperature . '°C') ?></p>
                <p id="day" class="fontsizing2">THU</p>
                <div class="fontsizing"><span id="month">_ _ _</span> <span id="days">_ _</span><span id="year"> _ _ _ _</span></div>
            </div>
            <div class="infoBox">
                <p class="fontsizing">Kathmandu</p>
                <hr class="blueline">
                <div class="secondary_info">
                    <div class="secondaryhumidity">
                        <p class="fontsizesmall">Humidity</p><span id="sechumidity1" class="fontsizesmall">_ _</span>
                    </div>
                    <div class="secondarytemperature">
                        <p class="fontsizesmall">Temperature</p><span id="sectemperature1" class="fontsizesmall">_ _</span>
                    </div>
                </div>
            </div>
            <div class="infoBox">
                <p class="fontsizing">New Delhi</p>
                <hr class="blueline">
                <div class="secondary_info">
                    <div class="secondaryhumidity">
                        <p class="fontsizesmall">Humidity</p><span id="sechumidity2" class="fontsizesmall">_ _</span>
                    </div>
                    <div class="secondarytemperature">
                        <p class="fontsizesmall">Temperature</p><span id="sectemperature2" class="fontsizesmall">_ _</span>
                    </div>
                </div>
            </div>
            <div class="infoBox">
                <p class="fontsizing">London</p>
                <hr class="blueline">
                <div class="secondary_info">
                    <div class="secondaryhumidity">
                        <p class="fontsizesmall">Humidity</p><span id="sechumidity3" class="fontsizesmall">_ _</span>
                    </div>
                    <div class="secondarytemperature">
                        <p class="fontsizesmall">Temperature</p><span id="sectemperature3" class="fontsizesmall">_ _</span>
                    </div>
                </div>
            </div>
        </div>
        <!--the center part having background image-->
        <div class="container2" id="displayImage">
            <h1 id="weatheria">Weatheria</h1>
            <div class="liveClock">
                <div>
                    <span id="hours">00</span><span id="text"> Hours</span>
                </div>
                <div>
                    <span id="minutes">00</span><span id="text"> Minutes</span>
                </div>
                <div>
                    <span id="seconds">00</span><span id="text"> Seconds</span>
                </div>
                <div>
                    <span id="ampm">AM</span>
                </div>
            </div>
            <p class="fontsize00 fontwhite">Today Overview</p>
            <!--two rows and columns of four boxes-->
            <div class="informationBoxes">
                <div class="element">
                    <P class="fontwhite fontsizesmall title">WIND SPEED</P>
                    <hr class="whiteline">
                    <div class="value1">
                        <img src="images/wind.png" alt="" class="icon">
                        <div id="divide"><span id="windspeed" class="fontwhite"><?php print_r($rowdata->wind_speed . ' m/s') ?></span><span id="windDirection"><?php print_r($rowdata->wind_deg . ' deg') ?></span></div>
                    </div>
                </div>
                <div class="element">
                    <P class="fontwhite fontsizesmall title">PRESSURE</P>
                    <hr class="whiteline">
                    <div class="value">
                        <img src="images/pressure.png" alt="" class="icon"><span id="pressure" class="fontsizing fontwhite"><?php print_r($rowdata->pressure . ' hpa') ?></span>
                    </div>
                </div>
                <div class="element">
                    <P class="fontwhite fontsizesmall title">HUMIDITY</P>
                    <hr class="whiteline">
                    <div class="value">
                        <img src="images/humidity.png" alt="" class="icon"><span id="humidity" class="fontsizing fontwhite"><?php print_r($rowdata->humidity . ' %') ?></span>
                    </div>
                </div>
                <div class="element">
                    <P class="fontwhite fontsizesmall title">FEELS LIKE</P>
                    <hr class="whiteline">
                    <div class="value">
                        <img src="images/uv.png" alt="" class="icon"><span id="feels_like" class="fontsizing fontwhite"><?php print_r($rowdata->feels_like . ' °C') ?></span>
                    </div>
                </div>
            </div>
            <!--empty space for now-->
            <div class="emptyspace">

            </div>
        </div>
        <div class="container container3 lineheight">
            <!--Name of the city here-->
            <div id="name">
                <p class="fontsizing2 fontwhite"> North Hertfordshire</p>
                <hr class="whiteline">
                <p class="fontsizing2 fontwhite">UK, EUROPE</p>
                <p id="main_weather_data" class="fontsizing"><?php print_r($rowdata->descript) ?></p>
            </div>
            <!--Rain chance here-->
            <div id="chanceBox">
                <p class="fontsizesmall fontwhite">Chance of Rain</p>
                <hr class="whiteline">
                <!--bar showing the chance of rain in bar form-->
                <div id="chancebar">
                    <p>6am</p><span class="bar">
                        <div class="b1"></div>
                    </span>
                    <p>12am</p><span class="bar">
                        <div class="b2"></div>
                    </span>
                    <p>6pm</p><span class="bar">
                        <div class="b3"></div>
                    </span>
                    <p>12pm</p><span class="bar">
                        <div class="b4"></div>
                    </span>
                </div>
            </div>
            <!--sunset and sunrise data here-->
            <div id="sun">
                <p class="fontwhite fontsizing2" id="s">Sunrise</p>
                <div class="sun">
                    <p id="timerise" class="fontsizing"><?php print_r(explode(' ', Date("Y-m-d H:i:s", $rowdata->sunrise))[1] . " AM") ?></p>
                </div>
                <p class="fontwhite fontsizing" id="s">Sunset</p>
                <div class="sun">
                    <p id="timeset" class="fontsizing"><?php print_r(explode(' ', Date("Y-m-d H:i:s", $rowdata->sunset))[1] . " AM") ?></p>
                </div>
            </div>
        </div>
    </div>
    <!--search part that can search weather data of any location-->
    <div id="searchBox">
        <div id="button-in-center">
            <p class="fontsizing">Weatheria</p>
            <hr class="blueline">
            <!--Input box-->
            <p class="fontsizesmall">For Weather Information of more locations : </p>
            <input type="text" id="inputbox" placeholder="Enter the location here">
            <button id="search" onclick="Set()">search</button>
        </div>
        <div id="searchInfo">
            <h2>Location:</h2>
            <hr><span id="searchLocation">_ _ _</span>
            <hr class="blueline" id="linelast">
            <div id="align">
                <div>
                    <p>Overall Weather: </p>
                    <p>Humidity: </p>
                    <p>Pressure: </p>
                    <p>Wind Speed: </p>
                    <p>Wind Direction: </p>
                </div>
                <div>
                    <p id="searchMain">_ _ _</p>
                    <p id="searchHumidity">_ _ _</p>
                    <p id="searchPressure">_ _ _</p>
                    <p id="searchWindSpeed">_ _ _</p>
                    <p id="searchWindDirection">_ _ _</p>
                </div>
            </div>
            <hr>
        </div>
        <div id="RefreshDiv">
            <button id="refresh"><a href="?refresh=<?php echo "1" ?>" id="refreshvalue">Refresh</a></button>
            <p>Last refreshed:</p><span id="LastRefreshed"><?php print_r($rowdata->refresh_time) ?></span>
        </div>
        <p style="text-align:center"> &copy; copyrights reserved by<br> Prabin Kandel</p>
    </div>
    <script src="apicall.js"></script>
    <script src="clock.js"></script>
    <script>
        <?php
        echo "var info = '$rowdata->main'";
        ?>
    </script>
    <script src="DisplayImage.js"></script>
    <script src="searchbox.js"></script>
</body>

</html>