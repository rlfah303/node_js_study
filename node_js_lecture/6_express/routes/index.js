const express =require('express');
const { appendFile } = require('fs');
const path = require('path');
const router = express.Router();
const app = express();
//GET router

app.use(express.static('public'));

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

router.post('/',(req,res)=>{
    res.send('post index')
});

module.exports = router;

