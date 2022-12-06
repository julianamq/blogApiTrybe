const express = require('express');
const routerLogin = require('./router/routerLogin');
const routerUser = require('./router/routerUser');
const routerCategory = require('./router/routerCategory');
// const CreateBlogPost = require('../');
// const CreateCategoryPost = require('./models/PostCategory');
// const CreateCategory = require('./models/Category');

// ...

const app = express();

app.use(express.json());
app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategory);

// app.use('/blog_posts', CreateBlogPost);
// app.use('/posts_categories', CreateCategoryPost);
// app.use('/categories', CreateCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
