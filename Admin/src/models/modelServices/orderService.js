const Order = require('../Order');

module.exports.list = async (query, page, itemPerPage) => {
    const paginate = await Order.paginate(query, {
        select: 'tableNumber status totalPrice',
        page: page,
        limit: itemPerPage,
        lean: true,
    });
    return paginate;
}

module.exports.findByID = async (orderId) => {
    order = await Order.findById(orderId).lean();
    return order;   
}