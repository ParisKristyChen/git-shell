//npm init 改package.json scripts
//npm i express
// npm i -D nodemon

//导入express
const express = require('express');
//创建server
const app = express();

const mw = function(req,res,next) {
  //获取请求到达服务器的时间
  const time = Date.now();
//为req对象加载一个自定义属性startTime，从而把时间共享给后面的所有路由,最后一步要next()。app.use()要先经历,从上到下按顺序执行，所有的api可用。把最重要最基础的中间件放第一位。.use是自定义的一个keys
  req.startTime = time;
  next()
}
app.use(mw)

app.use((req,res,next) => {
  console.log("最简单的中间件");
  next();
});

app.get('/home',(req,res) => {
  console.log("call home page api");
  const time = Date.now();
  res.send(`home page ${req.startTime}`);
});

app.get("/user",(req,res) => {
  console.log("call user page api");
  res.send(`user page ${req.startTime}`);
});

//run server
app.listen(80,()=>{
  console.log('server is running on http://127.0.0.1:80');
  //http://localhost
});
