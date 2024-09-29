const path = require('path');

module.exports = {
    entry: './src/app.js',  // Entry point for the main process
    output: {
        filename: 'bundle.js',  // The bundled JS file name
        path: path.resolve(__dirname, 'dist'),  // Output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Apply Babel to JS files
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
    target: 'electron-main',  // Target Electron's main process
};
