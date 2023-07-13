const { OrderProduct, Product, Order } = require('./models');
const passport = require('passport');

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
