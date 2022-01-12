export default (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the title for your post'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a post description'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'userId',
      }
    }
  }, {});
  Post.associate = (models) => {
  Post.belongsTo(models.User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  Post.hasMany(models.Comment, {
    foreignKey: 'postId',
  });
  };
  return Post;
};