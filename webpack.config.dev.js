var webpack = require('webpack');
var path = require('path');


//var fs = require('fs');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var UglifyJsPlugin = require('uglify-js-plugin');
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');


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

const requireFromString = require('require-from-string');
const MemoryFS = require('memory-fs');
const serverConfig = require('./server.production.js');
const fs = new MemoryFS();
const outputErrors = (err, stats) => {
    if (err) {
         console.error(err.stack || err);
         if (err.details) {
              console.error(err.details);
         }
         return;
    }

    const info = stats.toJson();
    if (stats.hasErrors()) {
        console.error(info.errors);
    }
    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
};

var config = {

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
        
        new ModernizrWebpackPlugin(),
        /*new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
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
        }),
        new UglifyJsPlugin({
            compress: true, //default 'true', you can pass 'false' to disable this plugin 
            debug: false //default 'false', it will display some information in console 
        }),*/
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

    externals: [
        './external_js/modernizr'
    ],

    // externals: {
    //     "react-bootstrap": "ReactBootstrap",
    //     "react": "React",
    //     "react-dom": "ReactDOM",
    // },

    devtool: 'inline-source-map',

    output: {
        path: BUILD_DIR,
        publicPath: 'http://127.0.0.1:8080/',
        filename: 'bundle.js',
        sourceMapFilename: "[file].map",
    }
};

module.exports = config;