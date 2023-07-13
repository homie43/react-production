import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // вынес лоадеры в переменную
  // для строгого порядка

  // Если используем TS, юзаем этот ладер
  // Если пишем на JS, то добавили бы babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader];
}
