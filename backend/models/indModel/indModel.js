const {DataTypes} = require("sequelize");
const {sequelize} = require("../../db/database");

const IndInfo = sequelize.define(
    "IndividualInfo",
    {
        ind_id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },

        description: {
            type: DataTypes.STRING,
            allowNull:false
        },

        logo_path: {
            type: DataTypes.STRING,
            allowNull:true
        },
        
        address: {
            type: DataTypes.STRING,
            allowNull:false
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