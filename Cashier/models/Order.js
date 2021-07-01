const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItem = new Schema({
    name: String,
    price: Number,
    available: Boolean,
    description: String,
    type: Number,
});

const Order = new Schema({
    tableNumber: Number,
    menuItem: Array(MenuItem),
    note: String,
    totalPrice: Number,
    status: Number,
});

module.exports = mongoose.model('Order', Order, 'Order');