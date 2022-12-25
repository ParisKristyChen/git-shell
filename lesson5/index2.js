const express = require('express');

const app = express();

//可以拿到postman body的数据
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
//导入解析表单的中间件 body-parser
const parser = require("body-parser");
app.use(parser.json());
app.use(parser.urlencoded());
//定义第一个中间件,有三个参数
const mw1 = (req, res, next) => {
  console.log('first global middleware');
  next();
}

//定义第二个中间件
const mw2 = (req, res, next) => {
  console.log('second global middleware');
  next();
};
//.use()谁在前谁先执行
//调用多个局部api，写法一
app.get('/user', mw2, mw1, (req, res) => {
  console.log("user page");
  res.send("user page");
});
//调用多个局部中间件，写法二
app.get("/about", [mw1,mw2],(req,res) => {
  console.log('about page');
  res.send("about page");
});

//mw1不会影响其他路由
app.get('/book', (req,res) => {
  res.send('book page');
});

//通过express.jason()这个中间件，解析表单body中的Jason格式的数据
app.post('/user',(req,res) => {
  console.log('req.body', req.body);
  res.send(req.body);
});

app.listen(5000, ()=>{
  console.log('server is running on http://127.0.0.1:5000');
})