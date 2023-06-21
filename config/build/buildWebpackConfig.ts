import webpack from "webpack";
import path from "path";
import { BuildOptions } from "./types/config";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode,
    entry: paths.entry, // __dirname это папка в которой мы находимся в данный момент
    output: {
      // куда и как делаем сборку приложения
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true, // чистит ненужные файлы
    },
    // плагины
    plugins: buildPlugins(options),
    // обработка файлов, выходящих за рамки JS(ts, jpeg, svg, css итд)
    module: {
      rules: buildLoaders(),
    },
    // при импорте не надо писать расширение
    resolve: buildResolvers(),
  };
}
