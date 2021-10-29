const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('<h1>Hello Node<h1>')
})

    .listen(8080,()=>{
        console.log('8080번 포트에서 대기중')
});

server.on('error', (error)=>{
    console.error(error);
});

