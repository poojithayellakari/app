var express = require('express');
const signup = require("../auth/signup");
const  login =require("../auth/login");
var router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
module.exports = router;
