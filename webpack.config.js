const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        app: path.resolve(__dirname, 'src/public/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'src/public/js'),
        filename: '[name].bundle.js'
    },
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [

    ]
};