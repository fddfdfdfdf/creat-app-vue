'use strict';

const paths = require('./paths');
const fs = require('fs');

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

const express = require('express')

module.exports = function(proxy) {
  return {
    compress: true ,
    //不输出启动 log
    noInfo: false,
    historyApiFallback: true,
    hot: true,
    inline: true,
    host,
    overlay: false,
    stats: { colors: true },
    proxy,
    before(app, server) {
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
      app.use('/static',express.static(paths.static));
    }
  };
};
