var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var productschema=new Schema({
title:String,
price:Number,
instock:Boolean,
photo:String
});

module.exports = mongoose.model('Product',productschema);