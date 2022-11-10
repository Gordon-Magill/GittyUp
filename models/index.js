const User = require('./User');
const Submission = require('./Submission');
const Comment = require('./Comment')

User.hasMany(Submission, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// TODO: integrate comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Submission.belongsTo(User, {
    foreignKey: 'user_id'
});

// TODO: integrate comments
Comment.belongsTo(Submission, {
    foreignKey: 'user_id'
});

Submission.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Submission, Comment };