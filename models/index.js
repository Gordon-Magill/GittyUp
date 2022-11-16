const User = require("./User");
const Submission = require("./Submission");
const Comment = require("./Comment");

Submission.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Submission, {
  foreignKey: "user_id",
  // onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: 'author_id',
})

User.hasMany(Comment, {
  foreignKey: "author_id",
  // onDelete: "CASCADE",
});

Comment.belongsTo(Submission, {
  foreignKey: "post_id",
});

Submission.hasMany(Comment, {
  foreignKey: "post_id",
  // onDelete: "CASCADE",
});

module.exports = { User, Submission, Comment };
