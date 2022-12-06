const express = require('express');
const routerLogin = require('./router/routerLogin');
const CreateUser = require('./models/User');
// const CreateBlogPost = require('./models/BlogPost');
// const CreateCategoryPost = require('./models/PostCategory');
// const CreateCategory = require('./models/Category');

// ...

const app = express();

app.use(express.json());
app.use('/login', routerLogin);

app.use('/user', CreateUser);
// app.use('/blog_posts', CreateBlogPost);
// app.use('/posts_categories', CreateCategoryPost);
// app.use('/categories', CreateCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
