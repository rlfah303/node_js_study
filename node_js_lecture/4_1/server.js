const http = require('http');
const fs =require('fs').promises;

const server = http.createServer(async (req,res) => {
    try{
        const data = await fs.readFile('./index.html');
        res.end(data);
    }catch(error){
        res.end(error.message);
    }
    
})

    .listen(8080,()=>{
        console.log('8080번 포트에서 대기중')
});

server.on('error', (error)=>{
    console.error(error);
});

