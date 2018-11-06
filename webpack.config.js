const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./app/index.js"),
  resolve: {
    extensions: [
      ".mjs",
      ".web.js",
      ".js",
      ".json",
      ".web.jsx",
      ".jsx",
      ".web.ts",
      ".ts",
      ".tsx",
      ".web.tsx"
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ["babel-loader?cacheDirectory"]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "transformed.js",
    path: __dirname + "/build"
  },
  plugins: [htmlWebpackPlugin],
  watch: true
};
