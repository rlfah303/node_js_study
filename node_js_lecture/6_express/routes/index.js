const express =require('express');
const path = require('path');
const router = express.Router();

//GET router

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'));
});

router.post('/',(req,res)=>{
    res.send('post index')
});

module.exports = router;

