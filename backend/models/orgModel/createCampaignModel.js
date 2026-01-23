const { DataTypes, DatabaseError } = require("sequelize");
const {sequelize} = require("../../db/database");
const OrgInfo = require("./orgModel");

const CreateCampaign = sequelize.define(
    "Campaigns",
    {
        campaign_id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        org_id:{
            type:DataTypes.INTEGER,
            references : {
                model : OrgInfo,
                key : "org_id"
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
        },

        image : {
            type : DataTypes.STRING,
        }
    },
    {
        tableName: "campaigns",
        timestamps: true
    }
);

module.exports = CreateCampaign;