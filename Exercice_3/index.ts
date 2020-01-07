var http = require('http');
var express = require('express');
var app = express();

app.use((req,res,next)=>{
   res.status(200).json({
       message:'My first Api Rest'
   });
});


var server = http.createServer(app);
server.listen(8081,'127.0.0.1'); 