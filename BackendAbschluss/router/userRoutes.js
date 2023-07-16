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
            console.log(req.user.id)
            const id = req.user.id;
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
            const id = req.params.id;
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
            const id = req.user.id;
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
    
    const userID = req.user.id;

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
                for (let i = 0; i < orderLength; i++) {
                    await database.orderProduct(userID);
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


try {
  const orderProducts = JSON.parse(jsonInput);
  checkProductStock(orderProducts);
} catch (error) {
  console.error('Error parsing JSON input:', error);
}









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