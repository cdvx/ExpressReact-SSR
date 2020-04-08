const path = require('path');
const webpack =  require('webpack');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules')
    ],
  },
  entry: {
    vendor: [
      'react',
      'react-dom',
      'prop-types',
      'axios',
      'lodash.pickby',
      'lodash.isequal'

    ],
    app: ['./lib/renderers/dom.js']
  }, //'./lib/renderers/dom.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', '@babel/preset-env']
        }
      } 
    }
    ]
  },
  optimization: {
    runtimeChunk: "single", // enable "runtime" chunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};