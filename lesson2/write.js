const fs = require("fs");

fs.writeFile("./files/2.txt", "hello everyone", function (err) {
  if (err) {
    return console.log("failed write file", err.message);
  }
  console.log("write file succeed");
});