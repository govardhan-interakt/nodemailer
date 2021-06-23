const express = require('express')
const cron = require('node-cron')
const ether = require('./ether')
//const usdt = require('./usdt')
let shell = require('shelljs')
app = express()
const port =4545
cron.schedule('* * * * *',function(){

    if(shell.exec('node ether.js').code !==0){
        console.log('result',result)
        //console.log('Result',Result)
        console.log('something wrong')
    }
})





  app.listen(port,()=>console.log(`listening at http://localhost:${port}`))