'use strict'
var express = require('express');
var app = express();
var path = require('path');
process.env.NODE_ENV = "dev"
// THE STATIC FILES
app.use(express.static('public'));

// MAIN ENTRY POINT
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname,
        'public', 'index.html'))
});
app.listen(3000, function(){
    console.log('App web-server listening on port 3000');
});

