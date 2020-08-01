module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000'
      }
    }
  },

  // ビルドされた静的ファイルをLaravelの公開ディレクトリに出力します。
  // package.jsonの「build」scriptも変更する必要があることに注意してください。
  outputDir: '../backend/src/public/assets',

  publicPath: process.env.NODE_ENV === 'production' ?
    '../backend/src/public/assets/' :
    '/',

  // 生成されたHTMLファイルの場所を変更する
  indexPath: process.env.NODE_ENV === 'production' ?
    '../../resources/views/app.blade.php' :
    'index.html',

  // sannの取り込み
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/app.scss";',
      },
    },
  },
};