const express = require("express");
const route = express.Router();

route.get("/", function(req, res) {
    res.render("index.ejs", {titulo: "vista principal"});
});

module.exports=route;