const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/products', createProxyMiddleware({ target: 'http://product-service:3000', changeOrigin: true }));
app.use('/orders', createProxyMiddleware({ target: 'http://order-service:3000', changeOrigin: true }));
app.use('/customers', createProxyMiddleware({ target: 'http://customer-service:3000', changeOrigin: true }));

app.listen(8000, () => {
  console.log('API Gateway running on port 8000');
});
