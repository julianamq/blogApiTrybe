const CreateBlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  user_id: DataTypes.INTEGER,
  published: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW
  },
  updated: {
    type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
  },
}, {
  timestamps: false,
  tableName: 'blog_posts',
});
BlogPost.associate = (models) => {
  BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'User' });
};
return BlogPost;
  };

module.exports = CreateBlogPost;