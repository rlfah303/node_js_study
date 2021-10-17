// error 잡는 경우들

//에러가 발생할 곳은 try catch로 감쌈
// setInterval(()=>{
//     console.log('시작');
//     try{
//         throw new Error('고장내기');
//     } catch(err){
//         console.error(err);
//     }
// },1000);

//콜백 함수에서 에러 객체 제공
const fs= require('fs');

setInterval(()=>{
    fs.unlink('./abcd.js',(err)=>{
        if (err){
            console.error(err);
        }
    });
    
},1000);