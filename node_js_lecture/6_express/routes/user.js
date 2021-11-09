const express =require('express');

const router = express.Router();

//GET router
router.get('/',(req,res)=>{
    res.send("Hello Users");
});

router.get('/:id',(req,res)=>{
    res.send( `${req.params.id} 번 유저님 반갑습니다.`); 
});

module.exports = router;

// app.get('/category/:name',(req,res) => {
//     res.send(`hello ${req.params.name}`); 
// });