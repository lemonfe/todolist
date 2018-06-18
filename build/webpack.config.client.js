const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'
const devServer = {
  port: 8000,
  host: '127.0.0.1',
  // 当出现错误的时候，直接把错误输出到页面上
  overlay: {
    errors: true
  },
  hot: true
}
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HtmlWebpackPlugin()
]
let config

if (isDev) {
  config = merge(baseConfig, {
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            // {
            //     loader: 'css-loader',
            //     options: {
            //         module: true,
            //         localIdentName: '[path]-[name]-[hash:base64:5]'
            //     }
            // },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        },
        {
          test: /\.css/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    devServer,
    plugins: [
      ...defaultPlugins,
      new webpack.HotModuleReplacementPlugin()
    ]
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../src/client/index.js')
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [{
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        })

      }]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunks: 'all'
        }
      },
      runtimeChunk: true
    },
    plugins: [
      ...defaultPlugins,
      new ExtractTextPlugin(
       filename = 'styles.[hash:8].css'
      )
    ]
  })
}

module.exports = config
