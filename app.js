const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT;


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname +'/views/partials')


app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index')
})

app.get('/carro-disel', (req, res) => {
  res.render('carro-disel')
})

app.get('/carro-gasolina', (req, res) => {
  res.render('carro-gasolina')
})

app.get('/carro-electrico', (req, res) => {
    res.render('carro-electrico')
  })
  
app.listen(port,() =>{
  console.log(`Example app listening at http://localhost:${port}`)
})