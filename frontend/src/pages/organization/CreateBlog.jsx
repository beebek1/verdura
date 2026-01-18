import React, { useState } from 'react';
import { createBlog } from '../../services/api';//
import { useNavigate } from 'react-router-dom';//

export default function CreateBlog() {
  const navigate = useNavigate();//
  const [formData, setFormData] = useState({
    title: '',
    status: '',
    tags: '',
    content: ''
  });
  const [coverImage, setCoverImage] = useState(null);
    const [loading, setLoading] = useState(false); // 
  const [error, setError] = useState(''); //

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if(!formData.title || !formData.content){
      setError("title and content are required");
      return;
    }
    setLoading(true);
    setError('');
    try{
      const response = await createBlog({
        title: formData.title,
        content: formData.content,
        status: formData.status || 'DRAFT',
        category: formData.tags,
        cover_image: coverImage || ''
      });
      console.log("Bolg created successfullt:", response)
      alert('Bolg created successfully');

      handleCancel();

      navigate('/blogs');
    }catch(error){
      console.error("failed to create blog:", error);
      setError(error.response?.data?.message || 'failed to create blog. Please try again')
    }finally{
      setLoading(false);
    }
  };


  const handleCancel = () => {
    setFormData({
      title: '',
      status: '',
      tags: '',
      content: ''
    });
    setCoverImage(null);
    setError('');//
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="container mx-auto px-8">
          <h2 className="text-white text-4xl font-bold mb-8">
            Let others know about your<br />existence
          </h2>
          
          {/* Stats */}
          <div className="flex gap-24">
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">25</div>
              <div className="text-sm">Total Blogs</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">4500+</div>
              <div className="text-sm">Total Views</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-1">1200+</div>
              <div className="text-sm">Total Upvotes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-8 py-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-8">Create New Blog</h3>
        //
        {/* Error Box */}
        {
          error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )
        }
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Blog Title */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Blog Title <span className="text-red-500">*</span>//
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. planetary cleaner"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white text-gray-500"
                >
                  <option value="">Select Status</option>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </div>

              {/* Tags / Category */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Tags / Category
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g. Environment, Plantation..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Content <span className="text-red-500">*</span>//
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  maxLength={10000}
                  rows={8}
                  placeholder="write full long here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.content.length}/10000
                </div>
              </div>
            </div>

            {/* Right Column - Upload Cover Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Upload Cover Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center h-96 bg-gray-50">
                {coverImage ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={coverImage} 
                      alt="Cover preview" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      onClick={() => setCoverImage(null)}
                      className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 mb-2">Drop your image here or</p>
                    <label className="text-teal-600 hover:text-teal-700 cursor-pointer font-medium">
                      Browse
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
                onClick={handleCancel}
                disabled={loading}
                className="px-8 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition-colors uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-900 transition-colors uppercase text-sm disabled:bg-teal-600 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}