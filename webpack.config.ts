import path from "path";
import { BuildPaths } from "./config/build/types/config";
import webpack from "webpack";
import { BuildWebpackConfig } from "./config/build/buildWebpackConfig";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"), // __dirname это папка в которой мы находимся в данный момент
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = BuildWebpackConfig({
  mode: "development",
  paths,
  isDev,
});

export default config;
