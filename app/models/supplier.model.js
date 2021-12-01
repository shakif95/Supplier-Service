const generateRandomId = require('../util.js');

const Supplier = function (supplier) {
    this.id = generateRandomId();
    this.name = supplier.name;
    this.size = supplier.size;
    this.genre = supplier.genre;
    this.phone = supplier.phone;
}

let SupplierSchema = [
    {
        id: generateRandomId(),
        name: 'IKEA',
        size: 'L',
        genre: 'Furnitures',
        phone: '+89456123'
    },
    {
        id: generateRandomId(),
        name: 'Volvo',
        size: 'L',
        genre: 'Automobile',
        phone: '+78913410'
    },
    {
        id: generateRandomId(),
        name: 'N26',
        size: 'M',
        genre: 'Finance',
        phone: '+77441120'
    },
    {
        id: 1234,
        name: 'DM',
        size: 'L',
        genre: 'General shop',
        phone: '+852222222'
    }
];

Supplier.findAll = (result) => {
    return result(null, SupplierSchema);
}

Supplier.findOne = (supplierId, result) => {
    const supplier = SupplierSchema.find(supplier => supplier.id == supplierId);
    
    if(supplier === null || supplier === undefined){
        throw `Supplier not found with id: ${supplierId}`
    }

    return result(null, supplier);
}

Supplier.updatePhone = (data, result) => {
    SupplierSchema = SupplierSchema.map(supplier => {
        if(supplier.id == data.id) return data
        return supplier
    });

    return result(null, data)
}

Supplier.delete = (supplierId, result) => {
    SupplierSchema = SupplierSchema.filter(supplier => supplier.id != supplierId);
    return result(null, true)
}


module.exports = Supplier;
