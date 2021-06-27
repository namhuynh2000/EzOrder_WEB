const Order = require('../models/Order');


class SiteController {
    // [GET]/
    index(req, res, next){
        Order.find({})
            .then(orders => res.render('home', {orders}))
            .catch(next);
    }
}

module.exports = new SiteController;