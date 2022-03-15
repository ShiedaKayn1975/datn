const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var path = require('path')
require('dotenv').config()
var webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    mode: 'development',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: argv.mode == 'development' ?`[name].bundle.version_1.0.2.js`: `[contenthash].bundle.version_1.0.2.js`,
      chunkFilename: argv.mode == 'development' ? `[name].bundle.version_1.0.2.js`: `[contenthash].bundle.version_1.0.2.js`,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]'
            }
          }]
        },
        {
          test: /(\.css|\.scss|\.sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')
                ],
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                includePaths: [path.resolve(__dirname, 'src')],
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        baseUrl: process.env.BASE_URL,
        excludeChunks: Object.keys({})
      }),
      new MiniCssExtractPlugin({
        filename:  argv.mode == 'development' ? '[name].css': '[contenthash].css',
        chunkFilename: argv.mode == 'development' ? '[name].css': '[contenthash].css',
      }),
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js',
      }),
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      // hot: true,
      port: 8035,
      compress: true,
      disableHostCheck: true,   // That solved it
      open: true
    },
    externals: {
      // global app config object
      config: JSON.stringify({
        peckPortalApi: process.env.PECK_PORTAL_API_URL
      })
    },
  }
};