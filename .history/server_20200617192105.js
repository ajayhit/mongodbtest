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


mongooes.connect('mongodb://localhost:27017/Products',{useNewUrlParser:true}).catch(error=>console.log(error));

router.use(function(req,resp,next)
{
    console.log("Logging of all req"+req.url);
    next();
})

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

router.route('/product').get((req,res)=>
{
    product.find(function(err,Products){
if(err)
{
    res.send(err);
}
res.send(Products);
    })
})

router.route('/product').post((req,res)=>
{
    let p=new product();
    p.title=req.body.title;
    p.price=req.body.price;
    p.instock=req.body.instock;
    p.photo=req.body.title;
 
    console.log(req.body);

    p.save(function(err){
res.send(err);
    })
    res.send({message:'data insert successfully'});
})

app.use(cors());
app.use('/api',router);
app.listen(port);
console.log('Rest Api is Running'+port);