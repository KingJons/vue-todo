// 运行环境是node，/使用的是common.js规范
const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname + "/src/main.js"),
    output: {
        path: path.resolve(__dirname + "/dist/js"),
        filename: "bundle.js"
    },
    // 开发工具
    devtool: 'source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js','.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
    },
}