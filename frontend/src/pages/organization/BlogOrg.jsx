import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBlogs, deleteBlog,updateBlog} from '../../services/api';
import toast, { Toaster } from 'react-hot-toast';

export default function BlogList() {
  const[blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
  totalBlogs: 0,
  totalUpvotes: 0
});

  const navigate = useNavigate();

  useEffect(() =>{
    const fetchBlogs = async () => {
        try{
        const data = await getAllBlogs();

        const mappedBlogs = data.map(blog => ({
        id: blog.blog_id,
        title: blog.title,
        content: blog.content,
        excerpt: blog.content?.slice(0, 150),
        image: blog.cover_image || "https://via.placeholder.com/400x250",
        upvotes: blog.upvotes,
        badge: blog.badge,
        tags: blog.category ? [blog.category] : ["General"],
        status: blog.status || 'published',
      }));
        setBlogs(mappedBlogs);
        const totalBlogs = mappedBlogs.length;
        const totalUpvotes = mappedBlogs.reduce((sum, b) => sum + b.upvotes, 0);
        setStats({
          totalBlogs,
          totalUpvotes
        });
      }catch(err){
        toast.error(response?.data?.error || "Failed to fetch blogs");
        setError("Failed to load blogs");
      }finally{
        setLoading(false);
      }
    };
    fetchBlogs();
  },[]);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleCreateBlog = () => {
    navigate('/create-Blog');
    console.log("im here")
  };

  const handleDelete = async (blogId) => {
  console.log('Delete clicked for blog ID:', blogId);
  
  if (window.confirm('Are you sure you want to delete this blog?')) {
    try {
      console.log('Calling deleteBlog API with ID:', blogId);
      const response = await deleteBlog(blogId);
      console.log('Delete response:', response);
      
      // Remove the deleted blog from state
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== blogId));
      
      // Update stats
      const deletedBlog = blogs.find(b => b.id === blogId);
      setStats(prevStats => ({
        totalBlogs: prevStats.totalBlogs - 1,
        totalUpvotes: prevStats.totalUpvotes - (deletedBlog?.upvotes || 0)
      }));
      
      toast.success('Blog deleted successfully!');
    } catch (err) {
      console.error('Full delete error:', err);
      console.error('Error response:', err.response);
      toast.error(err.response?.data?.message || 'Failed to delete blog');
    }
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      <Toaster/>
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8 relative z-10">
          <h1 className="text-white text-5xl font-bold mb-16">
            Let others know about your<br />existence
          </h1>
          
          {/* Glass Morphism Stats Cards */}
          <div className="flex flex-wrap gap-8">
            {/* Total Blogs Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl px-10 py-8 min-w-[320px] hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{stats.totalBlogs}</div>
                  <div className="text-white/90 text-base font-semibold tracking-wide">Published Articles</div>
                </div>
              </div>
            </div>
            
            {/* Total Upvotes Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl px-10 py-8 min-w-[320px] hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{stats.totalUpvotes}+</div>
                  <div className="text-white/90 text-base font-semibold tracking-wide">Community Upvotes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-8 py-5">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, content, or tags..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer transition-all"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>

            {/* Create Blog Button */}
            <button
              onClick={handleCreateBlog}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Blog
            </button>
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="container mx-auto px-8 py-10">
        <div className="grid grid-cols-1 gap-6">
          {blogs?.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="flex flex-col md:flex-row">
                {/* Blog Image */}
                <div className="md:w-80 h-56 md:h-auto overflow-hidden relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                      blog.status === 'published' 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-amber-500 text-white'
                    }`}>
                      {blog.status === 'published' ? '● Published' : '● Draft'}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors flex-1">
                        {blog.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-2">
                      {blog.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-100"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer with Stats and Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-6">
                      {/* Upvotes */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="bg-teal-50 rounded-lg p-2">
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-gray-900">{blog.upvotes}</span>
                        <span className="text-sm">upvotes</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <Link to={`/create-blog/${blog.id}`}
                        className="px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center gap-2 shadow-sm"
                        state={{
                          id: blog.id,
                          title : blog.title,
                          status : blog.status,
                          tags : blog.tags,
                          content : blog.content,
                          coverImage : blog.image
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="px-5 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium flex items-center gap-2 border border-red-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 max-w-md mx-auto">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No blogs yet</h3>
              <p className="text-gray-600 mb-6">Start sharing your thoughts with the world!</p>
              <button
                onClick={handleCreateBlog}
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-md"
              >
                Create Your First Blog
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}