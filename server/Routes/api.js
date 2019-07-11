const express = require( 'express' )
const app=express()
const mongoose = require( 'mongoose' )
const router = express.Router()
const request=require('request')
const City= require('../model/City')

mongoose.connect( 'mongodb://localhost/citys', { useNewUrlParser: true } )
const key='1d720ee4821f446bb92103745191007'
 


router.get('/city/:cityName', function(req,res){
    let city=req.params.cityName
   request(`http://api.apixu.com/v1/current.json?key=${key}&q=${city}`,function(err,r,body){
const data=JSON.parse(body)
    const info={
    name: data.location.name,
    updatedAt: data.current.last_updated,
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    conditionPic: data.current.condition.icon
} 

//new City(info).save()
res.send(info)
})


})

router.get('/cities',function(req,res){
    City.find({},function(err,data){res.json(data)})
})

router.post('/city', function(req,res){
    let info=req.body
     new City(info).save()
    res.end('saved')
})

router.delete('/city/:cityName',function(req,res){
    let name=req.params.cityName
    City.findOneAndDelete({'name':name},function(err,x){
        res.json(x)
    })
})



module.exports = router
