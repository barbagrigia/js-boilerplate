import webpackConfig from "./webpack.config.babel.js"

export default {
  ...webpackConfig,

  // babel-plugin-webpack-loaders requirements
  entry: undefined,
  output: {
    libraryTarget: "commonjs2",
  },
}
