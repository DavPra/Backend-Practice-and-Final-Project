const bcrypt = require('bcryptjs')
const products = require('../models/products')

async function createUser({Name, email, password, telNum, strasse, ort, plz}) {
    const hash = await bcrypt.hash(password, 10)

    const user =  await Users.create({Name: Name, Email:email, Password: hash, Telefonnummer: telNum, Strasse: strasse, Ort: ort, Postleitzahl: plz}) 
    return {id: user.id, Name: user.Name, Email: user.Email, Telefonnummer: user.Telefonnummer, Strasse: user.Strasse, Ort: user.Ort, Postleitzahl: user.Postleitzahl}
}   // Registrierung eines neuen Users, Passwort wird gehashed

async function createGuser({Name, email, telNum, strasse, ort, plz}) {

    const user =  await guestUsers.create({Name: Name, Email:email, Password: hash, Telefonnummer: telNum, Strasse: strasse, Ort: ort, Postleitzahl: plz, Admin: 1})
    return {id: user.id, Name: user.Name, Email: user.Email, Telefonnummer: user.Telefonnummer, Strasse: user.Strasse, Ort: user.Ort, Postleitzahl: user.Postleitzahl, Admin: user.Admin}
}   // Speicher der Daten eines neuen Gastusers

async function addProducts({titel, typ, länge, preis, regisseur, lagerstand}) {
    return products.create({Titel: titel, Typ: typ, Länge: länge, Preis: preis, Regisseur: regisseur, Lagerstand: lagerstand})
}  // Hinzufügen eines neuen Produkts

async function getProducts() {
    const result = await products.findAll()
    return result
}   // Ausgabe aller Produkte

module.exports = {
    createUser,
    addProducts,
    createGuser,
    getProducts
}