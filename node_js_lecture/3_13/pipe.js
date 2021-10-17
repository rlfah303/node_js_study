const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme.txt', { highWaterMark: 16 });
const zilbStream= zlib.createGzip();
const writeStream = fs.createWriteStream('./writeme.txt.gz');
readStream.pipe(zilbStream).pipe(writeStream);



