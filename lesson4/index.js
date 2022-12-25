//npm init
//install package, 写script
//npm i express
//npm i -D nodemon
//npm run dev
const express = require('express');
const cors = require("cors");

//创建服务器实列
const app = express();

//导入路由模块 想拿到postman前端的body需要加json
const router = require('./router');
//一定要在路由之前配置cors中间件，从而解决接口跨越的问题
app.use(cors());
app.use(express.json());

//每个router 可提取公共部分的api
app.use("/api", router);

//监听服务器80端口
app.listen(80, function() {
  console.log(`Server is running on http://127.0.0.1:80`);
});

//router api 链接前端
//client call api
//index.js是入口文件，创建个router把文件独立分开不用全部挂在入口文件上
