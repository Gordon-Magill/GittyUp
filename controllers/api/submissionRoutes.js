const router = require("express").Router();
// Pull in model info from parent index file in models to descure depencencies' definitions
const { Submission } = require("../../models/index");

// Create new submission
router.post("/create", async (req, res) => {
  try {
    // Get the info needed for the new submission
    const submissionBody = {
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      date_created: Date.now(),
      user_id: req.session.userID,
    };

    // Log the info to be provided to the model
    console.log("submissionBody: ", submissionBody);

    // Create the new submission
    const newSubmission = await Submission.create(submissionBody);

    // Send back confirmatory info
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

    // Send the results
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

    // Send the results
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
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

// Delete one submission
router.delete("/:id", async (req, res) => {
  try {
  } catch (err) {
    // Log and send the error
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
