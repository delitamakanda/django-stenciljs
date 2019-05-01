var BundleTracker = require('webpack-bundle-tracker');
var path = require('path');

module.exports = {
    output: {
        "path":  path.join(process.cwd(), "dist"),
        "filename":  "[name].bundle.js",
        "chunkFilename":  "[id].chunk.js",
        "publicPath": "http://localhost:4200/"
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    devServer: {
        "host": "localhost",
        "proxy": {
            "*": "http://localhost:8000/"
        },
        "historyApiFallback":  true,
        "publicPath":  "http://localhost:4200/",
        "headers": {
            'Access-Control-Allow-Origin':  '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    },
    plugins:[
        new BundleTracker({filename: '../webpack-stats.json'})
    ]
};
