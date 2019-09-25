const path = require("path");

const config = {
  context: __dirname,
  mode: "development",
  entry: {
    app: "./lib/frontend/App.tsx"
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  }
};

module.exports = config;
