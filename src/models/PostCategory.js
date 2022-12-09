const CreateCategoryPost = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      post_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    });
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPost',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id',
      });
    };
    return PostCategory;
  };

  module.exports = CreateCategoryPost;