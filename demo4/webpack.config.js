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
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ],
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }
                ]
            }
        ],
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: [
                        {
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                            'less': 'vue-style-loader!css-loader!less-loader?indentedSyntax'
                        }
                    ]
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: require.resolve('zepto'),
                loader: 'exports-loader?window.Zepto!script-loader'
            }
        ]
    }
};

module.exports = config;