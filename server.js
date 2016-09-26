var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
    return false;
  }
  console.log('Listening at http://localhost:8080');
});