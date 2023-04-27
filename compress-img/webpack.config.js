const path = require('path');
module.exports = {
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "js/app.[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader'),
      },
    ],
  },
  // mode: "development"
  mode: "production"
};