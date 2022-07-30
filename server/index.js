const express = require('express')
const app = express()
const path = require("path")
const port = 3001

app.get('/api/', (req, res) => {
  res.json({ message: 'Hello World!'});
})

app.use(express.static(path.resolve(__dirname, "./public/")));

app.use("*", (req, res) => {
    const dir = path.resolve(__dirname, "./public/", "index.html");
    res.sendFile(dir);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})