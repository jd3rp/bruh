// webpack.renderer.config.js
const path = require('path');

module.exports = {
    entry: './src/renderer.js',  // Entry point for the renderer process
    output: {
        filename: 'renderer.bundle.js',  // Output for the renderer process
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    target: 'electron-renderer',  // Target the renderer process
};
