var Supplier = require('../models/supplier.model.js');

exports.findAll = function(req, res) {
    // Retrieve and return all Suppliers from the database.
    Supplier.findAll(function(err, Suppliers){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Suppliers."});
        } else {
            res.send(Suppliers);6
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single Supplier with a SupplierId
    Supplier.findOne(req.params.supplierId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve Supplier with id " + req.params.SupplierId});
        } else {
            res.send(data);
        }
    });
};

exports.updatePhone = function(req, res) {
    // Update a Supplier Phone identified by the SupplierId in the request
    Supplier.findOne(req.params.supplierId, function(err, supplierData) {
        if(err) {
            res.status(500).send({message: "Could not find a Supplier with id " + req.params.SupplierId});
        }

        const supplier = {
            ...supplierData,
            phone: req.body.phone
        }

        Supplier.updatePhone(supplier, function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update Supplier with id " + req.params.SupplierId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a Supplier with the specified SupplierId in the request
    Supplier.delete(req.params.supplierId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete Supplier with id " + req.params.id});
        } else {
            res.send({message: "Supplier deleted successfully!"})
        }
    });
};

