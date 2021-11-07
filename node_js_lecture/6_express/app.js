const express = require('express');
const path = require('path');


// express 순서 app -> app.set => 공통 middleware => error middleware
const app = express();


// port 를 속성/변수로 지정
app.set('port', process.env.PORT || 3000);

//middleware
app.use((req,res,next)=>{
    console.log("모든요청에 실행하고싶어요");
    next();

//에러가 발생하면 error middleware로 넘겨줌
// }, (req,res,next)=>{
//     try{
//         console.log(adasdas);
//     }catch(error){
//         next(error);

//     }
});

app.get('/',(req,res)=>{
    //res.json({hello:'zddd'});
    res.sendFile(path.join(__dirname,'index.html'));
    //res.sendFile('./index.html');
});

app.post('/',(req,res)=>{
    res.send('hello express');
});

//wild card router (주로 맨 아래에 위치)
app.get('/category/:name',(req,res) => {
    res.send(`hello ${req.params.name}`); 
});

// app.get('*',(req,res) => {
//     res.send(`hello everything`);
// });

app.use((err,req,res,next)=>{
    console.error(err);
    res.send('에러가 발생')
})

app.listen(app.get('port'), () => {
    console.log('express 실행')
});