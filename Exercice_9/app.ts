//--------------------
var express         = require('express');
var bodyParser      = require('body-parser');
var swaggerUi       = require('swagger-ui-express');
//--------------------
var swaggerDocument = require('./swagger.json');
//var dbuser = require('./dbuser');
var xlsxuser = require('./build/xlsxuser');

var router          = express.Router();
var app             = express();

//---------- User web method --------------------
////router.route('/user/:id').get(dbuser.getUserById);
//router.route('/users').get(dbuser.getUsers);
//router.route('/deluser/:id').get(dbuser.DelUser);
//router.route('/adduser').post(dbuser.AddUser);
//------------------------------------------------

router.route('/users').get(xlsxuser.getuser);


app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.urlencoded({ extended :false }), router);

app.listen(8080,'127.0.0.1'); 
