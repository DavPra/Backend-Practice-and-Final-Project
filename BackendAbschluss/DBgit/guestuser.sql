create table guestuser
(
    gUserID       bigint auto_increment
        primary key,
    Name          varchar(255) null,
    Telefonnummer varchar(255) null,
    Straße        varchar(255) null,
    Ort           varchar(255) null,
    Postleitzahl  varchar(255) null
);

