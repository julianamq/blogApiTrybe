const { CreateBlogPost, Category, User } = require('../models');

const getAllPosts = async () => {
  const todos = await CreateBlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return todos;
};

module.exports = {
  getAllPosts,
};