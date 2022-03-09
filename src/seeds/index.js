import "dotenv/config";
import mongoose from "mongoose";

// import User from "../models/index";

import {User} from "../models/index";
import {Category} from "../models/index";
import {Listing} from "../models/index";

import { userSeed } from "./data/userData.js";
const categoryData = require("../seeds/data/categoryData");

const init = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Connection to DB successful");

    await User.deleteMany({});
    await User.insertMany(userSeed);

    console.log("[INFO]: Successfully seeded users");

    await Category.deleteMany({});
    await Category.insertMany(categoryData);

    console.log("[INFO]: Successfully seeded users");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Connection to DB unsuccessful | ${error.message}`);
  }
};

init();
