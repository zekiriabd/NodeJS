"use strict";
var http = require('http');
var fs = require('fs');
var NAME = "zekiri abdelali";
http.createServer(function (res) {
    fs.readFile('index.html', 'utf8', function (data) {
        data = data.replace("{{NAME}}", NAME);
        res.end(data);
    });
}).listen(8080, '127.0.0.1');
