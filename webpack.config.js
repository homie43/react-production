const path = require("path");
const HTMLWebackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"), // __dirname это папка в которой мы находимся в данный момент
  output: {
    // куда и как делаем сборку приложения
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true, // чистит ненужные файлы
  },
  // плагины
  plugins: [new HTMLWebackPlugin()],
};
