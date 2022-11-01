var express =require('express');
var app =express();

function login(req,res){
    console.log(req.body);
    res.send("successfully logged in", +req.body.email_id);
}
module.exports= login;