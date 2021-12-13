const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('./public'))

app.use(express.urlencoded({extended : true}))
app.use(express.json({extended: false}))


app.use('/navbar',require('./routes/navbarRoute'))
app.use('/formdata',require('./routes/formdataRoute'))
app.use('/utilizador',require('./routes/inserirutilizadoresRoute'))


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
