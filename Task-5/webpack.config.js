const path = require('path');
const outputDirectory = 'dist';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const joinPath = function (stringPath) {
    return path.join(__dirname, stringPath);
};

module.exports = {
    entry: [joinPath('./src/index.tsx')],
    output: {
        path: joinPath(outputDirectory),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.tsx?$/],
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'webpack-import-glob-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    },
    devServer: {
        port: 3000,
        open: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: joinPath('./public/index.html'),
        }),
    ],
};
