"use strict";

const { countConnect } = require("../helpers/check.connect"); // check connection
const mongoose = require("mongoose");
const connectString =
  "mongodb://root:example@localhost:27017/shopDev?authSource=admin";

class Database {
  constructor() {
    this.connect();
  }

  //   connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => {
        console.log(`Connected MongoDB Success`);

        countConnect();
      })
      .catch((err) => console.log(`Error Connect!`, err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
