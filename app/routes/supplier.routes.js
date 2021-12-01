module.exports = function(app) {

    var suppliers = require('../controllers/supplier.controller.js');

    // Retrieve all Suppliers
    app.get('/suppliers', suppliers.findAll);

    // Retrieve a single Supplier with supplierId
    app.get('/suppliers/:supplierId', suppliers.findOne);

    // Update a Supplier with supplierId
    app.patch('/suppliers/:supplierId/phone', suppliers.updatePhone);

    // Delete a Supplier with SupplierId
    app.delete('/suppliers/:supplierId', suppliers.delete);
}