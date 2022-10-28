const path = require('path');

const express = require('express');

const route = express.Router();

route.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
  });
  
  route.post('/product', (req, res, next) => {
      //retirando o erro de object null prototype do console.
    //    console.log(req.body);
      const obj = JSON.parse(JSON.stringify(req.body));
      console.log(obj);
      res.redirect('/');
  });

module.exports = route;
