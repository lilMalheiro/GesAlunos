const express= require('express')
const getdataRoute= express.Router()
const connection = require('../dbconnect')

getdataRoute.get('/',(req,res)=>{
    connection.query('SELECT * FROM utilizadores',(err,result)=>
    {
    if(err){
      console.log('ops... parece que deu erro')
    }
      else{
        res.json(result)
      }
    
    })
})

module.exports=getdataRoute