var Order = require('../models/order.model.js');

exports.create = function(req, res) {
    // Create and Save a new Order
    if(!req.body.name) {
        res.status(400).send({message: "Order can not be empty"});
    }

    var newOrder = new Order({name: req.body.name, bill: req.body.bill, supplierId: req.params.supplierId});

    Order.create(newOrder, function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Order."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all orders from the database.
    Order.findAll(function(err, orders){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Orders."});
        } else {
            res.send(orders);
        }
    });
};


