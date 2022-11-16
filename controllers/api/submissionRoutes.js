const router = require("express").Router();
// Pull in model info from parent index file in models to descure depencencies' definitions
const { Submission, Comment } = require("../../models/index");

// Create new submission
router.post("/create", async (req, res) => {
  console.log(
    "\n**********\n\n**********\n\n**********\nPost creation route\n**********\n\n**********\n\n**********\n"
  );
  try {
    // Get the info needed for the new submission
    const submissionBody = {
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      language: req.body.language,
      date_created: Date.now(),
      user_id: req.session.userID,
    };

    // Log the info to be provided to the model
    console.log("submissionBody: ", submissionBody);

    // Create the new submission
    const newSubmission = await Submission.create(submissionBody);

    // Send confirmatory info
    res.status(200).json(newSubmission);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Get all submissions
router.get("/", async (req, res) => {
  try {
    // Get all submissions
    const allSubmissions = await Submission.findAll();

    // Strip out extra sequelize content
    const submissions = allSubmissions.map((row) => row.get({ plain: true }));

    // Log the results
    console.log("submissions:", submissions);

    // Send confirmatory info
    res.status(200).json(submissions);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Get one submission
router.get("/:id", async (req, res) => {
  try {
    // Get all submissions
    const oneSubmission = await Submission.findOne({
      where: {
        id: req.params.id,
      },
    });

    // Strip out extra sequelize content
    const submission = oneSubmission.map((row) => row.get({ plain: true }));

    // Log the results
    console.log("submission:", submission);

    // Send confirmatory info
    res.status(200).json(submission);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Update one submission
router.put("/:id", async (req, res) => {
  try {
    // Get the updated body content from the request
    const updatedContent = {
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      date_created: Date.now(),
      user_id: req.session.userID,
      points: req.body.points,
    };

    // Log the content to be updated
    console.log(updatedContent);

    // Actually update the submission
    const updatedSubmission = Submission.update(updatedContent, {
      where: {
        id: req.params.id,
      },
    });

    // Send confirmatory info
    res.status(200).json(updatedSubmission);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Delete one submission
router.delete("/:id", async (req, res) => {
  try {
    const delComments = await Comment.destroy({
      where: {
        post_id: parseInt(req.params.id)
      }
    })

    // Destroy the designated submission
    const destroyedSubmission = Submission.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Send confirmatory info
    res.status(200).json(destroyedSubmission);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Increments a post's points value up by one
router.put("/upvote/:id", async (req, res) => {
  console.log(
    "\n**********\n\n**********\n\n**********\nUpvote route called\n**********\n\n**********\n\n**********\n"
  );
  try {
    const post = await Submission.findOne({
      where: {
        id: req.params.id,
      },
    });

    const updatedPost = Submission.update(
      {
        points: post.points + 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Decrements a post's points value down by one
router.put("/downvote/:id", async (req, res) => {
  try {
    const post = await Submission.findOne({
      where: {
        id: req.params.id,
      },
    });

    const updatedPost = await Submission.update(
      {
        points: post.points - 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
