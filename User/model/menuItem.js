const mongoose = require("mongoose");


const { Schema } = mongoose;

const menuItem = new Schema({
    name: String,
    price: Number,
    available: Boolean,
    description: String,
    type: Number,
    img: Array,
    updateAt: Date,
},
    { collection: "MenuItem" }
);

module.exports = mongoose.model("MenuItem",menuItem);