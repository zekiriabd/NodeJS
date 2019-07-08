var express         = require('express');
var bodyParser      = require('body-parser');
var router          = express.Router();
var app             = express();
var swaggerUi       = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var sql             = require('mssql');

// User / getAllUsers / createUser
const config = {
    user:'sa',
    password:'talage',  
    server:"DESKTOP-MAGJ7HQ\\SQLEXPRESS", 
    database:'YTEncyclopedia', 
    //options: { trustedConnection: true },
    //port:1433,
    //stream: true,
};


// User / getAllUsers / createUser
var getAllUsers = async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    sql.close();
    //.execute("SP_TEACHER_SelectAll", (err,data)=>{
    var con = await new sql.connect(config,(err)=>{
        if (err){
            res.json(err);  
        }
        else{
            con.request()
            .execute("SP_TEACHER_SelectAll", (err,data)=>{
                if (err){
                    res.json(err);  
                }
                else{
                    res.json(data.recordsets);  
                }
               });
        }
    });
};

var createUser = function (req, res, next) {
    console.log( "Name = " + JSON.stringify(req.body));
};

router.route('/users')
.post(createUser)
.get(getAllUsers);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.urlencoded({ extended :false }), router);
app.listen(8080,'127.0.0.1'); 

