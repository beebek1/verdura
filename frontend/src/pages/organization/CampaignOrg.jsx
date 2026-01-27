import React, { useState, useEffect } from 'react';
import { Search, Edit, Users, Calendar, Trash2 } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';
import { getAllCampaigns,deleteCampaign } from '../../services/api';
import toast, {Toaster} from 'react-hot-toast';


const getStatusColor = (status) => {
  switch(status) {
    case "ACTIVE": return "bg-green-600";
    case "UPCOMING": return "bg-yellow-500";
    case "COMPLETED": return "bg-gray-600";
    default: return "bg-gray-400";
  }
};

const getStatusBadgeColor = (status) => {
  switch(status) {
    case "ACTIVE": return "bg-emerald-500";
    case "UPCOMING": return "bg-amber-500";
    case "COMPLETED": return "bg-slate-500";
    default: return "bg-gray-400";
  }
};

export default function VerduraCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaign = async () => {
      try{
        const data = await getAllCampaigns();
        setCampaigns(data);
      }catch(error){
        toast.error(error?.response?.data?.message || "Failed to fetch campaigns");
      }finally{
        setLoading(false);
      };
    }
    fetchCampaign();
  }, []);

  if (loading) return <div className="text-center py-20">Loading campaigns...</div>;

  const handleCreateCampaign = () => {
    navigate('/create-campaign');
    console.log("im here")
  };

  // const handleEdit = (campaignId) => {
  //   console.log('Editing campaign:', campaignId);
  //   // navigate to edit page
  // };

 const handleDelete = async (campaignId) => {
    console.log('Delete clicked for campaign ID:', campaignId);
    
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      try {
        console.log('Calling deleteCampaign API with ID:', campaignId);
        const response = await deleteCampaign(campaignId);
        console.log('Delete response:', response);
        
        // Remove the deleted campaign from state
        setCampaigns(prevCampaigns => prevCampaigns.filter(campaign => campaign.campaign_id !== campaignId));

        // Update stats after deletion
        const deletedCampaign = campaigns.find(c => c.campaign_id === campaignId);
        
        toast.success('Campaign deleted successfully!');
      } catch (err) {
        console.error('Full delete error:', err);
        console.error('Error response:', err.response);
        toast.error(err.response?.data?.message || 'Failed to delete campaign');
      }
    }
  };

  const handleViewDetails = (campaignId) => {
    console.log('Viewing campaign details:', campaignId);
    // navigate to details page
  };

 const filteredCampaigns = campaigns.filter(c => {
  const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesStatus = statusFilter === "All Status" || c.status === statusFilter.toUpperCase();
  return matchesSearch && matchesStatus;
});

  const activeCampaigns = campaigns.filter(c => c.status === 'ACTIVE').length;
  const completedCampaigns = campaigns.filter(c => c.status === 'COMPLETED').length;
  const totalVolunteers = campaigns.reduce((sum, c) => sum + (c.volunteer || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-100">
      <Toaster/>
      {/* Hero Section with Background Image */}
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200)',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <h1 className="text-white text-5xl font-bold mb-16">
            You have came across a long<br />way..
          </h1>
          
          {/* Glass Morphism Stats Cards */}
          <div className="flex flex-wrap gap-8">
            {/* Active Campaigns Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl px-10 py-8 min-w-[280px] hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{activeCampaigns}</div>
                  <div className="text-white/90 text-base font-semibold tracking-wide">Active Campaigns</div>
                </div>
              </div>
            </div>
            
            {/* Completed Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl px-10 py-8 min-w-[280px] hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{completedCampaigns}+</div>
                  <div className="text-white/90 text-base font-semibold tracking-wide">Completed</div>
                </div>
              </div>
            </div>

            {/* Volunteers Helped Card */}
            <div className="group bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl px-10 py-8 min-w-[280px] hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-2xl p-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 drop-shadow-lg">{totalVolunteers}+</div>
                  <div className="text-white/90 text-base font-semibold tracking-wide">Volunteer helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search campaigns by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer transition-all"
            >
              <option>All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="COMPLETED">Completed</option>
              <option value="UPCOMING">Upcoming</option>
            </select>

            {/* Create Campaign Button */}
            <button 
              onClick={handleCreateCampaign}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Campaign
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCampaigns.map(c => (
            <div key={c.campaign_id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {c.title}
                    </h3>
                    <span className={`inline-block px-4 py-1.5 ${getStatusBadgeColor(c.status)} text-white rounded-full text-xs font-bold shadow-sm`}>
                      ● {c.status}
                    </span>
                  </div>
                </div>

                {/* Volunteers Info */}
                <div className="bg-teal-50 rounded-xl p-4 mb-6 border border-teal-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-100 rounded-lg p-2.5">
                      <Users className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Seeking Volunteers</p>
                      <p className="text-2xl font-bold text-teal-700">{c.volunteer}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleViewDetails(c.campaign_id)}
                    className="flex-1 px-5 py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </button>

                  {/* Edit */}
               <Link 
                  to={`/create-campaign/${c.campaign_id}`}
                  className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                  state={{
                    campaign_id: c.campaign_id,
                    title: c.title,
                    description: c.description,
                    category: c.category,
                    volunteer: c.volunteer,
                    status: c.status,
                    start_date: c.start_date,
                    end_date: c.end_date
                  }}
                >
                  <Edit size={18} />
                </Link>
                  <button 
                    onClick={() => handleDelete(c.campaign_id)}
                    className="px-4 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center border border-red-200"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCampaigns.length === 0 && !loading && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-12 max-w-md mx-auto">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-md">
                <Calendar className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No campaigns found</h3>
              <p className="text-gray-600 mb-6">Start making a difference by creating your first campaign!</p>
              <button
                onClick={handleCreateCampaign}
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl hover:from-teal-700 hover:to-teal-800 transition-all shadow-md"
              >
                Create Your First Campaign
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}