const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production', // development
  entry: './src/main.ts',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
  },
}