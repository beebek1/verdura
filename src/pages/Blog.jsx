import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import BlogOrg from './organization/BlogOrg';
import authRole from '../pages/protect/authRole';
import { getAllBlogs } from '../services/api';

const Blogs = () => {

  const role = authRole()

  const[blogs, setBlogs] = useState([])
  const[loading, setLoading] = useState(true)

  //for formatted date
  const formattedDate =(date)=> new Date(date).toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short"
  });

  //showing blogs through api
  useEffect(()=>{
    const fetchBlogs = async()=>{
      try{
        const data = await getAllBlogs();
        setBlogs(data);
      }catch(error){
        console.error("Failed to fetch blogs", error);
      }finally{
        setLoading(false)
      }
    };

    fetchBlogs();
  },[]);

  if(loading){
    return(
      <div className="min-h-screen flex items-center justify-center">
          Loading blogs...
        </div>
    )
  }

  // console.log(blogs)

  return (
    <>
    {/* {role === "organization" && <BlogOrg/>} */}
    {role === "individual" &&

      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Blogs, Spotlights & News
          </h1>
          
          <div className="space-y-4">
            {blogs.map((blog) => (
              <BlogCard
                key ={blog.blog_id}
                id={blog.blog_id}
                author={blog.OrgInfo?.User?.username}
                authorImage={blog.OrgInfo?.logo_path}   
                badge={blog.badge}
                title={blog.title}
                content={blog.content}
                date={formattedDate(blog.createdAt)}
                upvotes={blog.upvotes}
                coverImage={blog.cover_image}
              />
            ))}
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default Blogs;