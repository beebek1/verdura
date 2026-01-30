import React, { useState, useEffect } from 'react';
import coverPic from '../assets/coverpic.png';
import footerImage from '../assets/footerImage.jpeg';
import cleanImage from '../assets/clean.png';
import pollutionImage from '../assets/pollution.png';
import deadImage from '../assets/dead.png';
import { getAllBlogs} from '../services/api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

// ADDED this useEffect to fetch blogs from database
useEffect(() => {
  const fetchBlogs = async () => {
  try {
    const data = await getAllBlogs();
    const mappedBlogs = data
      .filter(blog => blog.cover_image) // Only include blogs with images
      .map(blog => ({
        id: blog.blog_id,
        title: blog.title,
        image: blog.cover_image,
        excerpt: blog.content?.slice(0, 150) + '...',
      }));
    setBlogs(mappedBlogs);
  } catch (err) {
    console.error("Failed to load blogs", err);
  } finally {
    setLoading(false);
  }
};
  fetchBlogs();
}, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full">
        {/* Background Image */}
        <img
          src={coverPic}
          alt="Home page cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%), linear-gradient(to right, rgba(0,0,0,0.6) 20%, transparent 90%)",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col gap-6 pt-[17vh] pl-20 max-w-3xl">
          <div className="border-b-2 border-l-2 border-yellow-600 w-fit px-3 py-1">
            <h5 className="text-white font-bold tracking-widest text-sm">ACT NOW</h5>
          </div>

          <h1 className="text-white text-4xl font-bold leading-tight tracking-wide">
            This Earth Season, stand<br />
            with nature and restore<br />
            a planet rapidly losing its<br />
            balance
          </h1>

          <button className="mt-4 w-fit px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold tracking-wider text-sm transition">
            Get Started →
          </button>
        </div>

          {/* ================= SEE MORE STRIP - NOW SHOWING BLOGS ================= */}
<div className="absolute -bottom-32 left-0 right-0 z-10 px-20">
  <div className="flex items-center gap-6 mb-6">
    <h5 className="text-white font-bold text-sm tracking-wider">LATEST BLOGS</h5>
    <div className="flex-1 h-[1px] bg-white/50" />
  </div>

  <div className="flex gap-8 overflow-hidden">
    {loading ? (
      <p className="text-white">Loading blogs...</p>
    ) : blogs.length > 0 ? (
      blogs.slice(0, 5).map((blog) => (
        <Link 
          key={blog.id}
          to="/blogs"
          className="bg-white flex-shrink-0 w-80 overflow-hidden shadow-lg cursor-pointer 
                     hover:shadow-2xl hover:scale-105 hover:-translate-y-2 
                     transition-all duration-300 ease-in-out rounded-lg group block"
        >
          <div className="overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-gray-900 font-bold text-base mb-3 group-hover:text-yellow-600 transition-colors duration-300">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>
        </Link>
      ))
    ) : (
      <p className="text-white">No blogs available yet.</p>
    )}
  </div>
</div>
      </section>

      {/* ================= SPACER ================= */}
      <div className="h-64 bg-white"></div>

      {/* ================= IMPACT STATS SECTION ================= */}
      <section className="relative h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200"
          alt="Environmental workers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 h-full flex items-center justify-around px-20">
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-2">69 k+</h2>
            <p className="text-xl">Trees Planted</p>
          </div>
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-2">8 +</h2>
            <p className="text-xl">Rivers Cleaned</p>
          </div>
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-2">467kg +</h2>
            <p className="text-xl">Trash Picked</p>
          </div>
        </div>
      </section>

      {/* ================= FULL FOREST IMAGE ================= */}
      <section className="w-full h-[900px]">
        <img
          src={footerImage}
          alt="Misty forest"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Oswald:wght@400;700&display=swap');
      `}</style>
    </div>
  );
};

export default Home;