// webpack.main.config.js
const path = require('path');

module.exports = {
    entry: './src/app.js',  // Entry point for the main process
    output: {
        filename: 'main.bundle.js',  // Output for the main process
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'electron-main',  // Target the main process
    node: {
        __dirname: false,
        __filename: false
    },
};
