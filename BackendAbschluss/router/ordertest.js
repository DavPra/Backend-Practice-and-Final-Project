const express = require('express')
const jwt = require('../services/jwt')
const passport = require ('passport')
const router = express.Router()
const db = require('../services/database')

async function createOrderProducts(req, products) {
  try {
    const userId = req.user.id; 

    const order = await Order.create({
    });

    const orderId = order.id;

    for (const product of products) {
      const { productId, quantity } = product;
      const productDetails = await Product.findByPk(productId);
      
      await OrderProduct.create({
        orderId: orderId,
        userId: userId,
        productId: productId,
        productName: productDetails.name,
        quantity: quantity
      });
    }
    
    console.log('Order products created successfully.');
  } catch (error) {
    console.error('Error creating order products:', error);
  }
}

module.exports = createOrderProducts;


const orderId = 1;
const userId = 123;
const products = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 1 },
];

createOrderProducts(orderId, userId, products);

router.post('/orderTest', passport.authenticate('jwt', { session: false }),
    
    async (req, res) => {

      let b = req.body
      console.log(b);
      res.send(b);
    }
);

router.get('/orderTest/:id', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const productTest = await db.getProductsById(req.params.id);
      res.json(productTest);
    }
);

router.post('/orderTestav', passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      let a = 0;
      let b = req.body;
      console.log(b);

      for (let i = 0; i < b.length; i++) {
        a = await db.checkAvailability(b[i].id); // Assuming db.checkAvailability returns a promise
        console.log(a);

        if (i === b.length - 1) {
          break;
        }
      }

      // Add any additional code logic here

      res.status(200).send('Success'); // Send a response if needed
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong');
    }
  }
);

router.get('/orderTestav/:id', async (req, res) => {
    try {
      const a = await db.checkAvailability(req.params.id);
      console.log(a.Lagerstand);
      res.status(200).send('Success');
    } catch (error) {
      console.error(error);
      res.status(500).send('Something went wrong');
    }
  }
);





module.exports = router;
