/* ====== static class UserManager ===========
   - Connect to database 
   - Methode async:
        - GetUsers
        - GetUsersById 
        - SetUser
   ===========================================*/

   const sql        = require('mssql');
   const myconfig   = require('./config');

var GetUsers = async ()=>{
    try {
        sql.close();
        var con = await new sql.connect(myconfig.conString);
        return await con.request().execute("SP_UESR_SelectAll");
    } catch (err) {
        console.log(err);
        return null;        
    }
}

   
var GetUsersById = async (id : number) =>{
    try {
        sql.close();
        var con = await new sql.connect(myconfig.conString);
        return await con.request()
        .input('id', sql.Int, id)
        .execute("SP_UESR_SelectById");
    } catch (err) {
        console.log(err);
        return null;        
    }
}

   
var SetUser = async (user:any) =>{
    try {
        sql.close();
        console.log(user);        
        var con = await new sql.connect(myconfig.conString);
        return await con.request()
        .input('FirstName', sql.VarChar(150), user.FIRSTNAME)
        .input('LastName' , sql.VarChar(150), user.LASTNAME)
        .execute("SP_USER_Save");
    } catch (err) {
        console.log(err);
        return false;        
    }
};

module.exports = {
    GetUsers,
    GetUsersById,
    SetUser,
}