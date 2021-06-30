const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItem = new Schema({
    // tableNumber: Number,
    // menuItem: Array,
    // note: String,
    // totalPrice: Number,
    // status: Number,
});

module.exports = mongoose.model('MenuItem', MenuItem, 'MenuItem');