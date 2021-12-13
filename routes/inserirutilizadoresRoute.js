const express= require('express')
const inserirutilizadoresRoute= express.Router()
const connection = require('../dbconnect')

inserirutilizadoresRoute.post('/',(req,res)=>{
  console.log(req.body)
    connection.query(
      'INSERT INTO utilizadores (nomeutilizador,moradarua,moradanumero,datanascimento,telemovel,email,idtipo) VALUE(?,?,?,?,?,?,?)',
    [req.body.nomeutilizador, req.body.moradarua, req.body.moradanumero, req.body.datanascimento, req.body.telemovel, req.body.email, req.body.idtipo],
    (err,result)=>
    {
    if(err){
      console.log(err)
    }
      else{
        res.json(result)
      }
      console.log(result)
    })
    
    

})

module.exports=inserirutilizadoresRoute