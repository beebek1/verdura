const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/database");

const CampaignParticipant = sequelize.define(
    "CampaignParticipant",
    {
        campaigns_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        tableName: "campaign_participants",
        timestamps: true
    }
);

module.exports = CampaignParticipant;