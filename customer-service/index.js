const express = require('express');
const app = express();
app.use(express.json());

let customers = [];

app.post('/customers', (req, res) => {
  const customer = req.body;
  customers.push(customer);
  res.status(201).send(customer);
});

app.get('/customers', (req, res) => {
  res.send(customers);
});

app.listen(3000, () => {
  console.log('Customer Service running on port 3000');
});
