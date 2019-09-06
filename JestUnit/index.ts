import http from 'http';

http.createServer((req,res) =>{
    res.end("Hello");
}).listen(8082, '127.0.0.1');
