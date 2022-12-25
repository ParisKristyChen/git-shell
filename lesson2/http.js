//127.0.0.1 http://localhost

const http = require('http');
const server = http.createServer();

//someone is visiting our server
//str Your request url is /, and request method is GET

// server.on("request", function (req, res) {
//   console.log("someone is visiting our server" );
//   //客户端URL地址
//   const url = req.url
//   //客户端请求method
//   const method = req.method;
//   const str = `您请求的地址是${url}, and request mothod is ${method}`
//   console.log("str", str);
//   //调用res.send()方法，向客户响应一些内容
//   res.setHeader("Content-Yype", "text/html; charset=utf-8")
//   res.end(str);
// })

//request respond回应 
server.on("request", function (req, res) {
  const url = req.url;
  let content = "<h1>404 not found</h1>";
  if (url === "/" || url === "/index.html") {
    content = "<h1>main page</h1>"; 
    } else if (url === "/about.html") {
      content = "<h1>about page</h1>";
    }
    res.setHeader("Content-Type", "text/html; charset=utf8")
    res.end(content);
  });



server.listen(8080, function() {
  console.log("server is running on http://127.0.0.1:8080");
});