require('dotenv').config()
const express = require('express')
const app = express()
const port = 4001
app.get('/', (req, res) => {
  res.send('Hello dfdfdWorld!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
