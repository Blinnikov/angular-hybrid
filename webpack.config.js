const path = require('path');
const webpack = require('webpack');
// var jquery = require("jquery");

const entries = ['app', 'auth'].reduce((result, moduleName) => {
    result[`${moduleName}`] = `./modules/${moduleName}/${moduleName}.config.js`;
    return result;
}, {});

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
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
            // Bundle stylesheets
            {
                enforce: 'pre',
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            // {
            //     enforce: 'pre',
            //     test: /\.js$/,
            //     use: {
            //         loader: 'source-map-loader'
            //     }
            // },
            {
                test: /\.html$/,
                use: {
                    loader: 'ng-cache-loader?module=templates'
                }
            },
        ]
    }
};
