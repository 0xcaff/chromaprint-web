const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/bootstrap.js",
  module: {
    rules: [
      {
        test: /\.module.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".wasm"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js"
  },
  mode: "development",
  plugins: [new CopyWebpackPlugin(["src/index.html"])]
};
