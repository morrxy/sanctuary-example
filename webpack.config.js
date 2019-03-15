const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')

const config = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};

module.exports = (mode) => {
  const pages = [
    {
      entry: {
        example1: './src/example-if-return.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'example1.html',
        })
      ]
    },
    {
      entry: {
        example2: './src/example-if-return-v2.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'example2.html',
        })
      ]
    },
    {
      entry: {
        example3: './src/example-if-return-v3.js'
      },
      plugins: [
        new HtmlWebpackPlugin({
          filename: 'example3.html',
        })
      ]
    }
  ]

  const configList = pages.map(page => merge(config, page))

  return configList
}
