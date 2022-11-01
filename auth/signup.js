var express = require('express');
var app = express();

function signup(req, res){
    console.log(req.body);
    res.send("succesfully signed  "+req.body.username);
}
module.exports = signup;