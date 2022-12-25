const express = require("express");
//创建web server
const app = express();

//导入路由模块
const router = require("./router");

//加载路由模块
//get请求  /profiles/list 'get list succeed'
//post  /profiles/add 'post profile succeed'
app.use("/profiles", router);

app.listen(80, () => {
  console.log("Server is running on http://127.0.0.1:80");
});
