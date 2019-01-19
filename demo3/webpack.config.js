var path = require("path");
process.env.NODE_DEV = 'production';
// webpack --mode=development

const config = {
    mode: 'production', // production development
    mode: process.env.NODE_DEV,
    entry: {
        pageOne: './xx/demo.js',
        pageTwo: './xx/demo.1.js',
        pageThree: './xx/demo.2.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '/yy')
    }
};

module.exports = config;