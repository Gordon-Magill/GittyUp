const sequelize = require('../config/connection');
const { User, Submission } = require('../models');

const userData = require('./submissiondata.json');
const submissionData = require('./userdata.json');

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

  process.exit(0);
};

seedDatabase();
