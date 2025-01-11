import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[path][name].[contenthash][ext]",
  },
});
