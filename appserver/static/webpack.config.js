const path = require("path");
const appName = 'reactapp';


module.exports = (component) => {

  const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: `./src/${component}.app.js`,
    output: {
      path: path.join(__dirname, `./dist/${component}`),
      filename: `${component}.bundle.js`,
      libraryTarget: 'amd', //@todo test
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      contentBase: path.join(__dirname, `dist/${component}`),
      compress: true,
      port: 9000
    },
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: "./resources",
            publicPath: `/static/app/${appName}/dist/${component}/resources`
          }
        }]
      }]
    }
  };

  return config;

};



