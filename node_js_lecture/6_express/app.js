const express = require('express');

const app = express();

// port 를 속성/변수로 지정
app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.send("hello express");
});

app.listen(app.get('port'), () => {
    console.log('express 실행')
});