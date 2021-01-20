const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/submitBlog/?", (req, res) => {
    res.render("submitblog", {
        title: "Submit Blog",
    });
});

router.post("/submitBlog", (req, res) => {
    console.log(req.body);
    res.render("index", {
        title: "Submit Blog",
        blogs: {},
    });
});

module.exports = router;
