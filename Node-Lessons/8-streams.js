//STREAMS

const {createReadStream}=require('fs');

const stream = createReadStream('BIG-filename')


// default 64kb in one chunk
// lastbuffer - remainder
//highWaterMark -cotrol size
// const stream = createReadStream('filename',{highWaterMark :90000})
// const stream = createStream('filename', {encoding:'utf8}) 


stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})