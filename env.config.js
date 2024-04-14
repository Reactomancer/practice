const path = require('path');

const outputConfig = {
    destPath: "./dist"
};

const entryConfig = [
    "./src/index.tsx",
    "./src/styles/main.css",
];

const copyPluginPatterns = {
    patterns: [
        { from: "./src/assets/images", to: "images" },
    ]
};

const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
    historyApiFallback: true,

};

const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;