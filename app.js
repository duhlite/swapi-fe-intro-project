// using node, create a simple webserver here that displays a static page
// that static page will live in your views folder

// you may want to have an index.html and a page.html (or something similar)
// or even do your API calls on the server side rather than on the client

// feel free to use as little or as much backend as you would like here
const express = require('express');
const path = require('path');
const app = express();

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});