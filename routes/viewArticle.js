const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/blog/:id", async (req, res) => {
    // let blogRecords = await db.blogs.findAll();
    let blog = await db.blogs.findAll({
        where: {
            isPublished: true,
            id: req.params.id,
        },
        include: [
            {
                model: db.authors,
            },
        ],
        raw: true,
    });
    console.log(blog);

    res.render("viewArticle", {
        title: blog[0].title,
        blog: blog[0],
    });
});

module.exports = router;
