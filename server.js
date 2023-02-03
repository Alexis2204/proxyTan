const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

const options = {
  target: 'https://plan-tan.fr/',
  changeOrigin: true,
  onProxyReq: function(proxyReq, req, res) {
    console.log(`Request made to target: ${proxyReq.path}`);
    }
};

app.use(cors({
  origin: '*'
}));
app.use('/', createProxyMiddleware(options));

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
