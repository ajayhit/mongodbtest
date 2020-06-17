var express=require('express');
var bodyparser=require('body-parser');
var cors=require('cors');

var app=express();
var mongooes=require('mongoose');
var product=require('./product');