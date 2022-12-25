const express = require("express");

const router = express.Router();

const sum = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    //result = result + i; 从1加到15
    result += i;
  }
  return result;
};
// for of 用array.from(array(n).keys())创建array，先定义result为0
const sum2 = (n) => {
  let result = 0;
  console.log("n", typeof n);
  //'100'+1 = 1001
  let number = Number(n) + 1;
  console.log("arr", Array.from(Array(number).keys()));
  //[1, 2, 3, ...n] array.from迭代器把string转化成number
  let arr = Array.from(Array(number).keys());
  //for(let i=0;i<arr.length;i++) 拿index
  //拿到array的每一个value
  for (let value of arr) {
    result += value;
  }
  return result;
};
//console 6 1+2+3
  const res = sum(3)
  console.log(res);

router.get("/sum", (req, res) => {
  const number = req.query.number;
  console.log("number", number);
  const result = sum2(number);
  res.send({
    msg: "get secceed",
    data: `sum of 1-${number} is ${result}`,
  });
});

module.exports = router;
