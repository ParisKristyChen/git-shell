const express = require("express");

//创建路由
const router = express.Router();

//挂载具体路由
// router.get('/list',(req,res) => {
//   res.send('get user list');
// })

// router.post("/add",(req,res) => {
//   res.send("add new user");
// });
router.get("/list", (req, res) => {
  res.send("get profile list ");
});

router.post("/add", (req, res) => {
  res.send("add new profile");
});
//导出路由
module.exports = router;
