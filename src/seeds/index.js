require("dotenv").config();
const mongoose = require("mongoose");

const { User } = require("../models");
const { Category } = require("../models");
const { Listing } = require("../models");

const userSeed = require("./data/userData");
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

    console.log("[INFO]: Successfully seeded categories");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Connection to DB unsuccessful | ${error.message}`);
  }
};

init();
