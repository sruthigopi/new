const express = require('express');
const BlodData =require('./src/model/BlogData');
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/blogdata', function(req,res){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods: POST,PATCH, GET, DELETE, PUT, OPTIONS");
    BlodData.find()
    .then(function(blog){
        res.send(blog);
    });
});


app.listen(3000);