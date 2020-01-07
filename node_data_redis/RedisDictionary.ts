import  * as redis from "redis";

export class RedisDictionary<K, V>{

     redisDB : redis.RedisClient;
     redisKey: string;
    
    constructor (_redisKey:string)
    {
        this.redisKey = _redisKey;
        this.redisDB = redis.createClient();
    }

    Serialize(obj: any): string
    {
        return JSON.stringify(obj);
    }

    Deserialize(serialized: string)
    {
        return JSON.parse(serialized);
    }

    findAll() {
        return new Promise((resolve) =>{
            this.redisDB.hgetall(this.redisKey, (err, rows) =>
            { 
                const content = rows === null 
                                     ? [] 
                                     : Object.values(rows).map(h => JSON.parse(h + ""));
                resolve(content); 
            });
        });
    }

    findById(key: K) {
        return new Promise((resolve) =>{
            this.redisDB.hget(this.redisKey, this.Serialize(key), (err, row)=>{ 
                const result = JSON.parse(row);
                resolve(result); 
            });
        });
    }

    ContainsKey(key: K){
        return new Promise((resolve) =>{
            this.redisDB.hexists(this.redisKey, this.Serialize(key), (err, result)=>{ 
                resolve(Boolean(result)); 
            });
        });
    }
    
    Remove(key: K){
        return new Promise((resolve) =>{
            this.redisDB.hdel(this.redisKey, this.Serialize(key), (err, result)=>{ 
            resolve(Boolean(result)); 
        });
    });
    }

    Add(key: K, value: V)
    {
        this.redisDB.hset(this.redisKey, this.Serialize(key), this.Serialize(value));
    }

    Clear()
    {
        this.redisDB.del(this.redisKey);
    }
}
