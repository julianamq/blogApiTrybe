const { BlogPost, Category, User } = require('../models');

// const createPost = async (reqBody) => { //  tentativa da 12
//     const { title, content, category } = reqBody;
//     const searchCategories = await BlogPost.create({ title, content });// vai retornar o id de inserção
//     console.log('linha 6 service blog');
//     // criar as iserções na tabela 
//     const { id } = searchCategories;
//     const postar = category
//         .map((categoria) => PostCategory
//         .create({ postId: id, categoryId: categoria }));
//     Promise.all(postar);
// };

const getAllPosts = async () => {
    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!allPosts) return { message: 'Posts not found' };
    return allPosts;
  };
  
  const getPostById = async (id) => {
    const isPost = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    console.log(isPost, ' linha 33 post service');
    if (!isPost) return { message: 'Post does not exist' };
    return isPost;
  };
  
  module.exports = {
    getAllPosts,
    getPostById,
  };
