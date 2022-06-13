// This code create big file
const {writeFileSync} = require('fs')

module.exports.createBigFile = (path) => {
    for (let i = 0; i < 100000; i++ ) {
         writeFileSync('./content/big-file.txt', `hello world ${i}\n`, {flag: 'a' });
    }
}

module.exports.createBigFile('../content/big-file.txt');
