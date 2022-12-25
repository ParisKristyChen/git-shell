//导入fs模块
const fs = require("fs");
//读取成功，err为null
//读取失败，err为对象，data是undefined
// array[]
fs.readFile("./files/1.txt", 'utf8',function(err,data) {
  if(err){
    return console.log("err",err);
  }else {
    console.log("read file succeed", data);
  }
  
})