const router = require("express").Router();

const { Comment } = require("../../models/index");

router.post("/create", async (req, res) => {
    try {
      const commentBody = {
        author: req.body.author,
        content: req.body.content,
        date_created: Date.now(),
        user_id: req.session.user_id,
      };
  
      console.log("commentBody: ", commentBody);

      const newcomment = await comment.create(commentBody);
  
      res.status(200).json(newcomment);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;