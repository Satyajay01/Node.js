import path from 'path'

// console.log(path);


const mytext = './Text.txt';
const a='.txt';
const extenstion = path.extname(mytext);

if (extenstion===a) {
    console.log("this is text")
    console.log(extenstion)
}
else{
    console.log('this is not text file')
}

