function getList() {
  console.log("call getList");
  const url = "http://127.0.0.1/api/users";
  //promise.prototype.then()无论成功或失败都会返回的回调函数 axios作为临时拥有的一个包CDN导入进来，放在html script里。每个api都有个URL，这是它的身份
  axios.get(url).then((response) => {
    const users = response.data.data;
    console.log("get users", users);
    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.name}  ${user.age}`;
      document.getElementById("myList").appendChild(li);
    });
  });
}
function postUser() {
  console.log("call postUser");
  const url = "http://127.0.0.1/api/user";
  const body = {
    name:'Ben',
    age:25,
  };
  axios.post(url, body).then((response) => {
    const addedUser = response.data.data;
    console.log("user is added", addedUser);
    const li = document.createElement("li");
    li.innerHTML = `${addedUser.name} ${addedUser.age}`;
    document.getElementById('myList').appendChild(li);
  });
};