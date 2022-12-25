//导入dateFormat方法
//dt 2022-11-05T22:58:49.525Z
//YYYY-MM-DD HH:MM:SS
const Time = require('./date')

const dt = new Date();
const newDT = Time.dateFormat(dt);
console.log("newDt", newDT);