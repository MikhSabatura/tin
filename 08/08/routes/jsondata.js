var express = require("express");
var parser = require("body-parser");
var router = express.Router();
router.use(parser.json());

router.post("/", function (req, res) {
    res.render("jsondata", {
        data: req.body
    });
});
module.exports = router;