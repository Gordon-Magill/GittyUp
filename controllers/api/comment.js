const router = require("express").Router();

const session = require("express-session");
const { Comment } = require("../../models/index");

router.post("/create", async (req, res) => {
    try {
      const commentBody = {
        author: req.session.username,
        content: req.body.commentBody,
        date_created: Date.now(),
        user_id: req.session.userID,
      };
  
      console.log("commentBody: ", commentBody);

      const newcomment = await Comment.create(commentBody);
  
      res.status(200).json(newcomment);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;
