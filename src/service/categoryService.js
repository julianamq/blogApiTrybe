const { Category } = require('../models');

const newCategories = async ({ name }) => {
    const categories = await Category.create({ name });
    return categories;
};
const getCategory = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    newCategories,
    getCategory,
   
};