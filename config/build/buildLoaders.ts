import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  // вынес лоадеры в переменную
  // для строгого порядка

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      // создает `style` из JS строк
      MiniCssExtractPlugin.loader,
      // трансллирует CSS в CommonJS
      "css-loader",
      // компилирует Sass в CSS
      "sass-loader",
    ],
  };

  // Если используем TS, юзаем этот ладер
  // Если пишем на JS, то добавили бы babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoaders];
}
