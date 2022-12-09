const BlogPost = require('../service/blogPostService');

const createPost = async (request, response) => {
    const reqBody = request.body;
    console.log(reqBody, ' linha 15 controller');
  
    const { type, message } = await BlogPost.createPost(reqBody);
    if (type) return response.status().json({ message });
    response.status(201).json(message);
  };

  module.exports = {
    createPost,
  };