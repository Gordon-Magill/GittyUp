const sequelize = require('../config/connection');
const { User, Submission, Comment } = require('../models');

const userData = require('./userData.json');
const submissionData = require('./submissionData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const submission of submissionData) {
    await Submission.create({
      ...submission,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentsData) {
    await Comment.create({
      ...comment
    });
  }


  process.exit(0);
};

seedDatabase();
