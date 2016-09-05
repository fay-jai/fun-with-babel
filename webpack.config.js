const path = require("path");

const config = {
    entry: [
        "./src/app.js"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};

module.exports = config;
