const express = require('express');
const app =express()


app.set("view engine",'ejs') 

app.get('/',(req,res)=>{
    console.log("Here")  
    res.render("index",{text: "World"})

    // res.status(500).send("hi")

})
app.listen(3000) 