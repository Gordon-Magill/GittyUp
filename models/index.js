const User = require("./User");
const Submission = require("./Submission");
const Comment = require("./Comment");

User.hasMany(Submission, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

Submission.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Submission, {
  foreignKey: "post_id",
});

Submission.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Submission, Comment };
