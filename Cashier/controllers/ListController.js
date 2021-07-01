const Order = require('../models/Order');
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject } = require('../util/mongoose')

class ListController {
    
    // [GET]/waiting
    index_waiting(req, res, next){
        Order.find({status: 1})
            .then(orders => {
                var _status = "WAITING"
                res.render('home', {
                    orders: mutipleMongooseToObject(orders),
                    _status
                });
            })
            .catch(next);
    }

    // [GET]/preparing
    index_preparing(req, res, next){
        Order.find({status: 2})
            .then(orders => {
                var _status = "PREPARING"
                res.render('home', {
                    orders: mutipleMongooseToObject(orders),
                    _status
                });
            })
            .catch(next);
    }

    // [GET]/done
    index_done(req, res, next){
        Order.find({status: 3})
            .then(orders => {
                var _status = "DONE"
                res.render('home', {
                    orders: mutipleMongooseToObject(orders),
                    _status
                });
            })
            .catch(next);
    }

    // [GET]/pending
    index_pending(req, res, next){
        Order.find({status: 0})
            .then(orders => {
                var _status = "PENDING"
                res.render('home', {
                    orders: mutipleMongooseToObject(orders),
                    _status
                });
            })
            .catch(next);
    }

    // [GET]/list/:slug
    show(req, res){
        res.send('LIST SLUG' + req.params.slug);
    }
}

module.exports = new ListController;