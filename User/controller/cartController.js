let currencyFormat = require('../utils/currencyFormat');
let MenuItem = require('../model/menuItem');
let cartService = require('../service/cartService');
let Cart = require('../model/cart');

module.exports.addToCart = (req, res, next) => {
    let itemId = req.body.id;
    let quantity = 1;

    MenuItem.findById(itemId, (err, menuItem) => {
        if (err) {
            return console.log(err);
        }
        const cart = req.session.cart.add(menuItem, menuItem.id, quantity);
        req.session.cart = cart;
        res.locals.cart = cart;
        res.json(cart);
    })
}

module.exports.updateToCart = (req, res, next) => {
    let itemId = req.body.id;
    let quantity = req.body.quantity;

    MenuItem.findById(itemId, (err, menuItem) => {
        if (err) {
            return console.log(err);
        }
        console.log(quantity);

        const cart = req.session.cart.update(menuItem, menuItem.id, quantity);
        req.session.cart = cart;
        res.locals.cart = cart;
        res.json(cart.items[itemId]);
    })
}

module.exports.order = async (req, res, next) => {
    const note = req.body.note;
    const cart = req.session.cart;
    await cartService.saveOrderToDB(cart, note);
    res.json("success");
}

module.exports.getCart = (req, res, next) => {
    res.render('cart', {
        title: 'cart',
    });
}

