export default class UserDto {
    public getDbUser():string[] 
    {
         /*الاتصال بالقاعدة و جلب البيانات*/
         const result = [ "Zekiri", "Abdelali" ];
         return result;
    }
    constructor(){

    }
}