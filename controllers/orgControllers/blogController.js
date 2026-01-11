const {CreateBlog, Register, OrgInfo} = require('../../models/associations');

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

const getAllBlog = async(req, res) =>{

    try{
        const blogs = await CreateBlog.findAll({
            attributes: ["blog_id", "title", "category", "content", "cover_image", "upvotes", "badge", "createdAt"],
            include: {
                model: OrgInfo,
                attributes: ["logo_path"],
                include: {
                    model: Register,
                    attributes: ["username"]
                }
            }
        });

        if(blogs.length ===0){
            return res.status(500).json({
                message:" no blog found"
            })
        }

        return res.status(201).json({
            message: "blogs fetched successfully",
            blogs
        });
    }catch(error){
        return res.status(201).json({
            message: "something went wrong",
            error: error.message
        });
    }
}



module.exports = {blogPost, getAllBlog}