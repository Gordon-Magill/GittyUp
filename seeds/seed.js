const sequelize = require("../config/connection");
const { User, Submission, Comment } = require("../models/index");

// Import data from JSON
const userData = require("./userData.json");
const submissionData = require("./submissionData.json");
const commentsData = require("./commentsData.json");

// Seed models
const seedDatabase = async () => {
  // Reset the tables
  await sequelize.sync({ force: true });

  // Seed users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Seed submissions
  for (const submission of submissionData) {
    await Submission.create({
      ...submission,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // Seed comments
  for (const comment of commentsData) {
    await Comment.create({
      ...comment,
    });
  }

  // Stop the seeding process
  process.exit(0);
};

// Actually do the seeding
seedDatabase();
