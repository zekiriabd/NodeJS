var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();

var swaggerUi       = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');




// Users / getAllUsers / createUser
var GetAllUsers = function (req, res, next) {
    const data = [{ID: 1,Name:'Zekiri',Age:40},{ID: 2,Name:'Aloui',Age:38},{ID: 3,Name:'Rahich',Age:20}];
    res.json(data);  
};

var CreateUser = function (req, res, next) {
    console.log( "Name = " + req.body.name);
    console.log( "Age = "  + req.body.age);
};

router.route('/users').post(CreateUser).get(GetAllUsers);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended :false }), router);
app.listen(8080,'127.0.0.1'); 