const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/database");
const OrgInfo = require("./orgModel");

const CreateBlog = sequelize.define(
    "Blogs",
    {
        blog_id:{
            type:DataTypes.INTEGER,
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

        status: {
            type: DataTypes.ENUM("DRAFT", "PUBLISHED", "ARCHIVED"),
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
            type: DataTypes.TEXT,
        },
        
        upvotes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull:false
        },
        
        badge: {
            type: DataTypes.STRING,
            defaultValue: "Blog",
            allowNull:false,
        }
    },
    {
        tableName: "orgblogs",
        timestamps: true
    }
)

module.exports = CreateBlog;