const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify the entry point of your application
  output: {
    filename: 'bundle.js', // Specify the output bundle file
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
