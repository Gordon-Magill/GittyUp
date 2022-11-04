const User = require('./User');
const Submission = require('./Submission');

User.hasMany(Submission, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Submission.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Submission };