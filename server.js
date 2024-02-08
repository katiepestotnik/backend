require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT

//middleware
app.use(cors('*'))
//might be redundant 
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`<h1>landing page</h1>`)
})

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`)
})