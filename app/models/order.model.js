const generateRandomId = require('../util.js');

const Order = function (order) {
    this.id = generateRandomId();
    this.name = order.name;
    this.bill = order.bill;
    this.supplierId = order.supplierId;
}

let OrderSchema = [
    
];

Order.create = (order, result) => {
    OrderSchema.push(order);
    return result(null, order);
}

Order.findAll = (result) => {
    return result(null, OrderSchema);
}

module.exports = Order;
