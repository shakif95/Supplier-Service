module.exports = function(app) {

    var orders = require('../controllers/order.controller.js');

   // create a single Order with OrderId
    app.post('/suppliers/:supplierId/orders', orders.create);

    app.get('/suppliers/:supplierId/orders', orders.findAll);

}
