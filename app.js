const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT


app.set('view engine', 'hbs')
hbs.registerPartials(__dirname +'/views/partials')


app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index',{
    nombre:'Merzi Caniz'
  
  })
})

app.get('/carro-disel', (req, res) => {
  res.render('carro-disel', {
    
  });
});

app.get('/carro-gasolina', (req, res) => {
  res.render('carro-gasolina', {

  });
});

app.get('/carros-electricos', (req, res) => {
    res.render('carros-eketricos', {
  
    });
  });
  
app.listen(port,() =>{
  console.log(`Example app listening at http://localhost:${port}`);
})