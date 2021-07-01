const { query } = require('express');
const Order = require('../models/Order');
const MenuItem = require('../models/MenuItem');
const { mutipleMongooseToObject } = require('../util/mongoose');
const { mongooseToObject } = require('../util/mongoose')


class SiteController {
    // [GET]/
    index(req, res, next){
        Order.find({status: 1})
            .then(orders => {
                var _status = "WAITING"
                // res.json(mutipleMongooseToObject(orders));
                res.render('home', {
                    orders : mutipleMongooseToObject(orders),
                    _status
                });
            })
            .catch(next);
    }


    async show(req, res, next){
        try{
            const order = await Order.findOne({_id: req.params._id});
            // res.json(mongooseToObject(order));
            var k = order.status;
            var _status;
            if(k == 1){
                _status = "Waiting";
                res.render('show',{order: mongooseToObject(order), _status});
            }else if(k == 2){
                _status = "Preparing";
                res.render('show',{order: mongooseToObject(order), _status});
            }else if(k == 3){
                _status = "Done";
                res.render('done',{order: mongooseToObject(order), _status});
            }else if(k == 0){
                _status = "Pending";
                res.render('pending',{order: mongooseToObject(order), _status});
            }
            

        }catch(err) { next(err) };
    }

    soon(req, res, next){
        res.send('Comming soon');
    }

    async continue(req, res, next){
        const order = await Order.findOne({_id: req.params._id});
        var k = order.status + 1;
        await Order.updateOne({_id: req.params._id }, { status: k},);
         Order.find({status: 1})
         .then(orders => {
             // res.json(mutipleMongooseToObject(orders));
             res.redirect('/'+req.params._id);
         })
         .catch(next);
    }

    async cancel(req, res, next){
        await Order.updateOne({_id: req.params._id }, { status: 0});
        Order.find({status: 1})
         .then(orders => {
             // res.json(mutipleMongooseToObject(orders));
             res.redirect('/'+req.params._id);
         })
         .catch(next);
    }
}

module.exports = new SiteController;