const path = require('path');
module.exports = {
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "js/app.[name].js",
  },
  // mode: "development"
  mode: "production"
};