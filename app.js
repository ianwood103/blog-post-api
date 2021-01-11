const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('We are on home')
});

//Mongoose instance connection url connection
mongoose.connect('mongodb://localhost/Tododb',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
);

//How do we start listening to the server?
app.listen(3000);
