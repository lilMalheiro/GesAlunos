const { prototype } = require('events')

const express = require('express')//const = constante
const app = express()// instanciar um objecto e classe 
const path = require('path')
const connect = require('./dbconnect') 

app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))
 
app.get('/', function (req, res) {//vai buscar o objecto app e faz a proposta e responde 
  res.sendFile(path.join(__dirname,'/public/index.html'))
})

/*app.get('/:nome', function (req, res) {
  //  res.send(`algures por aqui ${req.params.nome}`)
 })*/
 
const port = 3000;
app.listen(port,function(){
  console.log(" Listenning on port: " + port)
})
