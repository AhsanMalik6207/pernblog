export default (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment_text: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease enter a comment'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id',
        as: 'postId',
      }
    }
  }, {});
  Comment.associate = (models) => {
  Comment.belongsTo(models.Post, {
    foreignKey: 'postId',
    onDelete:'CASCADE'
  });
  };
  return Comment;
};