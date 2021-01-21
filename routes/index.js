const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/", async (req, res) => {
    // let blogRecords = await db.blogs.findAll();
    let blogRecords = await db.blogs.findAll({
        where: { isPublished: true },
        include: [
            {
                model: db.authors,
            },
        ],
        raw: true,
    });

    console.log(blogRecords);

    res.render("index", {
        title: "DigitalCrafts Blog",
        blogs: blogRecords,
    });
});

module.exports = router;
