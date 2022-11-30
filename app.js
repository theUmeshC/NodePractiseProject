import pkg from 'body-parser';
const { urlencoded } = pkg;

import express from 'express';
const app = express();

const port = +process.env.PORT || 5000;

console.log(port);
const users = [];

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('index', {pageTitle: 'Add User'});
});

app.get('/users', (req, res) => {
    res.render('users', {pageTitle: 'Users', users:users});
});

app.post('/add-user', (req, res) => {
    users.push({name: req.body.username});
    res.redirect('/users');
});

app.use((req, res) => {
res.status(404).render('404', {pageTitle: 'not found'});
});

app.listen(port, ()=>{
    console.log("server listening on port " + port);
});