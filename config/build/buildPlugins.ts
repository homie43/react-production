import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  // спецтип для плагинов
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
