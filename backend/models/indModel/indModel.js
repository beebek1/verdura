const {DataTypes} = require("sequelize");
const {sequelize} = require("../../db/database");
const Register = require("../userModel");

const IndInfo = sequelize.define(
    "IndividualInfo",
    {
        ind_id:{
            type: DataTypes.INTEGER,
            references :{
                model: Register,
                key : "user_id"
            }
        },

        description: {
            type: DataTypes.STRING,
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

        total_campaigns_joined : {
            type : DataTypes.STRING
        }
    },
    {
        tableName : "indinfo",
        timestamps : true
    }
)
module.exports = IndInfo;