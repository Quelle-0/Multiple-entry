const px2rem = require('postcss-plugin-px2rem');

const postcss = px2rem({
  rootValue: 192,
  // propBlackList:['font-size']
})

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss],
      }
    }
  }
}