const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Order = new Schema({
    tableNumber: Number,
    menuItem: [Object],
    note: String,
    status: Number,
    totalPrice: Number,
    //slug: { type: String, slug: ['name', 'author'], unique: true },
}, { timestamps: true });

Order.plugin(mongoosePaginate);

// Model name => collection
module.exports = mongoose.model('Order', Order, 'Order');