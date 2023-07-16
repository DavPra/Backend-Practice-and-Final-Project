const express = require('express')
const router = express.Router()
const database = require('../services/database')
const passport = require('passport')
const jwtStrategy = require('../strategies/jwtStrategy')
const jwt = require('../services/jwt')
const { ConnectionAcquireTimeoutError } = require('sequelize')
const e = require('express')

router.get('/userOrders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            //console.log(req.user.registerID)
            const id = req.user.registerID;
            const orders = await database.getOrdersbyUser(id);
            res.json(orders);

        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.get('/userOrders/details', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const id = req.params.registerID;
            const orderDetails = await database.orderProductsDetails(id);
            res.json(orderDetails);

        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);


router.post('/userOrders', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const id = req.user.registerID;
            const orders = await database.orderProduct(id);
            res.json(orders);


        } catch (e) {
            console.log(e);
            res.status(500).send('Something went wrong');
        }
    }
);

router.post('/order', passport.authenticate('jwt', { session: false }),
    
    async (req,res) => {
    
    const userID = req.user.registerID;

    //const orderProducts = []
    const orderLength = req.body.length
    //let a = 0
    var lagerstand = []
    var notenoughstock = false
        try {
            for(let i = 0; i < orderLength; i++) {
                lagerstand[i] = await database.checkAvailability(req.body[i].id)
                if (lagerstand[i] < req.body[i].quantity) {
                    notenoughstock = true;
                }
                console.log(lagerstand,notenoughstock)
            }
            if (notenoughstock === false) {
                await database.orderProduct(userID);
                for (let i = 0; i < orderLength; i++) {
                    
                    let product = req.body[i]
                    console.log(product)
                    let newLagerstand = lagerstand[i] - product.quantity
                    console.log(newLagerstand)
                    console.log(product.id)
                    database.updateLagerstand(product.id, {"lagerstand": newLagerstand})
                
                }
            }
                
            if (notenoughstock === true) {
                res.status(500).send('Not enough products in stock');
            }
            else {
                res.status(200).send('Success'); // Send a response if needed         
            }
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}   
);

router.post('/Gorder',
    
    async (req,res) => {
    
    const Guser = await database.createGuser(req.body.guestCredentials);
    const userID = Guser.id;
    //const orderProducts = []
    let orderLength = req.body.orderedProducts.length 
    if (orderLength === undefined) {
        orderLength = 1
    }

    console.log("1 " + orderLength)
    const orderedP = req.body.orderedProducts

    console.log( req.body.orderedProducts)
    console.log("2 " + orderedP[0].id)
    //let a = 0
    var lagerstand = []
    var notenoughstock = false
        try {
            for(let i = 0; i < orderLength; i++) {
                //console.log("11 " + orderedProducts[i].ProductId)
                lagerstand[i] = await database.checkAvailability(orderedP[i].id)
                console.log("11 " + lagerstand[i])
                if (lagerstand[i] < orderedP[i].quantity) {
                    notenoughstock = true;
                }
                console.log("5 " + lagerstand,notenoughstock)
            }
            if (notenoughstock === false) {
                let orderID = await database.orderProduct(userID);
                for (let i = 0; i < orderLength; i++) {
                    console.log(orderID)
                    let product = orderedP[i]
                    console.log("6 " + product) 
                    let newLagerstand = lagerstand[i] - product.quantity
                    console.log("7 " + newLagerstand)
                    console.log("8 " + product.id)
                    console.log("9 " + product.quantity)
                    console.log(product)    
                    database.updateLagerstand(product.id, {"lagerstand": newLagerstand})
                    database.orderProductsDetails(orderID.id, product.id, product.quantity)
                }
            }
                
            if (notenoughstock === true) {
                res.status(500).send('Not enough products in stock');
            }
            else {
                res.status(200).send('Success'); // Send a response if needed         
            }
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
}   
);

/*try {
  const orderProducts = JSON.parse(jsonInput);
  checkProductStock(orderProducts);
} catch (error) {
  console.error('Error parsing JSON input:', error);
}*/









router.post('/guestOrder', async (req, res) => {
    try {
        const guestOrder = await database.createGuser(req.body);
        const orders = await database.orderProduct(req.body);
        res.json(guestOrder + orders);


    } catch (e) {
        console.log(e);
        res.status(500).send('Something went wrong');
    }
}
);



module.exports = router