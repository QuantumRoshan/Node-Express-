const http= require('http')

const server =http.createServer((req,res)=>{
    console.log(req.url);
    res.end('Hi')
}).listen(5000)