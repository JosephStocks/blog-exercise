const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/", async (req, res) => {
    let blogRecords = await db.blogs.findAll();
    res.render("index", {
        title: "DC | Blog | HomePage",
        blogs: blogRecords,
    });
});

module.exports = router;
