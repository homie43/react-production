import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // вынес лоадеры в переменную
  // для строгого порядка
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
