const { DataTypes } = require ("sequelize");
const { sequelize } = require("../db/database");

const Register = sequelize.define(
    "Users",
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        role: {
            type: DataTypes.ENUM("individual", "organization"),
            allowNull: false,
            defaultValue: "individual"
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false

        },

        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue:true
        },

        verificationToken: {
            type:DataTypes.STRING,
            allowNull:true
        },

        verificationTokenExpires:{
            type: DataTypes.DATE,
            allowNull:true
        }
    },
    {
        timestamps: true,
        tableName: "users"
    }
);

module.exports = Register;

