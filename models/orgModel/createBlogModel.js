const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/database");
const Register = require("../userModel");

const CreateBlog = sequelize.define(
    "OrgCreateBlog",
    {
        blog_id:{
            type:DataTypes.INTEGER,
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

        status: {
            type: DataTypes.ENUM("DRAFT", "PUBLISHED"),
            defaultValue:"DRAFT",
            allowNull:false
        },

        category: {
            type: DataTypes.STRING
        },

        content: {
            type: DataTypes.TEXT,
        },

        cover_image: {
            type: DataTypes.STRING,
        },
        
        upvotes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false
        },
        
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false,
        }
    },
    {
        tableName: "orgblogs",
        timestamps: true
    }
)

module.exports = CreateBlog;