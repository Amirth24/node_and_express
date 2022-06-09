const path = require('path');

console.log(path.sep);

// Path join 

let filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

// Base name 
const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname,"content", "subfolder","test.txt"); // Abs path of test.txt
console.log(absolute)