const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:4444/', // Replace with your backend URL
      changeOrigin: true,
    })
  );
};