const express = require('express');
const path = require('path');

const app = express();

app.use((req,res,next)=>{
    console.log("모든요청에 실행하고싶어요");
    next();
})
// port 를 속성/변수로 지정
app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    //res.sendFile('./index.html');
});

app.post('/',(req,res)=>{
    res.send('hello express');
});

app.listen(app.get('port'), () => {
    console.log('express 실행')
});