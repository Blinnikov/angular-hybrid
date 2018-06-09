var webpack = require('webpack');
// var jquery = require("jquery");

module.exports = {
    entry: "./main.js",
    output: {
        filename: "./bundle.js",
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    mode: "development",
    plugins: [
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            // Bundle resource files
            {
                enforce: 'pre',
                test: /(\.png|\.gif|\.ttf|\.eot|\.woff|\.svg)/,
                loader: 'file-loader',
            },

            // Bundle stylesheets
            { 
                enforce: 'pre',
                test: /\.css$/,
                loader: "style-loader!css-loader" 
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: 'pre',
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    }
};
