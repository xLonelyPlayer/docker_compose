const express = require('express')
const app = express()
const path = require("path")
const port = 3001

const { asyncFunction } = require('./lib/mariadb');

app.get('/api/', async (req, res) => {
  const rows = await asyncFunction();
  res.json({ message: 'Hello World!', rows });
})

app.use(express.static(path.resolve(__dirname, "./public/")));

app.use("*", (req, res) => {
    const dir = path.resolve(__dirname, "./public/", "index.html");
    res.sendFile(dir);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})