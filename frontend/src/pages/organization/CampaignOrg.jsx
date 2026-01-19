import React, { useState, useEffect } from 'react';
import { Search, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllCampaigns } from '../../services/api';
import {toast} from 'react-hot-toast';


const getStatusColor = (status) => {
  switch(status) {
    case "ACTIVE": return "bg-green-600";
    case "UPCOMING": return "bg-yellow-500";
    case "COMPLETED": return "bg-gray-600";
    default: return "bg-gray-400";
  }
};

export default function VerduraCampaign() {
  const [campaigns, setCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [loading, setLoading] = useState(true);
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

  // const campaigns = [
  //   {
  //     id: 1,
  //     title: 'Tree Plantation Drive',
  //     status: 'Active',
  //     volunteers: 20,
  //     statusColor: 'bg-green-600'
  //   },
  //   {
  //     id: 2,
  //     title: 'Beach Cleanup',
  //     status: 'Completed',
  //     volunteers: 130,
  //     statusColor: 'bg-gray-600'
  //   },
  //   {
  //     id: 3,
  //     title: 'Plastic Free City',
  //     status: 'Upcoming',
  //     volunteers: 20,
  //     statusColor: 'bg-yellow-500'
  //   }
  // ];

  const handleCreateCampaign = () => {
    navigate('/create-campaign');

    console.log("im here")
  };

 const filteredCampaigns = campaigns.filter(c => {
  const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesStatus = statusFilter === "All Status" || c.status === statusFilter.toUpperCase();
  return matchesSearch && matchesStatus;
});

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-96 flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200')"
        }}
      >
        <div className="max-w-7xl mx-auto px-8 w-full">
          <h2 className="text-white text-5xl font-bold mb-12">
            You have came across a long<br />way..
          </h2>
          <div className="flex gap-16">
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-lg">Active Campaigns</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">18 +</div>
              <div className="text-lg">Completed</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">450+</div>
              <div className="text-lg">Volunteer helped</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Search and Filter Bar */}
        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search Campaigns"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            <option>All Status</option>
            <option value="ACTIVE">Active</option>
            <option value="COMPLETED">Completed</option>
            <option value="UPCOMING">Upcoming</option>
          </select>
          <button 
          onClick={handleCreateCampaign}
          className="px-8 py-3 bg-green-800 text-white rounded-lg hover:bg-green-900 transition font-medium">
            CREATE CAMPAIGN
          </button>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCampaigns.map(c => (
            <div key={c.campaign_id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                  <span className={`inline-block px-4 py-1 ${getStatusColor(c.status)} text-white rounded-full text-sm font-medium`}>
                    {c.status}
                  </span>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Edit size={20} className="text-gray-600" />
                </button>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Seeking :</span> {c.volunteer} Volunteers
              </p>
              <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-900 transition font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
