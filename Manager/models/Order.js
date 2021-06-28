const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    // tableNumber: Number,
    // menuItem: Array,
    // note: String,
    // totalPrice: Number,
    // status: Number,
});

module.exports = mongoose.model('Order', Order);