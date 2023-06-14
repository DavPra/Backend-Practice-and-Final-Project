create table user
(
    UserID        bigint auto_increment
        primary key,
    Name          varchar(255) null,
    Email         varchar(255) null,
    Password      varchar(255) null,
    Telefonnummer varchar(255) null,
    Straße        varchar(255) null,
    Ort           varchar(255) null,
    Postleitzahl  varchar(255) null,
    Admin         tinyint(1)   null
);

