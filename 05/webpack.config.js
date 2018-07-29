let path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./main.js"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        },{
            test:/\.jpe?g|png|gif$/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:1024,
                    name:'./imgs/[name].[ext]'
                }
            }]
        },{
            test:/\.(woff2||woff||ttf||svf||eot)$/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:10240,
                    name:"./fonts/[name].[ext]"
                }
            }]
        }]
    }
}