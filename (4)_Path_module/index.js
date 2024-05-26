import path from 'path'

// console.log(path);


const mytext = './Text_file/Text.txt';
console.log(path.dirname(mytext));
console.log(path.extname(mytext));
console.log(path.basename(mytext));


// file all info
console.log(path.parse(mytext));
