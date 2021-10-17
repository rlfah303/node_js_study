setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('고장내기');
    } catch(err){
        console.error(err);
    }
},1000);