var express = require('express');
var app = express();

app.use(express.json());
var router =  require("./router/routes");
app.use(router);

app.listen(3000);