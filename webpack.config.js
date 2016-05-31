module.exports = {
  entry: "./Main.js",
  output: { 
     filename: "./bundle.js"
  },
    devServer: {
      stats: 'errors-only',
      hot: true,
    },
  module:{
      loaders: [{
         test: /\.js?$/,
         exclude: /node_modules/,
         loader: ['babel'],
         query: {
            presets: ['react', 'es2015']
         }
      }]
 }
}
