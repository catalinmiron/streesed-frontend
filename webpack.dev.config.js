module.exports = require("./make-webpack-config")({
  hotComponents: true,
  devServer: true,
  devtool: "eval",
  hot: true,
  historyApiFallback: false
});
