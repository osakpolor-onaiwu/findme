const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

//init express
const app = express();

//this imports our customer api file in our router

const Categories = require('./routers/categoryApi');
const Manufacturers = require('./routers/manufacturerApi');
const Sample = require('./routers/samples');
const User = require('./routers/userApi');
const Auth = require('./routers/auth');
const ContactManufacturer = require('./routers/contact_manufacturer');
const faq = require('./routers/faq')

//helps parses the data to json

app.use(express.json());

// for online database
// const url = config.get('mongoURI');

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

//imports the adminbro in admin panel
const AdminRouter = require('./admin/adminbro');

//our routes
app.use('/categories', Categories);
app.use('/manufacturers', Manufacturers);
app.use('/users', User);
app.use('/auth', Auth);
app.use('/samples', Sample);
app.use('/contactManufacturer', ContactManufacturer);
app.use('/faq',faq)
app.use('/admin', AdminRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port${PORT}`);
});
