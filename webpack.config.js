'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './js/app.js',
        './scss/app.scss'
    ],

    output: {
        path: __dirname,
        filename: 'dist/app.js'
    },

    plugins: [
        new ExtractTextPlugin('dist/app.css'),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    watch: true,
    stats: {
        // Colored output
        colors: true
    },

    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};