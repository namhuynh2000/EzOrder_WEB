let MenuItem = require('../model/menuItem');
let Cart = require('../model/cart');
let menuItemService = require('../service/menuItemService');
let currencyFormat = require('../utils/currencyFormat');

exports.menuPage = async (req, res, next) => {
    let foodItems = await menuItemService.getFoodItemList();
    let drinkItems = await menuItemService.getDrinkItemList();

    foodItems = currencyFormat.formatCurrency(foodItems);
    drinkItems = currencyFormat.formatCurrency(drinkItems);
    
    res.render('menu', {
        title: 'Menu',
        foodItems,
        drinkItems
    });
}

exports.addToCart = (req, res, next) => {
    // let menuItemId = req.params.id;
    // let cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

    // MenuItem.findById(menuItemId, (err, menuItem) => {
    //     if (err) {
    //         return res.redirect('/');
    //     }
    //     cart.add(menuItem, menuItem.id,2);
    //     req.session.cart = cart;
    //     console.log(req.session.cart);
    //     return res.redirect('/');
    // })
}