/* ============== Server ===================
- Import all Controller
- Create server Api Localhost:8080/Controller/Action/Param 
  ========================================== */

  var express     = require('express');
import UserController from './src/controllers/UserController';




const app  = express();
const IP   = '127.0.0.1';
const PORT = 8080;

app.use(express.json());

UserController(app);

app.listen(PORT,IP); 