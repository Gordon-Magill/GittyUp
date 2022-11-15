const router = require("express").Router();
const { User, Submission, Comment } = require("../models/index");
const auth = require("../utils/auth");

// Homepage / browse
router.get("/", async (req, res) => {
  // Get all submissions from all users, including associated users
  const allSubmissions = await Submission.findAll({
    include: [{ model: User }],
  });

  // Strip out the extra sequelize content
  const submissions = allSubmissions.map((row) => row.get({ plain: true }));

  // Diagnostic logs of what's actually going to be rendered
  console.log("submissions: ", submissions);
  console.log("session: ", req.session);

  // Render the page with data needed for the handlebars template
  res.render("homepage", {
    session: req.session,
    submissions,
  });
});

// Dashboard for posting new content + seeing stats
router.get("/dashboard", auth, async (req, res) => {
  // If the user isn't logged in, send them to the login page
  if (!req.session.loggedIn) {
    res.status(304).redirect("/login");
    return;
  }

  // Get all submissions from the logged in user
  const userSubmissions = await Submission.findAll({
    where: {
      user_id: req.session.userID,
    },
    include: [{ model: User }],
  });

  // Strip out extra sequelize content
  const submissions = userSubmissions.map((row) => row.get({ plain: true }));

  // Diagnostic logs of what's actually going to be rendered
  console.log("submissions: ", submissions);
  console.log("session: ", req.session);

  // Render the page with data needed for the handlebars template
  res.render("dashboard", {
    session: req.session,
    submissions,
  });
});

// Login/signup page
router.get("/login", async (req, res) => {
  // Diagnostic logs of what's actually going to be rendered
  console.log("session: ", req.session);

  // Render the page with data needed for the handlebars template
  res.render("login", {
    session: req.session,
  });
});

// Single submission page
router.get("/submission/:id", async (req, res) => {
  // Get specified submission based on the req params
  console.log('\n**********\nsubmission rendering page called\n**********\n')
  const singleSubmission = await Submission.findOne({
    where: {
      id: req.params.id,
    },
    include: [{ model: User }, {model: Comment}],
  });



  // Strip out extra sequelize content
  const submission = singleSubmission.get({ plain: true });

  // Diagnostic logs of what's actually going to be rendered
  console.log("submission: ", submission);
  console.log("session: ", req.session);

  // Render the page with data needed for the handlebars template
  res.render("submission", {
    session: req.session,
    submission,
  })
});

// About Page
router.get("/about", async (req, res) => {
  // Diagnostic logs of what's actually going to be rendered
  console.log("session: ", req.session);

  // Render the page with data needed for the handlebars template
  res.render("about", {
    session: req.session,
  });
});

// 404 Page
router.get("/404", async (req, res) => {
  // Diagnostic logs of what's actually going to be rendered
  console.log("session: ", req.session);

  // Render the page with data needed for the handlebars template
  res.render("404", {
    session: req.session,
  });
});

module.exports = router;
