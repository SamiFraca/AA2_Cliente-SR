module.exports = {
    chainWebpack: config => {
      config.module
        .rule('chartjs')
        .test(/\.js$/)
        .include.add(/node_modules[\\/]chart.js/)
        .end()
        .use('babel')
        .loader('babel-loader')
        .end();
    }
  };
  