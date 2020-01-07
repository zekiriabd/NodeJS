

let http = require('http');
let server = http.createServer();

server.on('request',(request,response) => {
    response.write("ffffffffffff");
    response.end();
    
});

server.listen(8080);