const { AngularCompilerPlugin } = require('@ngtools/webpack');

const path = require('path');
const webpack = require('webpack');

const entries = ['app', 'auth'].reduce((result, moduleName) => {
    result[`${moduleName}`] = `./ng1-src/modules/${moduleName}/${moduleName}.config.js`;
    return result;
}, {});

entries.main = ["./ng2-src\\main.ts"];
entries.polyfills = ["./ng2-src\\polyfills.ts"];
entries.styles = ["./ng2-src\\styles.css"];

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    mode: "development",
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'vendor'
        },
    },
    plugins: [
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
        }),
        new AngularCompilerPlugin({
            "mainPath": "main.ts",
            "platform": 0,
            "hostReplacementPaths": {
                "environments\\environment.ts": "environments\\environment.ts"
            },
            "sourceMap": true,
            "tsConfigPath": "ng2-src\\tsconfig.app.json",
            "skipCodeGeneration": true,
            "compilerOptions": {}
        })
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.css$/,
                loader: "style-loader!css-loader",
                "exclude": [
                    path.join(process.cwd(), "ng2-src\\**")
                ],
            },
            {
                "include": [
                    path.join(process.cwd(), "ng2-src\\app\\app.component.css")
                ],
                // "exclude": [
                //   path.join(process.cwd(), "ng2-src\\styles.css")
                // ],
                "test": /\.css$/,
                "use": [
                    {
                        "loader": "raw-loader",
                        //   "loader": "style-loader"
                    }
                ]
            },
            {
                "include": [
                    path.join(process.cwd(), "ng2-src\\styles.css")
                ],
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    {
                        "loader": "raw-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                "test": /\.html$/,
                "exclude": [
                    path.join(process.cwd(), "ng1-src")
                ],
                "loader": "raw-loader"
            },
            {
                test: /\.html$/,
                "exclude": [
                    path.join(process.cwd(), "ng2-src")
                ],
                use: {
                    loader: 'ng-cache-loader?module=templates'
                }
            },
            {
                test: /\.ts$/,
                loader: "@ngtools/webpack"
            }
        ]
    }
};
