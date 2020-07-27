const express = require("express");
const path = require("path");
const axios = require('axios');

const app = express();
const host = "localhost";
const port = 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.get('/', (req, res) => {
    res.render('index.twig');
})

app.get('/services/:id', (req, res) => {
    console.log(req.params.id);
    res.send('<html><body>Mes services</body></html>');
})

app.get('/blog', (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(anwser => {
        res.render('posts.twig', {
            postsList : anwser.data });
    });
})


app.get('/blog/:id', (req, res) => {
    res.render('post.twig', {
        id : req.params.id 
    });
})

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})