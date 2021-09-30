const manufactuer = require("../../models/manufacturer");
const categories = require("../../models/category");
const States = require("./littleDatabase/States");
const create = async (req, res, next) => {
  try {
    let stateCase = req.body.state.split("");

    let first_letter = stateCase[0].toUpperCase();
    let other_letters = stateCase.splice(1, stateCase.length).join("");
    let newState = `${first_letter}${other_letters}`;

    let stateCheck = States.filter((states) => {
      return states == newState;
    });

    if (stateCheck == null || stateCheck.length == 0) {
      throw new Error("please enter a valid state");
    }

    req.body.state = newState;
    const {
      fullname,
      companyName,
      city,
      state,
      address,
      email,
      phone,
      sample,
      category,
      description,
      long,
      lat,
    } = req.body;

    const newManufacturer = new manufactuer({
      fullname,
      companyName,
      city,
      state,
      address,
      email,
      phone,
      sample,
      category,
      description,
      long,
      lat,
    });

    const existing = await manufactuer.findOne({
      companyName: companyName,
    });

    if (existing) {
      throw new Error("Manufacturer already exists");
    }

    await newManufacturer.save().then((data) => {
      res.status(200).json({
        status: "Success",
        message: `MANUFACTURERS CREATED`,
        data: data,
      });
    });
  } catch (err) {
    if (err.message.includes("Manufacturer validation failed")) {
      return res.status(400).json({
        status: "error",
        message: `Category not found`,
        data: null,
      });
    }
    res.status(400).json({
      status: "error",
      message: `${err.message}`,
      data: null,
    });
  }
};

module.exports = create;
