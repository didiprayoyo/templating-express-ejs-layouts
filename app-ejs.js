const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

const port = 3000;
const nameDiAppJS = "Diyo";
const headerTitle = "Web Server - EJS";

// using ejs view engine
app.set('view engine', 'ejs');
// use express-ejs-layouts template
app.use(expressLayouts);
// untuk set (object) layout semua routing
app.set('layout', 'layouts/layout');

app.get('/', (req, res) => {
    res.render('./index', {layout: 'layouts/layout', name: nameDiAppJS, title: `Home Page - ${headerTitle}`});
});

app.get('/about', (req, res) => {
    res.render('./about', {title: `About Page - ${headerTitle}`});
});

app.get('/contact', (req, res) => {
    let contacts = [
        {name: "Naruto", mobile: "08123456789"},
        {name: "Sasuke", mobile: "08987654321"},
        {name: "Sakura", mobile: "08564738291"},
    ]
    // let contacts = [];
    res.render('./contact', {name: nameDiAppJS, title: `Contact Page - ${headerTitle}`, contacts});
});

app.get('/product/:id/category/:idCat', (req, res) => {
    res.send(`product id: ${req.params.id} <br> category id: ${req.params.idCat}`);
});

app.get('/product/:id', (req, res) => {
    res.send(`product id: ${req.params.id} <br> category id: ${req.query.queryCat}`);
});

app.use('/', (req, res) => {
    res.status(404).send("Page not found: 404");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});