var express = require("express");
var router = express.Router();
var parser = require("body-parser");
router.use(parser.json());

const mathFunctions = {
    "add": (a, b) => a + b,
    "sub": (a, b) => a - b,
    "mul": (a, b) => a * b,
    "div": (a, b) => a / b
};

router.post("/", function (req, res) {
    let operation = mathFunctions[req.body.operation];
    if (!operation) {
        res.sendStatus(400);
    }
    let p1 = req.body.p1,
        p2 = req.body.p2;
    if (!p1 || !p2) {
        res.sendStatus(400);
        return;
    }
    p1 = Number(p1);
    p2 = Number(p2);
    if (isNaN(p1) || isNaN(p2)) {
        res.status(400).send("");
        return;
    }
    res.status(200).json({
        "result": operation(p1, p2)
    });
});

module.exports = router;