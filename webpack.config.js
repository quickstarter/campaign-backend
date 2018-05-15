const path = require('path');

const sharedConfig = {
  mode: 'development',
  devtool: '#eval-source-map',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    library: 'Community',
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

const serverConfig = Object.assign({}, sharedConfig, {
  target: 'node',
  entry: './server/serverBundleEntry.js',
  output: Object.assign({
    filename: 'serverBundle.js',
    libraryTarget: 'umd', // Make it requireable
  }, sharedConfig.output),
});

const clientSharedConfig = Object.assign({}, sharedConfig, {
  target: 'web',
  output: Object.assign({
    library: 'Community',
    libraryTarget: 'var', // Make it a global variable
    libraryExport: 'default',
  }, sharedConfig.output),
});

const clientServerDataConfig = Object.assign({}, clientSharedConfig, {
  entry: './client/src/components/community-serverdata.jsx',
  output: Object.assign({
    filename: 'clientServerDataBundle.js',
  }, clientSharedConfig.output),
});

const clientFetchDataConfig = Object.assign({}, clientSharedConfig, {
  entry: './client/src/components/community-fetchdata.jsx',
  output: Object.assign({
    filename: 'clientFetchDataBundle.js',
  }, clientSharedConfig.output),
});

module.exports = [serverConfig, clientServerDataConfig, clientFetchDataConfig];
