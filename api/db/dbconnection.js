const mongoose = require('mongoose');
require('../model/itemSchema');


mongoose.connect('mongodb://localhost/shopingDB')
    .then(()=>console.log('Database connection established...'))
    .catch(err=> console.log(err));

