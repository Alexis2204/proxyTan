const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()
const app = express();

const options = {
  target: 'https://plan-tan.fr/',
  changeOrigin: true,
  pathRewrite: {'^/api' : ''},
  onProxyReq: function(proxyReq, req, res) {
    console.log(`Request made to target: ${proxyReq.path}`);
  }
};

app.use(cors({ origin: '*'}));
app.use(express.static('dist'));
app.use('/api', createProxyMiddleware(options));

app.listen(process.env.PORT, () => {
  console.log('Proxy server running on port 3000');
});
