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
            defaultValue:false
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

 Register.addHook('afterCreate', async (user, options) => {
    if (user.role === 'organization') {
        try {
            const OrgInfo = sequelize.models.OrgInfo; 
            
            await OrgInfo.create({
                user_id: user.user_id,
            });
            console.log(`OrgInfo created for user ${user.user_id}`);
        } catch (error) {
            console.error("Error creating OrgInfo automatically:", error);
        }
    }

    if (user.role === 'individual') {
        try {
            const IndInfo = sequelize.models.IndividualInfo; 
            
            await IndInfo.create({
                user_id: user.user_id,
            });
            console.log(`OrgInfo created for user ${user.user_id}`);
        } catch (error) {
            console.error("Error creating OrgInfo automatically:", error);
        }
    }
});

module.exports = Register;

