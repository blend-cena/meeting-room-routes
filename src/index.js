const express = require("express");
var { expressjwt: jwt } = require("express-jwt");
require("dotenv").config();


const app = express();

console.log('hello from Node.js')
app.listen(8080);
module.exports = app;
