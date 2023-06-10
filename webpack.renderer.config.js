module.exports = {
  entry: './renderer.js', // Entry file for the renderer process
  output: {
    path: __dirname + '/dist',
    filename: 'renderer.bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Add any other required presets
          },
        },
      },
    ],
  },
};
