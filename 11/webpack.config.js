const path = require("path");

var BUILD_DIR = path.resolve(__dirname, "./public");
var APP_DIR = path.resolve(__dirname, "./src");

module.exports = {
    entry: APP_DIR + "/index.js",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: APP_DIR,
            use: {
                loader: "babel-loader"
            }
        }]
    }
};