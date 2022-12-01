import pkg from 'body-parser';
const { urlencoded } = pkg;

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

import express from 'express';
const app = express();

const port = +process.env.PORT || 5000;

let users = [];

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

app.get('/src/:subPath', (req, res) => {
    const { subPath } = req.params;
    res.sendFile(`src/${subPath}`, { root: __dirname });
});

app.use('/users/delete/:value', (req, res)=>{
    const value = req.params.value;
    users = users.filter((item)=>{item.name!==value});
    res.redirect('/users');
});

app.use((req, res) => {
res.status(404).render('404', {pageTitle: 'not found'});
});

app.listen(port, ()=>{
    console.log("server listening on port " + port);
});
