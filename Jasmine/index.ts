import http from 'http';

var server = http.createServer();
server.on('request',(req,res) => {
   res.write("Hello Jesmine");
   res.end();
});

server.listen(8080,'127.0.0.1'); 