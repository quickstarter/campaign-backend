const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
  target: 'node', // Ignore built-in node modules like fs
  mode: 'development',
  externals: [nodeExternals()], // Ignore modules in node_modules
  entry: './server/serverBundleEntry.js',
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'serverBundle.js',
    library: 'Community',
    libraryTarget: 'umd', // Make it requireable
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};

const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: './client/src/components/community.jsx',
  output: {
    filename: 'clientBundle.js',
    path: path.resolve(__dirname, 'client/dist'),
    library: 'Community',
    libraryTarget: 'var', // Make it a global variable
  },
  devtool: '#eval-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
};

module.exports = [serverConfig, clientConfig];
