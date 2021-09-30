const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

//this imports our customer api file in our router

const Categories = require("./routers/categoryApi");
const Manufacturers = require("./routers/manufacturerApi");
const Sample = require("./routers/samples");
const User = require("./routers/userApi");
const Auth = require("./routers/auth");
const ContactManufacturer = require("./routers/contact_manufacturer");
const Faq = require("./routers/faq");
const Feedback = require("./routers/feedback");
const Seller = require("./routers/seller");
const logs = require("./routers/logs");

//imports the adminbro in admin panel
const AdminRouter = require("./admin/adminbro");

//init express
const app = express();
//helps parses the data to json
app.use(express.json());

//our route
app.use("/categories", Categories);
app.use("/manufacturers", Manufacturers);
app.use("/users", User);
app.use("/auth", Auth);
app.use("/samples", Sample);
app.use("/feedback", Feedback);
app.use("/contactManufacturer", ContactManufacturer);
app.use("/faq", Faq);
app.use("/seller", Seller);
app.use("/admin", AdminRouter);
app.use("/logs", logs);

//this makes our uploads and samples folder public
app.use("/uploads", express.static("uploads"));
app.use("/samples", express.static("samples"));

//handles errors, when invalid Json in passed
app.use((req, res, next) => {
  const error = new Error();
  next(error);
});

app.use((error, req, res, next) => {
  res.status(400).json({
    message: error.message,
    status: "error",
    data: null,
  });
});

// for online database
// const url = config.get('mongoURI');

//connects the db to mongodb
//localdatabase
const url = "mongodb://127.0.0.1:27017/findme";

//connects the db to mongodb
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("db connected to mongodb");

    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server started on port${port}`);
    });
  })
  .catch((err) => console.log(err));
