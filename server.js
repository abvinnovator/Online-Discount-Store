const express = require('express');
const app = express();
const fs = require('fs');

const jsonData = JSON.parse(fs.readFileSync('products.json', 'utf8'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/api/products', (req, res) => {
  res.json(jsonData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});