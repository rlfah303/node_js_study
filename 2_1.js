// 3 -> 2 -> 1
// function first(){
//     second();
//     console.log("1");
// }

// function second(){
//     third();
//     console.log("2");
// }

// function third(){
//     console.log("3");
// }

// first();


// 시작 -> 끝 -> 3초후 실행
// function run(){
//     console.log("3초 후 실행");
// }

// console.log("시작");
// setTimeout(run,3000);
// console.log("끝");


// run run -> one more -> hi -> wow
function oneMore(){
    console.log('one more');
}

function run(){
    console.log('run run');
    setTimeout(()=> {
        console.log('wow');
    },0)
    new Promise((reslove)=>{
        reslove('hi');
    })
        .then(console.log);
    oneMore();
}
setTimeout(run,5000)

