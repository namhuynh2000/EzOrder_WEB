orderService = require('../../models/modelServices/orderService');
const currentTab = 'dashboard'
const ITEM_PER_PAGE = 10;
class DashboardController {
    //[GET/DASHBOARD]
    async detail(req, res, next){
        try {
            const id = req.params.id;
            const order = await orderService.findByID(id);
            res.json(order);
        } catch(err) { console.log(err); };
    }
}

module.exports = new DashboardController;