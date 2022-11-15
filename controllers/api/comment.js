const router = require("express").Router();

const session = require("express-session");
const { Comment } = require("../../models/index");
const { Submission } = require("../../models/index");
const { update } = require("../../models/User");

router.post("/create", async (req, res) => {
  console.log("********************\n\n\nComment Creator Called\n\n\n*********************")
    try {
      const commentBody = {
        author: req.session.username,
        content: req.body.commentBody,
        date_created: Date.now(),
        author_id: req.session.userID,
        post_id: req.body.postID,
      };
      
      console.log("commentBody: ", commentBody);

      const newcomment = await Comment.create(commentBody);
  
      res.status(200).json(newcomment);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }

    
  });

  //update Submission.comments_count

router.put("/create", async(req, res) => {
  console.log("********************\n\n\nComment Count Incrementer Called\n\n\n*********************")
  try{
    const updateCounter = {

      //this is probably wrong
      comment_count: comment_count += 1,
    };

    Submission.update(updateCounter, {
      where:{
        // this may be wrong too
        id: req.params.id
      },
    });
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;
