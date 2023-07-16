const bcrypt = require('bcryptjs')
const products = require('../models/products')
const Users = require('../models/users')
const orders = require('../models/orders')
const guestUsers = require('../models/guestUsers')
const orderProducts = require('../models/orderProducts')
const allUsers = require('../models/allUsers')
const { Sequelize } = require('sequelize')
const sequelize = require('./sequelize')



async function createUser({name, email, password, telNum, strasse, ort, plz}) {
    const hash = await bcrypt.hash(password, 10)

    const user =  await Users.create({name: name, email:email, password: hash, telNumber: telNum, strasse: strasse, ort: ort, plz: plz, admin: 0}) 
    const allUser = await allUsers.create({name: name, email:email, password: hash, telNumber: telNum, strasse: strasse, ort: ort, plz: plz, admin: 0})
    return {name: user.name, email: user.email, telNumber: user.telNumber, strasse: user.strasse, ort: user.ort, plz: user.plz}
}   // Registrierung eines neuen Users, Passwort wird gehashed

async function createGuser({Name, email, telNum, strasse, ort, plz}) {

    const user =  await guestUsers.create({Name: Name, Email:email, Telefonnummer: telNum, Strasse: strasse, Ort: ort, Postleitzahl: plz, Admin: 0})
    const allUser = await allUsers.create({Name: Name, Email:email, Telefonnummer: telNum, Strasse: strasse, Ort: ort, Postleitzahl: plz, Admin: 0})
    return {id: allUser.id, Name: user.Name, Email: user.Email, Telefonnummer: user.Telefonnummer, Strasse: user.Strasse, Ort: user.Ort, Postleitzahl: user.Postleitzahl, Admin: user.Admin}
}   // Speicher der Daten eines neuen Gastusers

async function getUsers() {
    const result = await Users.findAll()
    return result
}   // Ausgabe aller User

async function deleteUser(id) {
    const result = await Users.destroy({
        where: {
            id: id
        }
    })
    return result
}   // Löschen eines Users anhand der ID

async function findUserByCredetials({email, password}) {
    const user = await Users.findOne({where: {Email: email}})
    if (!user) {
        throw new Error('User not found')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Password not correct')
    }
    return {name: user.name, email: user.email, telNumber: user.telNumber, strasse: user.strasse, ort: user.ort, plz: user.plz}
}   // Ausgabe eines Users anhand der Email und des Passworts

async function addProducts({titel, genre, typ, länge, preis, regisseur, lagerstand}) {
    return products.create({Titel: titel, Genre: genre, Typ: typ, Länge: länge, Preis: preis, Regisseur: regisseur, Lagerstand: lagerstand})
}  // Hinzufügen eines neuen Produkts

async function getProducts() {
    const result = await products.findAll()
    return result
}   // Ausgabe aller Produkte

async function checkAvailability(id) {
    const result = await products.findByPk(id)
    return result.Lagerstand
}   // Ausgabe des Lagerstands eines Produkts anhand der ID

async function updateLagerstand(id, {lagerstand}) {
    const result = await products.update({Lagerstand: lagerstand}, {
        where: {
            id: id
        }
    })
    return result
}   // Updaten des Lagerstands eines Produkts anhand der ID


async function getProductsById(id) {
    const result = await products.findByPk(id)
    return result
}   // Ausgabe eines Produkts anhand der ID

async function deleteProducts(id) {
    const result = await products.destroy({
        where: {
            id: id
        }
    })
    return result
}   // Löschen eines Produkts anhand der ID

async function updateProducts(id, {titel, genre, typ, länge, preis, regisseur, lagerstand}) {
    const result = await products.update({Titel: titel, Genre: genre, Typ: typ, Länge: länge, Preis: preis, Regisseur: regisseur, Lagerstand: lagerstand}, {
        where: {
            id: id
        }
    })
    return result
}   // Updaten eines Produkts anhand der ID

async function orderProduct(id) {
    const order = await orders.create({OrderDate: Date.now(), OrderStatus: "Offen", UserId: id})
    return order
}   // Bestellung aufgeben

async function orderProductsDetails(id, productID) {
    const result = await orderProducts.create({OrderId: id, ProductID: productID, Quantity: quantity})
    return result
}   // Bestellung aufgeben

async function getOrdersbyUser(id) {
    const result = await orders.findAll({where: {UserId: id}})
    return result
}   // Ausgabe aller Bestellungen eines Users anhand der ID

async function getguestUsers() {
    const result = await guestUsers.findAll()
    return result
}   // Ausgabe aller Gastuser

async function getAllUsers() {
    const result = await allUsers.findAll()
    return result
}   // Ausgabe aller User

async function getOrders() {
    const result = await orders.findAll()
    return result
}   // Ausgabe aller Bestellungen

async function getOrdersbyUser(id) {
    const result = await orders.findAll({where: {UserId: id}})
    return result
}   // Ausgabe aller Bestellungen eines Users anhand der UserID

async function getOrderDetailsbyId(id) {
    const result = await orderProducts.findAll({where: {id: id}})
    return result
}   // Ausgabe aller Bestellungen anhand der OrderID

module.exports = {
    createUser,
    addProducts,
    createGuser,
    getProducts,
    getUsers,
    getguestUsers,
    getProductsById,
    deleteProducts,
    updateProducts,
    findUserByCredetials,
    deleteUser,
    getOrdersbyUser,
    getOrders,
    orderProduct,
    orderProductsDetails,
    getOrderDetailsbyId,
    checkAvailability,
    updateLagerstand,
    getAllUsers
}