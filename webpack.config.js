const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        compress: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'public')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}