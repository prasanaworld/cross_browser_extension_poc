const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const defaults = require('./config/defaults');
const config = require('./config/configuration');

console.log(defaults.SRC_DIR);

module.exports = {
    devtool: 'inline-source-map',
    context:  defaults.SRC_DIR,
    target: 'web',
    resolve: {
        extensions: [ '.jsx', '.js', '.css'],
        modules: [  defaults.SRC_DIR, 'node_modules' ],
    },
    entry: {
        content: [
            defaults.CONTENT_SCRIPT_PATH
        ],
        idsafe: [
            defaults.BACKGROUND_SCRIPT_PATH
        ],
        // vendors: [

        // ],
        // popup: [
        //     path.resolve(__dirname, defaults.POPUP_SCRIPT_PATH)
        // ]
    },
    output: {
      path:  defaults.DIST_DIR,
      publicPath: "",
      filename: '[name].js',
      pathinfo: true,
    },
    performance: {
      hints: false,
    },
    module: {
        rules: [
            {
              test: /.jsx|.js?$/,
              include: [ defaults.SRC_DIR ],
              loader: 'happypack/loader?id=1',
              query: {
                cacheDirectory: true
              }
            },
            {
                test: /.css$/,
                loaders: ['style-loader','css-loader'],
              },
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'background.html',
            title: "background page",
            excludeChunks: ['content'],
            inject: 'head'
        }),

        new HappyPack({
            id: '1',
            threads: 6,
            loaders: ['babel-loader'],
            verbose: true,
            debug: true,
        }),

        // new webpack.LoaderOptionsPlugin({
        //     minimize: true,
        //     debug: false,
        // }),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //       screw_ie8: true,
        //       warnings: false,
        //     },
        //     sourceMap: true,
        // })

    ]
};