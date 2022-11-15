const router = require("express").Router();

const session = require("express-session");
const { Comment } = require("../../models/index");

router.post("/create", async (req, res) => {
    try {
      // Define comment body for logging purposes
      const commentBody = {
        author: req.session.username,
        content: req.body.commentBody,
        date_created: Date.now(),
        author_id: req.session.userID,
        post_id: req.body.postID,
      };
  
      // console.log("commentBody: ", commentBody);

      // Create the new comment
      const newcomment = await Comment.create(commentBody);
  
      // Send confirmatory info
      res.status(200).json(newcomment);
    } catch (err) {
      // Log and send the error
      console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;
