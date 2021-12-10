const express= require('express')
const getdataRoute= express.Router()
const connection = require('../dbconnect')

getdataRoute.get('/',(req,res)=>{
    /*connection.query('SELECT * FROM utilizadores',(err,result)=>
    {
    if(err){
      console.log('ops... parece que deu erro')
    }
      else{
        res.json(result)
      }
    
    })*/
    console.log(req.body.texto)
    console.log(req.body.data)
    res.json(res({okay}))
})

module.exports=getdataRoute