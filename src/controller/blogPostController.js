const blogService = require('../service/blogPostService');

// const createPost = async (request, response) => {
//     const reqBody = request.body;
//     console.log(reqBody, ' linha 15 controller');
  
//     const { type, message } = await BlogPost.createPost(reqBody);
//     console.log(type, message, 'tipo');
//     if (type) return response.status().json(message);
//     response.status(201).json(message);
//   };
  const getAllPosts = async (_request, response) => {
    const message = await blogService.getAllPosts();
    console.log(message, ' linha 14 controller');
    if (message.message) return response.status(404).json(message);
    return response.status(200).json(message);
  };
  
  const getPostById = async (request, response) => {
    const { id } = request.params;
    console.log(id);
    if (!id) return response.status(400).json({ message: 'id not found' });
    const message = await blogService.getPostById(id);
    console.log(message, 'message controller');
    if (message.message) return response.status(404).json(message);
    return response.status(200).json(message);
  };
  module.exports = {
   getAllPosts, getPostById,
  };