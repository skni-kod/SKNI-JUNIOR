module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/SKNI-JUNIOR/'
      : '/',

    transpileDependencies: [
      'vuetify'
    ]
}
