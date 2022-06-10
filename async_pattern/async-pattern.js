const {time} = require('console');
const {readFile, writeFile} = require('fs').promises;
// const getText = (path) => {
//    return new Promise((resolve, reject) => {
//    readFile(path,'utf8', (err, data) => {
//        if (err){
//          reject(err);
//        }else{
//         resolve(data); 
//        }
//        })
//    })
//}
// getText('./built_in_module/content/first.txt')
//    .then((result) => console.log(result))
//    .catch((err) => console.log(err));

const util = require('util');

const start = async () => {
    try{
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        console.log(first, second);
        writeFile('./content/async-patterns-result.txt', `${Date.now()}`, {flag: 'a'});
    }catch (error) {
        console.log(error);
    }
};

start();
