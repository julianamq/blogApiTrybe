const CreateBlogPost = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
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
BlogPosts.associate = (models) => {
  BlogPosts.belongsTo(models.User, { foreignKey: 'user_id', as: 'User' });
};
return BlogPosts;
  };

module.exports = CreateBlogPost;