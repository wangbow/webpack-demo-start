let path = require("path");

module.exports = {
    entry:path.resolve(__dirname,"./main.js"),
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[["env"],"react"],
                            plugins:["transform-class-properties"]
                        }
                    }
                ]
            }
        ]
    }
}