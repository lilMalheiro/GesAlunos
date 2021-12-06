const express =require('express')
const getCitiesRouter = express.Router()
const connection = require('../dbconnect')


getDistrictRouter.get('/',(req, res)=>{
    connection.query('SELECT Name FROM district',(err,result)=>
    {
    if(err){
      console.log('ops... parece que deu erro')
    }
      else{
        res.json(result)
      }
    
    })
  
  })

  module.exports=getDistrictRouter