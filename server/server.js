const bodyParser = require ('body-parser');
const express = require ('express');
const morgan = require ('morgan');
const jwt = require ('jsonwebtoken');
const fs = require ('fs');
const historyApiFallback = require ('connect-history-api-fallback');
const mongoose = require ('mongoose');
const path = require ('path');
const webpack = require ('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware');
const webpackHotMiddleware = require ('webpack-hot-middleware');

const config = require ('../config/config');
const webpackConfig = require ('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;


// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect (isDev ? config.db_dev : config.db, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express ();
const apiRoutes = express.Router ();

/** Seting up server to accept cross-origin browser requests */
app.use (function (req, res, next) { //allow cross origin requests
  res.setHeader ("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header ("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header ("Access-Control-Allow-Credentials", true);
  next ();
});

app.use (bodyParser.urlencoded ({extended: true}));
app.use (bodyParser.json ());

app.use (morgan ('dev'));

app.use ('/api', apiRoutes);
// API routes
require ('./routes') (apiRoutes);


if (isDev) {
  const compiler = webpack (webpackConfig);

  app.use (historyApiFallback ({
    verbose: false
  }));

  app.use (webpackDevMiddleware (compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve (__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use (webpackHotMiddleware (compiler));
  app.use (express.static (path.resolve (__dirname, '../dist')));
} else {
  app.use (express.static (path.resolve (__dirname, '../dist')));
  app.get ('*', function (req, res) {
    res.sendFile (path.resolve (__dirname, '../dist/index.html'));
    res.end ();
  });
}

app.listen (port, '127.0.0.1', (err) => {
  if (err) {
    console.log (err);
  }

  console.info ('>>> 🌎 Open http://127.0.0.1:%s/ in your browser.', port);
});

module.exports = app;