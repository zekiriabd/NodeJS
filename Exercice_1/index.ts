//var http = require('http');
import * as http from "http";
var fs = require('fs');
const NAME = "zekiri abdelali";
http.createServer((res:http.Response) => {
    fs.readFile('index.html','utf8',(data:any)=>{
        data = data.replace("{{NAME}}" , NAME);
        res.end(data);
    });
    
}).listen(8080,'127.0.0.1'); 
