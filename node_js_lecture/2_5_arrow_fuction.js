// //중괄호 다음 바로 리턴이 나오면 생략 가능
// function add1(x,y){
//     return x+y;
// }

// const add2 = (x,y) =>{
//     return x+y;
// }

// const add3 = (x,y) => x+y;

// const add4 = (x,y) => (x+y);

// add1(0,1);
// add2(0,2);
// add3(0,3);
// add4(0,4);

// //객체 리턴 할때는 소괄후 필수
// const obj =(x,y) =>{
//     return {x,y}
// };

// const obj2 = (x,y) => ({x,y});

//fuction 이 살아남은 이유: fuction은 자신만의 this를 받음 vs 화살표는 부모의 this를 물려 받음

var relationship1 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){
        // var that =this;
        this.friends.forEach(function (friend) {
            console.log(this.name, friend);
        });
    },
};

const relationship2 ={
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends(){
        this.friends.forEach(friend =>{
            console.log(this.name, friend);
        });
    },
};
relationship1.logFriends()
relationship2.logFriends()


