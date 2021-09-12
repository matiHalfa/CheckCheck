var http = require('http');
var url = require('url');
var fs = require('fs');
const express = require('express')

var dt = require('./myModule');

const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
