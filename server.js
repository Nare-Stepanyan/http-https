const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const sslOptions = {
  key: fs.readFileSync('localhost.key'),
  cert: fs.readFileSync('localhost.crt')
};

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

https.createServer(sslOptions, app).listen(8000, () => {
  console.log('Server is running on https://localhost:8000');
});
