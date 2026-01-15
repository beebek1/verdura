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
            references : {
                model: Register,
                key: "user_id"
            },
            onDelete: "CASCADE",
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull:false
        },

        PAN_no: {
            type: DataTypes.STRING,
            allowNull:false
        },
        
        verification_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull:false
        },
        

        logo_path: {
            type: DataTypes.STRING,
            allowNull:false
        },

        legal_documents: {
            type: DataTypes.STRING,
            allowNull: true
        },

        address: {
            type: DataTypes.STRING,
            allowNull:false
        },

        total_blogs: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false
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