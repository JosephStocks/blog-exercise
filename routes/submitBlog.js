const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/submitBlog/?", async (req, res) => {
    let authors = await db.authors.findAll();
    res.render("submitblog", {
        title: "Submit Blog",
        authors: authors,
    });
});

router.post("/submitBlog", async (req, res) => {
    let createResponse = await db.blogs.create({
        title: req.body.title,
        authorId: Number(req.body.author),
        body: req.body.blogcontent,
        isPublished: Boolean(req.body.publish),
        publishDate: new Date(),
    });
    console.log(req.body);
    res.status(200).redirect("/");
    // let createResponse = db.blogs.create({
    //     description: req.body.text,
    //     completed: false,
    // });

    // console.log(createResponse);

    // res.status(200).json({
    //     text: req.body.text,
    // });
    // let newId = await db.blogs.create();
    // let blogs = await db.blogs.findAll();
    // console.log(req.body);
    // res.render("index", {
    //     title: "Submit Blog",
    //     blogs: blogs,
    // });
});

module.exports = router;
