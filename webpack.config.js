const path = require('path');
module.exports = {
    entry: {
        main: './src/main.ts',
        Square: './src/square.ts',
        pathfinding: './src/pathfinding.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    watch: true
}