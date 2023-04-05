const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  publicPath:'./',
    devServer:
    {
      proxy: {
        '/api': {
          target: 'https://service-o15lm07j-1300177834.cd.apigw.tencentcs.com/release/',
          changeOrigin: true,
          secure: false,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
})