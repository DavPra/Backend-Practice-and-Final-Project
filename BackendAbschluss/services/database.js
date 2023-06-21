const bcrypt = require('bcryptjs')
const products = require('../models/products')
const Users = require('../models/users')
const guestUsers = require('../models/guestUsers')

async function createUser({Name, email, password, telNum, strasse, ort, plz}) {
    const hash = await bcrypt.hash(password, 10)

    const user =  await Users.create({Name: Name, Email:email, Password: hash, Telefonnummer: telNum, Strasse: strasse, Ort: ort, Postleitzahl: plz}) 
    return {id: user.id, Name: user.Name, Email: user.Email, Telefonnummer: user.Telefonnummer, Strasse: user.Strasse, Ort: user.Ort, Postleitzahl: user.Postleitzahl}
}   // Registrierung eines neuen Users, Passwort wird gehashed

async function createGuser({Name, email, telNum, strasse, ort, plz}) {

    const user =  await guestUsers.create({Name: Name, Email:email, Password: hash, Telefonnummer: telNum, Strasse: strasse, Ort: ort, Postleitzahl: plz, Admin: 1})
    return {id: user.id, Name: user.Name, Email: user.Email, Telefonnummer: user.Telefonnummer, Strasse: user.Strasse, Ort: user.Ort, Postleitzahl: user.Postleitzahl, Admin: user.Admin}
}   // Speicher der Daten eines neuen Gastusers

async function getUsers() {
    const result = await Users.findAll()
    return result
}   // Ausgabe aller User

async function addProducts({titel, genre, typ, länge, preis, regisseur, lagerstand}) {
    return products.create({Titel: titel, Genre: genre, Typ: typ, Länge: länge, Preis: preis, Regisseur: regisseur, Lagerstand: lagerstand})
}  // Hinzufügen eines neuen Produkts

async function getProducts() {
    const result = await products.findAll()
    return result
}   // Ausgabe aller Produkte

async function getguestUsers() {
    const result = await guestUsers.findAll()
    return result
}   // Ausgabe aller Gastuser

async function addGuestUser({Name, Strasse, Ort, PlZ, Email, TelNmr}) {
    return guestUsers.create({Name: Name, Strasse: Strasse, Ort: Ort, PlZ: PlZ, Email: Email, TelNmr: TelNmr})
}   // Hinzufügen eines neuen Gastusers

module.exports = {
    createUser,
    addProducts,
    createGuser,
    getProducts,
    getUsers,
    getguestUsers,
    addGuestUser
}