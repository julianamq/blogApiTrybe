const postService = require('../service/postService');

const getAllPosts = async (_request, response) => {
  const posts = await postService.getAllPosts();
  if (posts.message) return response.status(404).json(posts);
  return response.status(200).json(posts);
};

module.exports = {
  getAllPosts,
};