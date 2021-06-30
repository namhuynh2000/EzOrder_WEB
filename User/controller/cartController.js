let currencyFormat = require('../utils/currencyFormat');
let MenuItem = require('../model/menuItem');
let Cart = require('../model/cart');

module.exports.addToCart= (req, res, next) => {
    let itemId = req.body.id;
    let quantity = 1;
    // let quantity = req.body.quantity;


    MenuItem.findById(itemId, (err, menuItem) => {
        if (err) {
            return res.redirect('/');
        }
        console.log(req.session.cart);

        req.session.cart.add(menuItem, menuItem.id, quantity);
        // const cart = req.session.cart.add(menuItem, menuItem.id, quantity);
        // req.session.cart = cart;
        // res.locals.cart = cart;
        console.log(req.session.cart);
        // res.json(cart);
    })
}
