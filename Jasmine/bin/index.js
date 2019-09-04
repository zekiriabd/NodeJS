"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
var server = http_1.default.createServer();
server.on('request', (req, res) => {
    res.write("Hello Jesmine");
    res.end();
});
server.listen(8080, '127.0.0.1');
//# sourceMappingURL=index.js.map