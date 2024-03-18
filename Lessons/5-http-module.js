const http=require('http')

// const server= http.createServer((req,res)=>{
//     // res.write('HEllo World')
//     // res.end()
//     console.log(req);
// })

// server.listen(5000)


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('this is home page')
    }
    else if(req.url==='/about'){
        res.end('This is about page')
    }
    else if(req.url==='/youtube'){
        res.writeHead(302, {
            'Location': 'https://www.youtube.com/'
        });
        res.end()
    }
    else{
        res.end(`
        <h1>OPPS</h1>
        <p>Page not found</p>
        <a href='/'>Return Home</a>
        `)
    }
})
server.listen(5000,()=>{
    console.log('Running');
})


//OR using events emitter

const server2=http.createServer()

server2.on('request',(req,res)=>{
    res.end('hello world')
}).listen(4000)