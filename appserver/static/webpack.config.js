const path = require("path");
const appName = 'reactapp';

module.exports = (temp) => {

  const args = temp.split('.');
  const component = args[0];
  const env = args[1];

  const config = {
    mode: env,
    entry: `./src/${component}.app.js`,
    output: {
      path: path.join(__dirname, `./dist/${component}`),
      filename: `${component}.bundle.js`,
      libraryTarget: 'amd', //@todo test
    },
    resolve: {
      extensions: ['.js', '.jsx', ".ts", ".tsx"],
    },
    devServer: {
      contentBase: path.join(__dirname, `dist/${component}`),
      compress: true,
      port: 9000,
      proxy: {
        '/en-US/splunkd': 'http://localhost:8000'
      }
    },
    module: {
      rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{
          loader: "ts-loader"
        }]
      }, {
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

  if(env === 'development') {
    config.devtool = 'inline-source-map';
  }

  return config;

};



