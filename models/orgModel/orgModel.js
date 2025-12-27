const {DataTypes} = require("sequelize");
const {sequelize} = require("../../db/database");
const Register = require("../userModel");

const OrgInfo = sequelize.define(
    "OrgInfo",
    {
        org_id: {
            type: DataTypes.INTEGER,
            references : {
                model: Register,
                key: "id"
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
        
        total_views: {
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

//associations for better queries

OrgInfo.belongsTo(Register, {foreignKey: "org_id", onDelete : "CASCADE"});
Register.hasOne(OrgInfo, {foreignKey: "org_id", onDelete : "CASCADE"});

module.exports = OrgInfo;