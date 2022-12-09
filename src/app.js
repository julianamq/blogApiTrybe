const express = require('express');
const routerLogin = require('./router/routerLogin');
const routerUser = require('./router/routerUser');
const routerCategory = require('./router/routerCategory');
const routerBlogPost = require('./router/routerBlogPost');

const app = express();

app.use(express.json());
app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategory);
app.use('/post', routerBlogPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
