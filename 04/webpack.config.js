let path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./main.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
            
               use:[{
                   loader:"style-loader"
               },{
                   loader:"css-loader"
               }]
            }
        ]
    }
}