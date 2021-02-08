const express = require("express");
const router = express.Router();
const path = require("path");

//imports multer
const multer = require("multer");

//defines how files should be stored
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads");
    },
    //sets that the file should be stored with its extension name
    filename: function (req, file, callback) {
        console.log(file);
        callback(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 1,
    },
    fileFilter: fileFilter,
});

const Category = require("../../models/category");

router.post("/", upload.single("image"), (req, res) => {
    console.log(req.file);
    const newCategory = new Category({
        name: req.body.name,
        image: req.file.path,
    });

    newCategory
        .save()
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
});

router.get("/", (req, res) => {
    Category.find()
        .select("-manufacturer")
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
});

router.put("/:id", upload.single("image"), (req, res) => {
    const { name } = req.body;
    const updateCategory = {
        name,
        image: req.file.path,
    };
    Category.findByIdAndUpdate(req.params.id, updateCategory, { new: true })
        .then((category) => res.status(200).json(category))
        .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
