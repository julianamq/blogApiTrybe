const express = require('express');
const CreateBlogPost = require('./models/CreateBlogPost');
const CreateCategory = require('./models/Category');
const CreateCategoryPost = require('./models/CreateCategoryPost');
const CreateUser = require('./models/CreateUser');

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
