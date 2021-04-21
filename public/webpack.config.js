const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: '/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins:
};

module.exports = config;