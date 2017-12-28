const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const url = require('url')
const path = require('path')
const publicPath = '/assets'

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = (options = {}) => ({
  entry: {
    vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/admin/assets/' : publicPath
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader',
        }
      }
    },
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', {
        loader: 'sass-loader',
        options: {
          //includePaths: ['./node_modules/element-ui/packages/theme-chalk/src']
        }
      }]
    },
    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${NODE_ENV}"`
      }
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
      'vue$': 'vue/dist/vue.esm.js',
      'adminvue': path.join(__dirname, '..', 'src'),
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/admin/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})
