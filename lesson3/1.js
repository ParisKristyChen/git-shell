//lesson3
//cd lesson3
//npm init
// npm i -D nodemon
// npm i --save -dev 
//npm i express 
// npm run dev

const express = require("express");

//创建web服务器
const app = express();
app.get("/user", (req, res) => {
  //express提供res.send()方法，向客户端响应一个json对象
  //通过req.query询问 可以获取客户端发送过来的查询参数
  console.log("query", req.query);
  // query { city: 'sydney', country: 'au' }
  res.send(req.query.name);
});

app.get("/users/:room/:name", (req, res) => {
  //:id 是一个动态参数 params 参数
  console.log(req.params);
  res.send(req.params.name);
});

app.post("/api", (req, res) => {
  res.send("post succeed");
});


