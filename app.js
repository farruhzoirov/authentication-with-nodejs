const express = require('express');
const path = require("path");
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false }));

const routes = require('./routes/routes');

app.use(routes);




mongoose.connect('mongodb+srv://fzoirov29:9hbVYteBL35W9vu5@cluster0.yycvn5d.mongodb.net/auth-nodejs/retryWrites=true&w=majority&appName=Cluster0')
    .then((result) => {
      console.log('Connected!')
      app.listen(5000);
    }).catch((err) => {
          console.log(err)
})

