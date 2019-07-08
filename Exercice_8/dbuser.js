var sql        = require('mssql');
var myconfig   = require('./config');



// User / getAllUsers / createUser
var getAllUsers = function (req, res, next) {
    sql.close();
    var con = new sql.connect(myconfig.conString,(err)=>{
        if (err){
            res.json(err);  
        }
        else{
            con.request()
           .input('IDvideo', sql.Int, 3 )
           .execute("SP_VIDEO_SelectRow", (err,data)=>{
                if (err){
                    res.json(err);  
                }
                else{
                    res.json(data.recordsets);  
                }
            });

            /*con.request().execute("SP_TEACHER_SelectAll", (err,data)=>{
                if (err){
                    res.json(err);  
                }
                else{
                    res.json(data.recordsets);  
                }
               });

             con.query("SELECT * FROM VIDEO" , (err,data)=>{
                if (err){
                    res.json(err);  
                }
                else{
                    res.json(data);  
                }
            });*/
        }
    });
};

var createUser = function (req, res, next) {
    console.log( "Name = " + req.body.name);
    console.log( "Age = "  + req.body.age);
};

module.exports = {
    createUser,
    getAllUsers,

}
