const CreateBlogPost = (sequelize, DataTypes) => {
    const BlogPosts = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated:  DataTypes.DATE,
    },
    {
      underscored: true,
      tableName: 'blog_posts',
    });
    BlogPosts.associate = (models) => {
        BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };
    return BlogPosts;
  };
  
  module.exports = CreateBlogPost;