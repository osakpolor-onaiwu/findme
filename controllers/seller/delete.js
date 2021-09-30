const seller = require("../../models/seller");

const deletes = async (req, res, next) => {
  seller
    .findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({
        status: "Success",
        message: `SELLER DELETED`,
        data,
      })
    )
    .catch((err) =>
      res.status(400).json({
        status: "error",
        message: `${err.message}`,
        data: null,
      })
    );
};

module.exports = deletes;
