const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
// const models = require('./models');
const routes = require('./controllers');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutdb", 
    { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
      