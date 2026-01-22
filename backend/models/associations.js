const Register = require("./userModel");
const OrgInfo = require("./orgModel/orgModel");
const CreateCampaigns = require("./orgModel/createCampaignModel");
const CreateBlog = require("./orgModel/createBlogModel");
const IndInfo = require("./indModel/indModel");
const UpvotesModel = require("./indModel/upvotesModel");
const CampaignVolunteer = require("./indModel/campaignVolunteer");

// One user has one org info
Register.hasOne(OrgInfo, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});
OrgInfo.belongsTo(Register, {
  foreignKey: "user_id"
});

// One user has one individual info
Register.hasOne(IndInfo, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});
IndInfo.belongsTo(Register, {
  foreignKey: "user_id"
});

// One org can create many campaigns
OrgInfo.hasMany(CreateCampaigns, {
  foreignKey: "org_id",
  onDelete: "CASCADE"
});
CreateCampaigns.belongsTo(OrgInfo, {
  foreignKey: "org_id"
});

// One org can create many blogs
OrgInfo.hasMany(CreateBlog, {
  foreignKey: "org_id",
  onDelete: "CASCADE"
});
CreateBlog.belongsTo(OrgInfo, {
  foreignKey: "org_id"
});

Register.belongsToMany(CreateBlog,{
  through : UpvotesModel,
  foreignKey : "user_id",
  as : "upvotedArticles"
})

CreateBlog.belongsToMany(Register,{
  through : UpvotesModel,
  foreignKey : "blog_id",
  as : "upvoters"
})

Register.belongsToMany(CreateCampaigns, {
  through: CampaignVolunteer,
  foreignKey: "user_id",
  as: "joinedCampaigns" 
});

CreateCampaigns.belongsToMany(Register, {
  through: CampaignVolunteer,
  foreignKey: "campaign_id",
  as: "participants"
});

module.exports = {
  Register,
  OrgInfo,
  IndInfo,
  CreateCampaigns,
  CreateBlog
};