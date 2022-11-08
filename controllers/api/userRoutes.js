const router = require("express").Router();
// Pull in model info from parent index file in models to descure depencencies' definitions
const { User } = require('../../models/');

// Create new user
router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userID = dbUserData.id;
        req.session.username = req.body.username;
        req.session.userEmail = req.body.email;

        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userID = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.userEmail = req.body.email;

  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

// Get all users
router.get("/", async (req, res) => {});

// Get one user
router.get("/:id", async (req, res) => {});

// Update one user
router.put("/:id", async (req, res) => {});

// Delete one user
router.delete("/:id", async (req, res) => {});

module.exports = router;
