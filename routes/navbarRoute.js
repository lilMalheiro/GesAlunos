const { Router } = require('express')
const express = require ('express')
const app = express('path')
const navbarRoute = express.Router()

navbarRoute.get('/', (req,res)=> {
    res.sendFile(path.join(__dirname, '../public/navbar.html'))
})

module.exports= navbarRoute