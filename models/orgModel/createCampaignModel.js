const { DataTypes } = require("sequelize");
const {sequelize} = require("../../db/database");
const Register = require("../userModel");

const CreateCampaign = sequelize.define(
    "CreateCampaign",
    {
        campaign_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        org_id:{
            type:DataTypes.INTEGER,
            references : {
                model : Register,
                key : "id"
            },
            onDelete : "CASCADE",
            allowNull: false
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },

        volunteer: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },

        status: {
            type: DataTypes.ENUM("COMPLETED", "ACTIVE", "UPCOMING"),
            defaultValue:"UPCOMING",
            allowNull:false
        },

        category: {
            type: DataTypes.STRING
        },

        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        end_date: {
            type:DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName: "campaigns",
        timestamps: true
    }
);

module.exports = CreateCampaign;