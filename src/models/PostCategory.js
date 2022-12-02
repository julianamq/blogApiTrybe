const CreateCategoryPost = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    }, {
      timestamps: false,
      tableName: 'post_categories',
    });
    PostCategory.associate = (models) => {
      models.BlogPosts.belongsToMany(models.category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
      models.Category.belongsToMany(models.blog_posts, {
        as: 'BlogPosts',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    };
    return PostCategory;
  };

  module.exports = CreateCategoryPost;