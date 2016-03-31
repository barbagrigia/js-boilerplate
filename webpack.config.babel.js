import webpackEasyConfig from "webpack-easy-config"

export default webpackEasyConfig({
  loaders: {
    css: {
      "css-loader": {
        modules: true,
        localIdentName: "[path][name]--[local]",
      },
      "style-loader": true,
    },
  },
  extract: {
    css: {
      filename: "[name].[hash].css",
      disable: process.argv.indexOf("--dev") > -1,
    },
  },
})
