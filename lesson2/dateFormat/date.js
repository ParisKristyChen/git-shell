//console.log("date", new Date());  2022-11-05T22:58:49.525Z
//YYYY-MM-DD HH:MM:SS datetime 2022-10-6 10:9:38
//2022-10-06 10:28:41

//定义格式化时间的方法
function dateFormat(b){
  const dt = new Date(b);
  const y = dt.getFullYear();
  const m = padZero(dt.getMonth());
  const d = padZero(dt.getDate());
  const hh = padZero(dt.getHours());
  const mm = padZero(dt.getMinutes());
  const ss = padZero(dt.getSeconds());
  //'hell'+y+'world'
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

//检查是否需要补0
function padZero(n) {
  return n < 10 ? `0${n}` : n;
}
//const res = padZero(55);
//console.log("res", res);
//dateFormat("date");

//date1 2022-11-05T23:49:31.11
//date2 2022-11-04T23:49:31.11
console.log("date1", new Date());
const yesterday = new Date().valueOf() - 1000 * 60 * 60 * 24;
console.log("date2", new Date(yesterday));
module.exports = {
  dateFormat,
};