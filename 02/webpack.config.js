let path = require("path");

module.exports = {
    entry: {
        aa1: path.resolve(__dirname, "./aa1.js"),
        aa2: path.resolve(__dirname, "./aa2.js"),
        aa3: path.resolve(__dirname, "./aa3.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: `[name].js`
    }
}