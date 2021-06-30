const menuItemMongoose = require('../model/menuItem');

module.exports.getFoodItemList = async () =>{
    return await menuItemMongoose.find({type: 2}).lean();
}

module.exports.getDrinkItemList = async () =>{
    return await menuItemMongoose.find({type: 1}).lean();
}