module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'jss_nano',
      externals: {
        react: 'React'
      }
    }
  },
  devServer:{
    hot: false
  }
};
