const categoryService = require('../service/categoryService');

const newCategories = async (request, response) => {
 const id = await categoryService.newCategories(request.body);
 return response.status(201).json(id);
};

module.exports = {
    newCategories,
};