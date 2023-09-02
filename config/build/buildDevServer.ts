import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // автооткрытие страницы с приложением
    historyApiFallback: true, // проксирует запросы через index.html // для SPA
    hot: true,
  };
}
