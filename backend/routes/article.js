const router = require("express").Router()

const Article = require('../models/article')

/**
 * 
 */
router.post("/article", (req, res) => {
    const article = new Article(req.body)
    article.save();
    return res.sendStatus(200)
})

router.put("/article/:articleId", async (req, res) => {
    const articleId = req.params.articleId;
    const article = await Article.findByIdAndUpdate(articleId, req.body, { new: true })
    return res.json(article)
})

router.delete("/article/:articleId", async (req, res) => {
    const articleId = req.params.articleId;
    await Article.findByIdAndDelete(articleId)
    return res.sendStatus(200)
})

/**
    * @route Get api/articles
    * @desc get all articles
    * @acess private
*/
router.get("/articles", async (req, res) => {
    return res.json(await Article.find())
})

module.exports = router