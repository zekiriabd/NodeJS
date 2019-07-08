
var XLSX = require('xlsx');
var getuser = function (req, res, next) {
    var workbook = XLSX.readFile("file.xlsx");
    var worksheet = workbook.Sheets['Sheet1'];
    
    var col1 = worksheet['A1'];
    var col2 = worksheet['C1'];
    
    var val1 = worksheet['A3'];
    var val2 = worksheet['C3'];

    console.log(col1.v);console.log(val1.v);
    console.log(col2.v);console.log(val2.v);

}

module.exports = {
    getuser,
}