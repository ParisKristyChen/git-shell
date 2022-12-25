const express = require("express");
const axios = require("axios");
const router = express.Router();
// GET users
//http://localhost/api/users
//http://localhost:3000/users
//users和db.json的key匹配。req前端发起send请求的时候提供。res后端回复前端的东西 status状态
router.get("/users", async (req, res) => {
  try {
    const url = "http://localhost:3000/users";
    const users = await axios.get(url);
    //console.log("users", users.data);
    res.status(200).json({
      msg: "get users succeed",
      data: users.data,
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
//GET cards by user id
//http://localhost/api/cards?userId=user-uuid-1
//http://localhost:3000/cards?userId=user-uuid-1
router.get("/cards", async (req, res) => {
  const { userId } = req.query;
  console.log("userId", userId);
  try {
    const url = `http://localhost:3000/cards?userId=${userId}`;
    const cards = await axios.get(url);
    console.log("cards", cards.data);
    res.status(200).json({
      msg: "get cards succeed",
      data: cards.data,
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
//POST a card to specific user
//http://localhost/api/cards
//http://localhost:3000/cards
router.post("/cards", async (req, res) => {
  console.log("body", req.body);
  try {
    const url = "http://localhost:3000/cards";
    await axios.post(url, req.body, {
      headers: {
        "Content-type": "application/json",
      },
    });
    res.status(200).json({
      msg: "Card is created",
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//DELETE card by card id
//http://localhost/api/cards/:card_id
//http://localhost:3000/cards/card-uuid-2

router.delete("/cards/:card_id", async (req, res) => {
  try {
    const url = `http://localhost:3000/cards/${req.params.card_id}`;
    const result = await axios.delete(url);
    console.log("result", result);
    res.status(200).json({
      msg: "Card is deleted",
    });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
