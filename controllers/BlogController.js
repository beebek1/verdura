const CreateBlog = require("../models/orgModel/createBlogModel");

const blogPost = async(req, res) =>{
    try{

        return res.json({
            message: "admin logged in successfully"
        })
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
        cover_image
    });

}catch(error){
    return res.status(500).json({
        message: "server side error",
        error : error.message
    })
}
}

module.exports = blogPost;