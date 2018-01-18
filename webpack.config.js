var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglify-js-plugin');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var IMAGES_DIR = path.resolve(__dirname, 'images');
var ARTICLES_DIR = path.resolve(__dirname, 'articles_load');
var FONT_DIR = path.resolve(__dirname, 'fonts');
var BOWER_DIR = path.resolve(__dirname, 'bower_components');
var EXTERNALS = path.resolve(__dirname, 'external_js');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

// var REACT_LIB_MANIFEST = './dist/vendor/react-manifest.json';
// var REACT_BOOTSTRAP_LIB_MANIFEST = './dist/vendor/react-bootstrap-manifest.json';
//
// var reactLibExists = fs.existsSync(path.resolve(BUILD_DIR, "../" + REACT_LIB_MANIFEST));
// var reactBootstrapLibExists = fs.existsSync(path.resolve(BUILD_DIR, "../" + REACT_BOOTSTRAP_LIB_MANIFEST));
//
// if (!reactLibExists || !reactBootstrapLibExists) {
//     console.error("!!!!!!!! Please run `webpack --config webpack.vendor.config.js` to generate DLLs for project. !!!!!!!!!!!");
//     return;
// }
//


var config = {

    stats: {
        warnings: false
    },
    context: APP_DIR,
    entry: [
        'babel-polyfill',
        'webpack/hot/dev-server',

        './index.jsx',
    ],

    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    loaders: [{
            test: /\.css$/,
            loader: 'style!css?modules&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]'
        },
        { test: /\.json$/, loader: 'json' },
        { test: /\.mp4$/, loader: `url?limit=65536&mimetype=video/mp4` },
        { test: /\.svg$/, loader: `url?limit=65536&mimetype=image/svg+xml` },
        { test: /\.png$/, loader: `url?limit=65536&mimetype=image/png` },
        { test: /\.jpg$/, loader: `url?limit=65536&mimetype=image/jpeg` },
        { test: /\.gif$/, loader: `url?limit=65536&mimetype=image/gif` },
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader'
        }
    ],
    plugins: [
        // new webpack.DllReferencePlugin({
        //     context: APP_DIR,
        //     manifest: require(REACT_LIB_MANIFEST)
        // }),
        // new webpack.DllReferencePlugin({
        //     context: APP_DIR,
        //     manifest: require(REACT_BOOTSTRAP_LIB_MANIFEST)
        // }),
        new CopyWebpackPlugin([
            { from: IMAGES_DIR, to: 'images' },
            { from: FONT_DIR, to: 'fonts' },
            { from: EXTERNALS, to: 'external_js' },
            { from: ARTICLES_DIR, to: 'articles_load' }
        ]),
        /*new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),*/
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        /*
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),*/
        new UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin 
            warningsFilter: false,
            debug: false //default 'false', it will display some information in console 
        }),
        new ModernizrWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Credit Swift',
            template: 'index_ori.html',
            publicPath: '/',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: "/node_modules/",
                loader: "babel",
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    externals: {
        // "react-bootstrap": "ReactBootstrap",
        // "react": "React",
        // "react-dom": "ReactDOM",
    },

    devtool: 'inline-source-map',

    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js',
        sourceMapFilename: "[file].map",
    }
};

module.exports = config;