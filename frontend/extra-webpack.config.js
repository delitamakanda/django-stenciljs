var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');

module.exports = {
    output: {
        "path":  path.join(process.cwd(), "dist"),
        "filename":  "[name].bundle.js",
        "chunkFilename":  "[id].chunk.js",
        "crossOriginLoading": false,
        "publicPath":"http://127.0.0.1:4200/"
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    devServer: {
        "historyApiFallback":  true,
        "publicPath":  "http://127.0.0.1:4200/",
        "headers": {
            'Access-Control-Allow-Origin':  '\\*'
        }
    },
    plugins:[
        new BundleTracker({filename: '../webpack-stats.json'})
    ]
};
