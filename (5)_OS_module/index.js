// os module: provides operating system-related utility methods and properties.


import os from "os";

// console.log(os)


console.log(os.freemem()); //system memory in bytes 
console.log(os.machine()); //system  architecture
console.log(os.totalmem()); // Ram size
console.log(os.hostname()); // username
console.log(os.userInfo()); // user info

console.log(os.cpus()); // complete CPU info

