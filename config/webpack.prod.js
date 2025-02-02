const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/frontend/Index.tsx",
    List: "./src/frontend/pages/List.tsx",
    Detail: "./src/frontend/pages/Detail.tsx"
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    publicPath: "/"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: ["node_modules", "src"],
    alias: {
      src: path.resolve(__dirname, "../src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/frontend/index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../_redirects"),
        to: path.resolve(__dirname, "../dist")
      }
    ])
  ]
};
