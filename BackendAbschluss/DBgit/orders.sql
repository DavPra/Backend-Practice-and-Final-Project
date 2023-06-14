create table orders
(
    OrderID bigint auto_increment
        primary key,
    Datum   date       null,
    Status  tinyint(1) null
);

