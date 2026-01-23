const {DataTypes} = require("sequelize");
const {sequelize} = require("../../db/database");
const Register = require("../userModel");

const IndInfo = sequelize.define(
    "IndividualInfo",
    {
        ind_id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },

        description: {
            type: DataTypes.STRING,
            allowNull:true
        },

        logo_path: {
            type: DataTypes.STRING,
            allowNull:true
        },
        
        address: {
            type: DataTypes.STRING,
            allowNull:true
        },

        total_campaigns_joined : {
            type : DataTypes.INTEGER,
            defaultValue : 0
        }
    },
    {
        tableName : "indinfo",
        timestamps : true
    }
)
module.exports = IndInfo;