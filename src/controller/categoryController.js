const categoryService = require('../service/categoryService');

const newCategories = async (request, response) => {
 const id = await categoryService.newCategories(request.body);
 return response.status(201).json(id);
};
const getCategory = async (request, response) => {
    const { categoriesAll } = request.body;
   
    const dados = await categoryService.getCategory(categoriesAll);
    console.log(dados, 'dados linha 10');
    return response.status(200).json(dados);
};
module.exports = {
    newCategories,
    getCategory,
};