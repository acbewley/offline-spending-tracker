const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: '/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    mode: 'production',
    plugins: [
        new WebpackPwaManifest ({
            filename: 'manifest.json',
            inject: false,
            fingerprints: false,
            name: 'Spending Tracker',
            short_name: 'Spending Tracker',
            theme_color: '#ffffff',
            background_color: '#ffffff',
            start_url: '/',
            display: 'standalone',
            icons: [
                {
                    src: path.resolve(
                        __dirname,
                        'icons/icon-512x512.png'
                    ),
                    size: [72, 96, 128, 144, 152, 192, 384, 512]
                }
            ]
        })
    ]
};

module.exports = config;