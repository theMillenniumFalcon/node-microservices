require("dotenv").config();

export const development = {
    dialect: "mysql",
    seederStorage: "sequelize",
    url: process.env.DB_URI
}