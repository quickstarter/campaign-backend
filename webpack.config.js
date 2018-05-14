const path = require('path');

const serverConfig = {
  target: 'node',
  mode: 'development',
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

const clientServerDataConfig = {
  target: 'web',
  mode: 'development',
  entry: './client/src/components/community-serverdata.jsx',
  output: {
    filename: 'clientServerDataBundle.js',
    path: path.resolve(__dirname, 'client/dist'),
    library: 'Community',
    libraryTarget: 'var', // Make it a global variable
    libraryExport: 'default',
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

const clientFetchDataConfig = {
  target: 'web',
  mode: 'development',
  entry: './client/src/components/community-fetchdata.jsx',
  output: {
    filename: 'clientFetchDataBundle.js',
    path: path.resolve(__dirname, 'client/dist'),
    library: 'Community',
    libraryTarget: 'var', // Make it a global variable
    libraryExport: 'default',
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

module.exports = [serverConfig, clientServerDataConfig, clientFetchDataConfig];
