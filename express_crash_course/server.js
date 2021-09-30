const express = require('express');
const app =express()


app.use(express.static("public"))
// by defalut cant access to the body and this is the middleware for it
// allowing access information from forms
app.use(express.urlencoded({extended: true}))
//for posting json
app.use(express.json()) 
app.set("view engine",'ejs') 


// app.get('/',logger,(req,res)=>{ 
//     res.render("index")

//     // res.status(500).send("hi")

// })


const userRouter = require('./routes/users')

app.use('/users',userRouter)

//middle ware

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

//local 3000 port
app.listen(3000) 