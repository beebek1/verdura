const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/database");

const UpvotesModel = sequelize.define(
    "UpvotesModel",
    {
        upvotes_id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true

        }
    },
    {
        tableName : "upvotes",
        timestamps : true
    }
)

module.exports = UpvotesModel;