const express = require("express");
const router = express.Router();
const Manufacturer = require("../../models/manufacturer");

router.post("/", (req, res) => {
    const {
        name,
        city,
        state,
        address,
        email,
        phone,
        sample,
        category,
    } = req.body;

    const newManufacturer = new Manufacturer({
        name,
        city,
        state,
        address,
        email,
        phone,
        sample,
        category,
    });

    newManufacturer
        .save()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
});

//gets all
router.get("/", (req, res) => {
    Manufacturer.find()
        .populate("category")
        .select("-phone -sample ")
        .sort({ name: 1 })
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
});

//update
router.put("/:id", (req, res) => {
    const { name, city, state, email, phone, category } = req.body;
    const update = { name, city, state, email, phone, category };
    Manufacturer.findByIdAndUpdate(req.params.id, update, { new: true })
        .then((update) => {
            res.status(200).json(update);
        })
        .catch((err) =>
            res.status(400).json({
                msg: "check if details are correct",
                err,
            })
        );
});

//delete
router.delete("/:id", (req, res) => {
    Manufacturer.findByIdAndDelete(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
