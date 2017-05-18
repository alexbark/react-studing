const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, './src'),
    entry: {
       app: './app.js',
    },

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                 presets: ['react', 'es2015']
             }
        },
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        { test: /\.css$/, loader: "css-loader",
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ]
    },
    devtool: "source-map",
    plugins: [
      new UglifyJSPlugin({
         sourceMap: true
      })
    ]
};
