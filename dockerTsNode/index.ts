var express         = require('express');
var router          = express.Router();
var app             = express();

app.get( "/getmessage", ( _req: any, res ) => {
  res.send( "Hello world!" );
} );


app.listen(8089,()=> { console.log('http://localhost:8089/getmessage')}); 
