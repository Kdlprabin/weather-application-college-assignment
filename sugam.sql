CREATE TABLE Customers(
    C_ID INT PRIMARY KEY AUTO_INCREMENT,
    C_NAME VARCHAR(255) NOT NULL,
    C_Phone VARCHAR(255) NOT NULL,
    C_Email VARCHAR(255) NOT NULL
);
CREATE TABLE Payments(
    Payment_code int PRIMARY key AUTO_INCREMENT,
    Totalprice INT NOT NULL,
    Payment_method VARCHAR(255) NOT NULL
);
CREATE TABLE Ticket(
    T_code INT PRIMARY KEY AUTO_INCREMENT,
    T_price INT NOT NULL,
    no_of_tickets INT NOT NULL,
    TotalPrice INT NOT NULL
);
CREATE TABLE Ticket_type(
    T_Type VARCHAR(255) NOT NULL,
    T_code INT NOT NULL,
    FOREIGN KEY (T_code) REFERENCES Ticket(T_code)
);
CREATE TABLE Shows(
    Show_no INT PRIMARY KEY AUTO_INCREMENT,
    Show_date date NOT NULL,
    Show_audi varchar(255) NOT NULL,
    Show_name varchar(255) NOT NULL,
    Customer_id INT NOT NULL,
    FOREIGN KEY (Customer_id) REFERENCES Customers(C_ID)
);
CREATE TABLE Payment_details(
    payment_code INT NOT NULL,
    C_ID INT NOT NULL,
    FOREIGN KEY (payment_code) REFERENCES Payments(payment_code),
    FOREIGN KEY (C_ID) REFERENCES Customers(C_ID)
);
CREATE TABLE Seats(
    SEAT_NO INT PRIMARY KEY AUTO_INCREMENT,
    SEAT_TYPE VARCHAR(255) NOT NULL
);

INSERT INTO Customers(C_NAME,C_Phone,C_Email) 
VALUES("Susil Shrestha","9804339402","susil@gmail.com"),
("Joseph Baniya","9804201252","baniya@gmail.com"),
("Junu Manandar","9804332564","junu@gmail.com"),
("Rohan Basnet","9804345412","rohan@gmail.com"),
("Soniya Shrestha","9804345768","soniya@gmail.com");


INSERT INTO Payments(TotalPrice,Payment_method) 
VALUES(1200,"online"),
(1100,"cash"),
(800,"esewa"),
(200,"ebanking"),
(1500,"khalti")
;

INSERT INTO TICKET(T_Price,no_of_tickets,TotalPrice)
VALUES(120,10,1200),
(100,11,1100),
(80,10,800),
(200,1,200),
(150,10,1500);

INSERT INTO Ticket_type(T_Type,T_code)
values('platinum',1),
('gold',2),
('silver',3),
('bronze',4),
('iron',5);

INSERT INTO SHOWS(Show_date,Show_audi,Show_name,Customer_id)
VALUES(20220807,"OCEAN","waves",1),
(20220808,"desert","camel",2),
(20220809,"forest","rain",3),
(20220812,"owasis","blue",4),
(20220801,"mountain","the himalayas",5);

INSERT INTO Payment_details(payment_code,C_ID)
values(1,1),
(2,3),
(3,2),
(4,5),
(5,4);

INSERT INTO Seats(seat_type)
values("Regular"),
("special"),
("vip"),
("moitor"),
("platinum");

-- query to list the name of all the customers and the date they have booked for a seat

SELECT Customers.C_NAME,Shows.Show_date FROM Customers JOIN Shows where Customers.C_ID = Shows.CUSTOMER_ID;

-- query to count the total amount earned by the company

SELECT SUM(TotalPrice) FROM TICKET;

--query to change the column name from CUSTOMER_ID to C_ID in shows table:
Alter TABLE Shows RENAME COLUMN CUSTOMER_ID TO C_ID;

--query to list all the customers contact in ascending order along with their name and email

Select C_NAME,C_Phone,C_Email from Customers order by c_phone asc;

--query to see all the names and hall name of the shows available at 2022-08-01

Select SHOW_NAME,show_audi FROM SHOWS where Show_date = 20220801;

--query to update the value of a column in seats table 

UPDATE Seats SET seat_type = "balcony" where Seat_no = 4;

--query to list the number of tickets purchased at a time and the payment method in decending order

select ticket.no_of_tickets,payments.payment_method from ticket join payments where ticket.totalprice = payments.totalprice order by no_of_tickets desc;

--query to see the attributes of the customers table

desc Customers;

--query to list the customers name and the show they are watching and the date

select customers.c_name, shows.show_name,shows.show_date from customers join shows where Customers.C_ID = shows.C_ID;

--query to clear the table without deleting the table

truncate Ticket_type;