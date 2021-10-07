const util = require('util');
const crypto = require('crypto');

//deprecated
const donTuseMe = util.deprecate((x, y)=>{
    console.log(x + y);
}, " 이 함수는 deprecated 되었으니 사용 ㄴㄴ");
donTuseMe(1,2);

//promisify (callback 을 promise로 바꾸기)
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error)=>{
        console.error(error);
    });
