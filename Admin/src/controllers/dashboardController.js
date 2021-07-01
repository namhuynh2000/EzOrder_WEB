orderService = require('../models/modelServices/orderService');
const currentTab = 'dashboard'
const ITEM_PER_PAGE = 10;
class DashboardController{
    //[GET/DASHBOARD]
    async index(req, res){
        try {
            const page = req.query.page || 1;
            const paginate = await orderService.list({}, page, ITEM_PER_PAGE);
            //res.json(orders);
            res.render('dashboard', {
                currentTab,
                orders: paginate.docs,
                currentPage: paginate.page,
                hasPrevPage: paginate.hasPrevPage,
                hasNextPage: paginate.hasNextPage,
                totalPages: paginate.totalPages,});
        } catch(err) { console.log(err); };
    }
}

module.exports = new DashboardController;