/**
 * Created by Marcin on 03.01.2017.
 */
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/vendor');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    context: APP_DIR,

    entry: {
        // create two library bundles, one with jQuery and
        // another with Angular and related libraries
        'react-bootstrap': ['react-bootstrap'],
        'react': ['react', 'react-dom'],
    },

    output: {
        filename: '[name].bundle.js',
        path: BUILD_DIR,

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]',
    },

    plugins: [
        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: BUILD_DIR + '/[name]-manifest.json',
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]'
        }),
    ],
};