//BUILT IN MODULES

//OS MODULES

const os=require('os');

//USER INFO
console.log(os.userInfo());

//METHOD RETURNS THE SYSTEM UPTIME IN SECONDS
console.log(os.uptime());

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);

//PATH MODULE
const path=require('path')

console.log(path.sep);

const filepath=path.join('Lessons','1-global.js')
console.log(filepath);

console.log(path.basename(filepath));

const absolute=path.resolve(__dirname,'Lessons','1-global.js')
console.log(absolute);
