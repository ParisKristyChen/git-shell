const express = require("express");
//创建路由 status地位
const router = express.Router();

const users = [
  { name: "ben", age: "20" },
  { name: "John", age: "30" },
  { name: "Chris", age: "40" },
  { name: "Jane", age: "50" },
];

router.get("/list", (req, res) => {
  res.send({
    status: 0,
    msg: "get succeed",
    data: users,
  });
});

router.post("/add", (req,res) => {
  const body = req.body;
  console.log('body', body);
  res.send({
    sttus:0,
    msg:'add user succeed',
    data: body,
  });
});
//模块输出=路由器
module.exports = router;
