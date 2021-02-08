const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
//init express
const app = express();

//this imports our customer api file in our router

const Categories = require('./routers/api/categoryApi');
const Manufacturers = require('./routers/api/manufacturerApi');
const Sample = require('./routers/api/samples');
const User = require('./routers/api/userApi');
const Auth = require('./routers/api/auth');
const ContactManufacturer = require('./routers/api/contact_manufacturer');

//allow Post request from client
//helps parses the data to json
app.use(express.json());

//for online database
// const url = config.get("mongoURI");

//connects the db to mongodb
//localdatabase
const url = 'mongodb://127.0.0.1:27017/findme';
//connects the db to mongodb
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('db connected', url);
});

db.on('error', (err) => {
  console.log('connection error', err);
});
//this makes our uploads and samples folder public
app.use('/uploads', express.static('uploads'));
app.use('/samples', express.static('samples'));

//this means any request to /foodblog/api/customers should use
//the route in CustomerApi file

app.use('/findme/api/categories', Categories);
app.use('/findme/api/manufacturers', Manufacturers);
app.use('/findme/api/users', User);
app.use('/findme/api/auth', Auth);
app.use('/findme/api/samples', Sample);
app.use('/findme/api/contactManufacturer', ContactManufacturer);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port${PORT}`);
});
