/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function resolve(directory) {
  return path.resolve(__dirname, directory);
}

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          //  "^/tyyjzl": ""
        }
      }
    }
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    }
  }
};
