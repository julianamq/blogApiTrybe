const { Category } = require('../models');

const newCategories = async ({ name }) => {
    const categories = await Category.create({ name });
    return categories;
};

module.exports = {
    newCategories,
};