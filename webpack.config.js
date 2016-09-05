const path = require("path");
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

const config = {
    entry: { 
        "entry1": "./src/entry1.js",
        "entry2": "./src/entry2.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].chunk.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin("common.chunk.js")
    ]
};

module.exports = config;
