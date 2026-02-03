require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chandan',(req,res) => {
    res.send("chandankayoutube channel ka link ha gi ")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
