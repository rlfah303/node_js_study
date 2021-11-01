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
// const fs= require('fs');

// setInterval(()=>{
//     fs.unlink('./abcd.js',(err)=>{
//         if (err){
//             console.error(err);
//         }
//     });
    
// },1000);


//모든에러 처리
//콜백 함수의 동작 보장이안됨
//에러 기록용

process.on('uncaughtException',(err)=>{
    console.error('예기치못한 에러', err);
});

setInterval(()=>{
    throw new Error('서버를 고장내주마');
},1000);

setTimeout(()=>{
    console.log('실행됩니다');
},2000);

