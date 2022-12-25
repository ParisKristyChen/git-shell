const express = require("express");
//create web server
const app = express();

app.use(express.json());

//导入路由模块
const userRouter = require('./userRouter');
const sumRouter = require('./sumRouter');

app.use('/user',userRouter);
app.use(sumRouter);

app.listen(801, () => {
  console.log("Server is running on http://127.0.0.1:801");
});
