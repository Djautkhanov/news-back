const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use(require("./Routes/category.routes"));
app.use(require("./Routes/comment.routes"));
app.use(require("./Routes/news.roter"));
app.use(require("./Routes/user.routes"));

mongoose.connect(
  "mongodb+srv://vakha:vakha123@cluster0.jzwrdu1.mongodb.net/news-site",
  async () => {
    try {
      console.log("Успешно соединились с сервером MongoDB");
      app.listen(4000, () => {
        console.log("Сревер успешно запушен");
      });
    } catch (error) {
      console.log(error);
    }
  }
);
