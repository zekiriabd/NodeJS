
import * as express1 from "express";
var express         = require('express');
var bodyParser      = require('body-parser');
var router          = express.Router();
var app             = express();
var swaggerUi       = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

// User / getAllUsers / createUser
var getAllUsers = function (req: express1.Request, res: express1.Response, next: express.NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    const usersData = [{ID: 1,Name:'Zekiri',Age:40},{ID: 2,Name:'Aloui',Age:38},{ID: 3,Name:'Rahich',Age:20}];
    res.json(usersData);  
};

var createUser = function (req: express1.Request, res: express1.Response, next: express.NextFunction) {
    console.log( "Name = " + req.body.name);
    console.log( "Age = "  + req.body.age);
};

router.route('/users')
.post(createUser)
.get(getAllUsers);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended :false }), router);
app.listen(8080,'127.0.0.1'); 
