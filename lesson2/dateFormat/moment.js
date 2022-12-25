// 创建package.json npm init

//npm i 安装package.json底下所有的包
//npm i 包名称

//开发需要用，上线后不需要的包可以装在devDependency,比如nodemon
//npm i nodemon -D
// npm i nodemon --save--dev

//导入需要的包
const monent = require("moment");

const dt = moment().format("YYYY-MM-DD HH:mm:ss");
console.log("dt", dt);
//dt 2022-11-06 11:25:51