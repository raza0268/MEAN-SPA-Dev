const express = require("express");
const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    { id: "as12121asa", title: "First", content: "hello" },
    { id: "asas53423", title: "second", content: "hello" },
    { id: "123ds45", title: "third", content: "hello" },
    { id: "87jh65", title: "fourth", content: "hello" }
  ];
  res.status(200).json({
    message: "Data send successfully",
    posts: posts
  });
});

module.exports = app;
