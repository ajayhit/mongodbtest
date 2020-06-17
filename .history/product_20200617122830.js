var mongoose= require('mongoose');
var Schema=mongoose.Schema;

var productschema=new Schema({
title:String,
price:Number,
instock:Boolean,
photo:String
});