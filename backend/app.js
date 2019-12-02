const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin ,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "post added successfully"
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "as12121asa",
      title: "First",
      content: "hello"
    },
    {
      id: "asas53423",
      title: "second",
      content: "hello"
    },
    {
      id: "123ds45",
      title: "third",
      content: "hello"
    },
    {
      id: "87jh65",
      title: "fourth",
      content: "hello"
    }
  ];
  res.status(200).json({
    message: "Data send successfully",
    posts: posts
  });
});

module.exports = app;
