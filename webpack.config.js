const path = require('path');

module.exports = {
    context: path.resolve('./src'),
    devtool: "source-map",
    entry: "./fight",
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        }
    },
    resolve: {
        extensions: [".ts", ".js"],
        modules: [path.resolve('./src'), 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devServer: {
        inline:true,
        port: 3001
    },
    plugins: [
    ]
}