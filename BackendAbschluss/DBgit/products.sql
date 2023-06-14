create table products
(
    ProductID  bigint auto_increment
        primary key,
    Titel      varchar(255) null,
    Typ        varchar(255) null,
    Länge      bigint       null,
    Preis      bigint       null,
    Regisseur  varchar(255) null,
    Lagerstand bigint       null
);

