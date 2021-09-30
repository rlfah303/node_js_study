const express = require('express');
const app =express()


app.set("view engine",'ejs') 


app.get('/',logger,(req,res)=>{ 
    res.render("index",{text: "World"})

    // res.status(500).send("hi")

})


const userRouter = require('./routes/users')

app.use('/users',userRouter)

//middle ware

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

//local 3000 port
app.listen(3000) 