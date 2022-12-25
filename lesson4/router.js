const express = require('express');

//创建路由模块
const router = express.Router();
// get /api/users
const users = [
  { name: "ben", age: "20" },
  { name: "John", age: "30" },
  { name: "Chris", age: "40" },
  { name: "Jane", age: "50" },
];
router.get('/users',(req, res) => {
  res.send({
    status:0,
    msg:'get users succeed',
    data:users,
  });
});

// post /api/user
router.post('/user', (req, res) => {
  const body = req.body;
  console.log('body', body);
  res.send({
    msg:'post succeed',
    data:body,
  });
});

//导出路由模块

module.exports = router;

