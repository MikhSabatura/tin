"use strict";
var fs = require("fs");
var dirPath = process.argv[2];
monitorDirectory(dirPath);

function monitorDirectory(dirPath) {
    fs.watch(dirPath, (eventType, fileName) => {
        console.log(fileName + " " + eventType);
        if (eventType === "change") {
            logFileContent(dirPath + fileName);
        }
    });
}

function logFileContent(filePath) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
}