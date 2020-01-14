const express = require('express'); 
const mongoose = require('mongoose'); 
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://cristianojr:meupudim123@cluster0-8bc2p.mongodb.net/meubanco?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);