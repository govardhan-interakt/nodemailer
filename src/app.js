const express = require('express')
const bodyparser = require('body-parser')
const nodemailer = require('nodemailer')
const ether = require('./ether/ether')
const mainController= require('./controller/wallet')
const app = express()
const port =5454

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())
//const dotenv = require('dotenv')
        app.use(express.json())
        app.post('/',async(req,res)=>{
            const {email}=req.body
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: 'royal.goldner36@ethereal.email', // generated ethereal user
                  pass: 'zQSWrwfcUBW1RXjn4R', // generated ethereal password
                },
              });
            
              const msg ={
                from: '"The express app" <theexpressApp@example.com>', // sender address
                to: `${email}`, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
              }
              // send mail with defined transport object
              let info = await transporter.sendMail(msg);
            
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            
        })
        
        app.get('/addr/:coin', mainController.createWallet);
        app.get('/balance/:coin/:address', mainController.getWalletBalances)
        



app.listen(port,()=>console.log(`listening at http://localhost:${port}`))