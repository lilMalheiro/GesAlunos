const express= require('express')
const formdataRoute= express.Router()
const connect = require('../dbconnect')

formdataRoute.get('/',()=>{
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