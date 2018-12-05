var express = require("express");
var formRouter = express.Router();
var formDataRouter = express.Router();

formRouter.get("/", function (req, res) {
    res.render("form");
});
formDataRouter.post("/", function (req, res) {
    res.render("formdata", {
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    });
});

module.exports.formRouter = formRouter;
module.exports.formDataRouter = formDataRouter;