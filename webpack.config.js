const htmlWebpack = require('html-webpack-plugin');

module.exports = {
  entry : './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: (__dirname + '/dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new htmlWebpack({template: './src/index.html'})
  ]
}
