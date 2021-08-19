const create = require("../../controllers/manufacturer/create");
const read = require("../../controllers/manufacturer/fetch");
const update = require("../../controllers/manufacturer/edit");
const deletes = require("../../controllers/manufacturer/delete");

module.exports = {
  create,
  read,
  update,
  deletes,
};
