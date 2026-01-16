const {CreateBlog, Register, OrgInfo} = require('../../models/associations');

const blogPost = async(req, res) =>{
    try{

    

    const { title, content, status, category, cover_image} = req.body;

    if(!title || !content){
        return res.status(401).json({
            message: "title and content cannot be empty"
        });
    }

    const org = await OrgInfo.findOne({ where: { user_id: req.user.id } });

    if (!org) {
      return res.status(400).json({ message: "Organization not found for this user" });
    }

    const blog = await CreateBlog.create({
        title,
        content,
        status,
        category,
        cover_image,
        org_id: org.org_id
    });
    console.log("Blog created:", blog);

    return res.status(201).json({
        message: "blog created success"
    })

    }catch(error){
       console.error("Error creating blog:", error);
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
            return res.status(404).json({
                success: false,
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


const upvoteBlog = async (req, res) => {
    try {
        const { blog_id } = req.params;

        // Find the blog and increment the upvotes by 1
        const blog = await CreateBlog.findByPk(blog_id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Sequelize utility to increment a specific field
        await blog.increment('upvotes', { by: 1 });

        // Reload the blog to get the updated count
        await blog.reload();

        return res.status(200).json({
            message: "Upvoted successfully",
            currentUpvotes: blog.upvotes
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error updating upvotes",
            error: error.message
        });
    }
};



module.exports = {blogPost, getAllBlog, upvoteBlog}