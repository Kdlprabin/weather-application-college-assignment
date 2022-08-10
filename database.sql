CREATE TABLE weather(
    id int PRIMARY KEY auto_increment,
    main varchar(255) not null,
    descript varchar(255) not null,
    temperature varchar(255) not null,
    humidity varchar(255) not null,
    pressure varchar(255) not null,
    wind_speed varchar(255) not null,
    wind_deg varchar(255) not null,
    feels_like varchar(255) not null,
    sunrise varchar(255) not null,
    sunset varchar(255) not null,
    refresh_time DATETIME DEFAULT CURRENT_TIMESTAMP
);