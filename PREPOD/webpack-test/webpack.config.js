const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'public/index.html'
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    devServer: {
        port: 3002,
        open: true,
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'public')
        }
    }
};