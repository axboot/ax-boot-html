var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: [
        'webpack-dev-server/client?http://localhost:4000/',
        'webpack/hot/dev-server',
        './index.js'
    ],

    output: {
        path      : path.resolve(__dirname, 'public'),
        filename  : 'bundle.js',
        publicPath: 'http://localhost:4000/'
    },

    module: {
        rules: [{
            test   : /\.js/,
            include: [path.resolve(__dirname, 'src')],
            exclude: [path.resolve(__dirname, 'node_modules')],
            loader : 'babel-loader'
        }]
    },

    devtool: 'source-map',

    target: 'web',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title   : 'AXBOOT FRAMEWORK HTML',
            template: './index.ejs',
        }),
    ],

    devServer: {
        port      : 4000,
        inline    : true,
        publicPath: 'http://localhost:4000/'
    }
};