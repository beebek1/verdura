const {DataTypes} = require("sequelize");
const {sequelize} = require("../../db/database");
const Register = require("../userModel");

const OrgInfo = sequelize.define(
    "OrgInfo",
    {
        org_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            type: DataTypes.INTEGER,
            onDelete: "CASCADE",
            allowNull: false,
            unique : true
        },

        description: {
            type: DataTypes.STRING,
            allowNull:true
        },

        PAN_no: {
            type: DataTypes.STRING,
            allowNull:true
        },
        
        verification_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull:false
        },
        

        logo_path: {
            type: DataTypes.STRING,
            allowNull:true
        },

        first_legal_document: {
            type: DataTypes.STRING,
            allowNull: true
        },
        second_legal_document: {
            type: DataTypes.STRING,
            allowNull: true
        },

        address: {
            type: DataTypes.STRING,
            allowNull:true
        },

        total_blogs: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:true
        },
        
        total_upvotes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false
        },

        total_volunteers: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false
        },
        
        total_campaigns: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false,
        }

    },
    {
        tableName : "orginfo",
        timestamps: true
    }
);

module.exports = OrgInfo;