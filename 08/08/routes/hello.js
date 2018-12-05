var express = require("express");
var router = express.Router();

var helloFunction = function (req, res) {
    res.send("Hello world!");
};

router.route("/")
    .get(helloFunction)
    .post(helloFunction);

module.exports = router;