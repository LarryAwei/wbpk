const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: './index.js', //打包入口
    devServer: {
        contentBase: './dist',
        open: true
    },
    module: {
        rules: [{
            test: /\.jpg/,
            use: {
                loader: 'url-loader',
                options: {
                    // placeholder 占位符
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    limit: 2048
                }
            }
        },{
            test: /\.scss/,
            use: ['style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules: true
                    }
                },
                'sass-loader', 'postcss-loader']

        },{
            test: /\.css/,
            use: ['style-loader','css-loader'
                ]

        }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html"
    }), new CleanWebpackPlugin()],
    output: {
        filename: 'bundle.js',
        publicPath: "/",
        path: path.resolve(__dirname, 'dist')
    }
}
