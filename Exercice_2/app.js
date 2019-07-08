var https = require("https");
https.get("https://randomuser.me/api/",(res) =>{
    var strJson = "";
    res.on('data',(_data)=>{
        strJson += _data;
    });
    res.on('end',()=>{
        var allData = JSON.parse(strJson);
        console.log("gender = " + allData.results[0].gender);
        console.log("email = " + allData.results[0].email);
        
    });
    
});