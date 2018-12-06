var express = require("express");
var parser = require("body-parser");
var router = express.Router();
var jsonParser = parser.json();

router.post("/", jsonParser, function (req, res) {
    res.render("jsondata", {
        data: req.body
    });
});
module.exports = router;