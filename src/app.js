const express = require('express');
const CreateUser = require('./models/User');
const CreateBlogPost = require('./models/CreateBlogPost');
const CreateCategoryPost = require('./models/CreateCategoryPost');
const CreateCategory = require('./models/Category');

// ...

const app = express();

app.use(express.json());

app.use('/users', CreateUser);
app.use('/blog_posts', CreateBlogPost);
app.use('/posts_categories', CreateCategoryPost);
app.use('/categories', CreateCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
