const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router");

//装中间件 express.json可以解析postman body里面的数据 function 加（)执行
app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(80, () => {
  console.log("Server is running on http://127.0.0.1:80");
});