import HtmlWebpackPlugin from "html-webpack-plugin";
import { EsbuildPlugin } from "esbuild-loader";
import esbuild from "esbuild";

export default {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      template: "./src/template.html",
      favicon: "./src/favicon.png",
    }),
  ],
  output: {
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "esbuild-loader",
            options: {
              minify: true,
              implementation: esbuild,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(csv|tsv)$/i,
        type: "asset/resource",
      },
      {
        test: /.js$/,
        loader: "esbuild-loader",
        options: {
          target: "esnext",
          implementation: esbuild,
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: "esnext",
        implementation: esbuild,
        css: true,
      }),
    ],
  },
  stats: "minimal",
};
