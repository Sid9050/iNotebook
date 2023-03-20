const connectToMongo=require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use('/api/a')

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})