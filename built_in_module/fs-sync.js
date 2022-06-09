// File system.
let {readFileSync, writeFileSync} = require('fs')

// Reading a file. 
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first);
console.log(second);

// Writing a file
writeFileSync(
    './content/result-sync.txt',
    `${first}, ${second}`, {flag: 'a'} // Flag to append
);



