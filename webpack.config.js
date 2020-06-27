const path = require('path');

module.exports = {
  mode: 'development', // development
  entry: './src/main.ts',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
  },
}