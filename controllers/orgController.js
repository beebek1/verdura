const CreateBlog = require("../models/orgModel/createBlogModel");
const CreateCampaign = require("../models/orgModel/createCampaignModel");

const blogPost = async(req, res) =>{
    try{

    const { title, content, status, category, cover_image} = req.body;

    if(!title || !content){
        return res.status(401).json({
            message: "title and content cannot be empty"
        });
    }

    await CreateBlog.create({
        title,
        content,
        status,
        category,
        cover_image,
        org_id: req.user.id
    });

    return res.status(201).json({
        message: "blog created success"
    })

    }catch(error){
        return res.status(500).json({
            message: "server side error",
            error : error.message
        })
    }
}

const campaignPost = async(req, res) =>{
    const{title, description, category, start_date, end_date} = req.body;

    if(!title || !description ||!start_date ||!end_date ){
        return res.status(400).json({
            message: "fill all the fields"
        });
    }

    await CreateCampaign.create({
        title,
        description,
        category,
        start_date : new Date(start_date),
        end_date: new Date(end_date),
        org_id : req.user.id
    })

    return res.status(201).json({
        message: "campaigns added"
    })
}





module.exports = {blogPost, campaignPost};