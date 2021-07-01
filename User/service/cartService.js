const orderMongoose = require('../model/order');

module.exports.saveOrderToDB = async (cart, note) => {
    const tableNumber = 2;
    const menuItem = [];
    for (var id in cart.items) {
        let temp = {};
        temp.dish = cart.items[id].item;
        temp.name = cart.items[id].item.name;
        temp.price = cart.items[id].price;
        temp.quantity = cart.items[id].qty;
        menuItem.push(temp);
    }
    const status = 1;
    const totalPrice = cart.totalPrice;

    const order = new orderMongoose({
        tableNumber,
        menuItem,
        note,
        status,
        totalPrice
    });
    await order.save();
    return;

}