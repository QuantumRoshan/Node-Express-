// FS MODULE(SYNC)
const {readFileSync, writeFileSync}=require('fs')

writeFileSync('./Lessons/fsmodule/demofile.txt', 'This is a file', {flag:'a'})

const readFile=readFileSync('./Lessons/fsmodule/demofile.txt','utf-8')
console.log(readFile);

// FS MODULE(ASYNC)

const {readFile, writeFile}= require('fs');

readFile('./Lessons/fsmodule/p.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    const first=res
    readFile('./Lessons/fsmodule/s.txt','utf-8',(err,res)=>{
        if(err){
            console.log(err);
            return
        }
        const second=res
        writeFile('./Lessons/fsmodule/p+s.txt.txt',`${first},${second}`,(err,res)=>{
            if(err){
                console.log(err);
                return
            }
            const result=res
            return(result);
            
        })
    })  
})

//USING PROMISE

//ONE WAY:promisify is used to convert the callback-based readFile and writeFile functions into promise-based functions.

// const { promisify } = require('util');

// const readFilePromise = promisify(readFile);
// const writeFilePromise = promisify(writeFile);

function readFilesPromise(path,option){
    return new Promise((resolve,reject)=>{
        readFile(path,option,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


function writeFilesPromise(path,content,flag){
    return new Promise((resolve,reject)=>{
        writeFile(path,content,flag,(err)=>{
            if(err){
                reject(err)
            }else{
                resolve('Write successfully')
            }
        })
    })
}

async function final(){
    try{
    const firstFile= await readFilesPromise('./Lessons/fsmodule/s.txt','utf-8')
    const secondFile= await readFilesPromise('./Lessons/fsmodule/s.txt','utf-8')
    await writeFilesPromise('./Lessons/fsmodule/p+s.txt.txt',`${firstFile},${secondFile}`,{flag:'a'})
    }catch(err){
        console.error(err);
    }
        
}


final().then((result)=>{
    console.log(result);
}).catch(err=>{
    console.log(err);
})