import path from "path";
import HtmlWebackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"), // __dirname это папка в которой мы находимся в данный момент
  output: {
    // куда и как делаем сборку приложения
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    clean: true, // чистит ненужные файлы
  },
  // плагины
  plugins: [
    new HtmlWebackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  // обработка файлов, выходящих за рамки JS(ts, jpeg, svg, css итд)
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // при импорте не надо писать расширение
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
