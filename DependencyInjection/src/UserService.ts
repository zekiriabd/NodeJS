import UserDao from "./UserDao";

export default class UserService {

    private oUserDao : UserDao;

    get getUserDao(){
        return this.oUserDao;
    }
    
    set setUserDao(val:UserDao){
        this.oUserDao = val;
    }
    

    public getFullName() : string
    {
        const userinfo = this.oUserDao.getDbUser();
        return userinfo[0] + " _ " + userinfo[1];
    }
}