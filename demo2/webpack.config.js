var path = require("path");

const config = {
    entry: './xx/demo.js',
    entry: {
        main: './xx/demo.js'
    },
    entry: {
        app: './xx/demo.js',
        vendors: './xx/demo.1.js' 
    },
    entry: {
        pageOne: './xx/demo.js',
        pageTwo: './xx/demo.1.js',
        pageThree: './xx/demo.2.js'
    },
    output: {
        filename: 'output.js',
        path: '/yy'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/yy'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '/yy')
    }
};

module.exports = config;