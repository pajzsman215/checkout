const express = require('express');
const bodyParser = require('body-parser');

const db = require('./utils/database');
const app = require('express');

db.execute('SELECT * FROM products')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);