const mongoose = require("mongoose");

const { Schema } = mongoose;

const order = new Schema({
    tableNumber: Number,
    menuItem: Array,
    note: String,
    status: Number,
    totalPrice: Number,
},
    { collection: "Order" }
);

module.exports = mongoose.model("Order",order);