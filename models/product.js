const db = require('../utils/database');

module.exports = class Product {
    constructor(id, title, price, department) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.department = department;
    }

    save() {
        return db.execute('INSERT INTO products (title, price, departement) VALUES (?,?,?,?)', 
        [this.title, this.price, this.departement]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}