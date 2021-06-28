const Order = require('../models/Order');
const { mutipleMongooseToObject } = require('../util/mongoose')

class SiteController {
    // [GET]/
    index(req, res, next){
        Order.find({})
            .then(orders => {
                res.json(mutipleMongooseToObject(orders));
                // res.render('home', {
                //     orders : mutipleMongooseToObject(orders)
                // });
            })
            .catch(next);
    }
}

module.exports = new SiteController;