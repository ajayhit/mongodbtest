var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');

var app=express();
var mongooes=require('mongoose');
var product=require('./product');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyparser.json());
var port=8091;
var router=express.Router();


router.route('/test').post(function(req,res)
{
res.send('hello world');
})

router.route('/showdata').get(function(req,res)
{
    let product={
        title:'test',
        price:10
    }
    res.send(product);
})

app.use(cors());
app.use('/api',router);
app.listen(port);
console.log('Rest Api is Running'+port);