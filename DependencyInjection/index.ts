import UserDao from "./src/UserDao";
import UserService from "./src/UserService";


const oUserService : UserService = new UserService();
oUserService.setUserDao = new UserDao();

const name = oUserService.getFullName();

console.log("###############################");
console.log(name);
console.log("###############################");