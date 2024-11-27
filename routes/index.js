var express = require('express');
var router = express.Router();
const Category = require("../models/category");
const Product = require("../models/product");
/* GET home page. */
router.get('/', async(req, res, next)=> {
  var category=await Category.find()
 
  res.render('index', { title: 'E-commerce',
    Category:category
   });
});

module.exports = router;
