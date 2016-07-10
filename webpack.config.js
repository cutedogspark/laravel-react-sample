// webpack.config.js

module.exports = {
  entry: './resources/assets/javascripts/entry.js',
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
    }
};
