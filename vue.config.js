const path = require('path')

module.exports = {
  // 配置入口
  pages: {
    index: {
      // page的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html输出
      filename: 'index.html'
    }
  },
  // 拓展webpack配置
  chainWebpack: config => {
    // 配置别名
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
          return options
      })
  }
}