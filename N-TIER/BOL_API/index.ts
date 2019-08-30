var bodyParser  = require('body-parser');
var express     = require('express');
//var routes    = require('./src/routes/myRoutes'); 
import {routes} from './src/routes/myRoutes';


const app  = express();
const IP   = '127.0.0.1';
const PORT = 8080;

routes(app);
app.listen(PORT,IP); 


