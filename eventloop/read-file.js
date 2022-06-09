const {readFile} = require('fs');


console.log('Started Program');
console.log('Reading a file \'first.txt\'');
readFile('../built_in_module/content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed Reading the file \'first.txt\' ');
})
console.log('Starting next program');
