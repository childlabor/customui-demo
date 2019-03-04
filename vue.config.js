// webpack配置项 cover
module.exports = {
  lintOnSave: false, // eslint
  devServer: {
    proxy: 'http://localhost:8888',
    port: 8888
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/'
}