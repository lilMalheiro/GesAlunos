const { prototype } = require('events')
const express = require('express')//const = constante
const app = express()// instanciar um objecto e classe 
const path = require('path')

app.use(express.static('./public'))
 
app.get('/', function (req, res) {//vai buscar o objecto app e faz a proposta e responde 
  res.sendFile(path.join(__dirname,'/public/index.HTML'))
})

/*app.get('/:nome', function (req, res) {
  //  res.send(`algures por aqui ${req.params.nome}`)
 })*/
 
const port = 3000;
app.listen(port,function(){
  console.log(" Listenning on port: " + port)
})
