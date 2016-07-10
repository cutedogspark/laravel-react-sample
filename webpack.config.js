// webpack.config.js
var webpack = require("webpack");

module.exports = {
  entry: [
        "./resources/assets/javascripts/entry.js",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/dev-server"
  ],
  output: {
    path: __dirname ,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
                  {
                    test: /\.jsx?$/,   
                    exclude: /node_modules/, 
                    loader: "babel", 
                    query:
                      { 
                        cacheDirectory: true,
                        presets:['react', 'es2015']
                      }
                  }
                  
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
