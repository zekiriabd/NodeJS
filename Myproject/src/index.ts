import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";


var GetUsers = async ()=>{
    createConnection().then(async c => {
        console.log("Loading users from the database...");
        const users = await c.manager.find(User);
        console.log("Loaded users: ", users);
    }).catch(error => console.log(error));    
}

var GetUsersById = async (user_id : number) =>{
    createConnection().then(async c => {
        let dbuser = c.getRepository(User);
        const users = await dbuser.findOne({id : user_id});
        console.log("Loaded users: ", users);
    }).catch(error => console.log(error));    
}

var SetUser = async (_user:any)  =>{
    createConnection().then(async c => {
        console.log('111111111');
        console.log(_user);
        console.log('222222');
        let dbuser = c.getRepository(User);
        console.log('33333');
        await dbuser.save(_user);
        console.log('444444');
    }).catch(error => console.log(error));    
}

GetUsers();
//GetUsersById(4);

//SetUser({ id: 6, firstName: 'kkkkkkkkkkkk', lastName: 'kkkkkkkkkkkkkkkk', age: 6666 });

module.exports = {
    GetUsers,
    GetUsersById,
    SetUser,
}
