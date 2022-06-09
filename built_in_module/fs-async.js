// File system.
const { readFile, writeFile } = require('fs')

// Reading first file. 
readFile(
    './content/first.txt',
    'utf8',
    (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        // success reading file 
        const first = result;
        console.log(result)
        // reading second file
        const content2 = readFile(
            './content/second.txt',
            'utf8',
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // sucess reading second file
                const second = result;
                console.log(result);
                // writing file
                writeFile(
                    './content/result-async.txt',
                    `The result is :${first}, ${second}`,
                    (err, result) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
    
                    }
                )
            }

        )    
        

    });




