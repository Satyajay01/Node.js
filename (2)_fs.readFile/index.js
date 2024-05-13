const fs = require('fs');


// 1 method synchronous---
const text1 =fs.readFileSync('./text.txt','utf-8');
console.log(text1)



// 2 method asynchronous---
fs.readFile("text.txt",'utf-8',(err, text2)=>{
    console.log(text2)


    //only time checking purpose
    const t1 = performance.now();
    console.log("time checking",t1)
})
