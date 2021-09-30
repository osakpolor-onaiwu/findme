const log4js = require("log4js");
const logModel = require("./models/logsModel");
log4js.configure({
  appenders: { logs: { type: "file", filename: "log.js" } },
  categories: { default: { appenders: ["logs"], level: "error" } },
});

const logger = log4js.getLogger("logs");

class Log {
  constructor(data) {
    this.data = data;
  }

  async infos(data, identifier) {
    if (!identifier) {
      throw new Error("identifier must be a supplied");
    }
    if (typeof identifier !== "string") {
      throw new Error("identifier must be a string");
    }
    let item = {};
    item.type = "info";
    item.data = JSON.stringify(data);
    item.identifier = identifier;
    const newLog = new logModel(item);
    newLog
      .save()
      .then((items) => console.log(items))
      .catch((err) => console.log(err));

    return logger.info(item);
  }

  async errors(data, identifier) {
    if (!identifier) {
      throw new Error("identifier must be a supplied");
    }
    if (typeof identifier !== "string") {
      throw new Error("identifier must be a string");
    }
    let item = {};
    item.type = "error";
    item.data = JSON.stringify(data);
    item.identifier = identifier;
    const newLog = new logModel(item);
    newLog
      .save()
      .then((items) => console.log(items))
      .catch((err) => console.log(err));

    return logger.info(item);
  }
}

const alllogs = new Log();
module.exports = alllogs;
