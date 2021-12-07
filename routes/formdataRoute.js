const express= require('express')
const formdataRoute= express.Router()
const connection = require('../dbconnect')

formdataRoute.get('/',(req,res)=>{
    connection.query('SELECT * FROM tipos',(err,result)=>
    {
    if(err){
      console.log('ops... parece que deu erro')
    }
      else{
        res.json(result)
      }
    
    })
})

module.exports=formdataRoute