"use strict";
const http = require("http");
const url = require("url");

const mathFunctions = {
    "/add": (a, b) => a + b,
    "/sub": (a, b) => a - b,
    "/mul": (a, b) => a * b,
    "/div": (a, b) => a / b
};

const parsePropsToNumbers = function (obj) {
    let result = {};
    let i = 0;
    for (const key in obj) {
        result[i] = Number(obj[key]);
        if (isNaN(result[i])) {
            result.err = true;
        }
        i++;
    }
    return result;
};

http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true);
    let queryParams = parsedUrl.query;
    let resposeFunction = mathFunctions[parsedUrl.pathname];
    if (!resposeFunction) {
        res.statusCode = 404;
        res.end("not supported operation");
        return;
    }
    let parsedQueryParams = parsePropsToNumbers(queryParams);
    if (Object.keys(queryParams).length != 2 || parsedQueryParams.err) {
        res.statusCode = 400;
        res.end("invalid parameters");
    }
    res.writeHead(200, {
        "Content-type": "text/html"
    });
    res.end("result = " + resposeFunction(parsedQueryParams[0], parsedQueryParams[1]));
}).listen(8000, "localhost");