const express = require('express');
const path = require('path');

const app = express();

// port 를 속성/변수로 지정
app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    //res.sendFile('./index.html');
});

app.listen(app.get('port'), () => {
    console.log('express 실행')
});