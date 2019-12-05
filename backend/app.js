const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Post = require("./models/post");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://raza4075:jYeEXBy39Q2ZkbvX@cluster0-j3ito.mongodb.net/MERN_SPA?retryWrites=true&w=majority").then(() => {
  console.log("connection successfull");
}).catch(() => {
  console.log("connection error");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

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
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(result => {
    res.status(201).json({
      message: "post added successfully",
      postId: result._id
    });
  });
  // console.log(post);

});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Data send successfully",
      posts: documents
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({
    _id: req.params.id
  }).then(result => {
    console.log(result);
    res.status(200).json({
      message: "post deleted successfully"
    });

  });
});

module.exports = app;
