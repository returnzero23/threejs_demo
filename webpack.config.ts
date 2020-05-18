const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    },

    plugins: [
        new HtmlWebPackPlugin(
            {
                title: "threejs学习"
            }),
    ]
};