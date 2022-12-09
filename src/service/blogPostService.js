const { BlogPost, PostCategory } = require('../models');

const createPost = async (reqBody) => {
    const { title, content, category } = reqBody;
    const searchCategories = await BlogPost.create({ title, content });// vai retornar o id de inserção
    // criar as iserções na tabela 
    const { id } = searchCategories;
    const postar = category
        .map((categoria) => PostCategory
        .create({ postId: id, categoryId: categoria }));
    Promise.all(postar);
};

module.export = {
    createPost,
};