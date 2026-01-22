import React, { useState } from 'react';
import { User, Mail, MapPin, Calendar,Clock, Award,  CalendarCheck,CalendarX, TrendingUp, Settings, ShieldX, ShieldCheck, Camera, Link, AlignEndVertical, X, Leaf, Target, ArrowBigUp, Users, Briefcase, FileText, Upload, Eye, Heart, MessageCircle, BarChart3 } from 'lucide-react';
import { useEffect } from 'react';
import { getIndById } from '../../services/api';
import tempImage from '../../assets/pollution.png'

// Mock organization data - would come from backend
const orgData = {
  profile: {
    name: "Aayush Kumar",
    email: "aayush.kumar@example.com",
    bio: "Passionate environmentalist dedicated to making a positive impact through community action and sustainable practices.",
    avatar: null,
    joinDate: "January 2024",
    location: {
      country: "Nepal",
      state: "Bagmati Province",
      city: "Pātan"
    }
  },
  stats: {
    campaignsJoined: 6,
    hoursContributed: 42,
    impactScore: 620,
    goalProgress: {
      current: 620,
      target: 1000,
      percentage: 62,
      estimatedCO2Offset: 3.8,
      aheadOfUsers: 78
    }
  },
  currentRank: {
    name: "Green Leaf",
    icon: "🌿",
    nextRank: "Forest Guardian",
    progressToNext: 45,
    rankLevels: ["Seedling", "Green Leaf", "Forest Guardian", "Tree Spirit", "Earth Champion"]
  },
  achievements: [
    { id: 1, name: "First Campaign", icon: "🎯", earned: true, date: "Jan 2024" },
    { id: 2, name: "Tree Warrior", icon: "🌳", earned: true, date: "Jan 2025" },
    { id: 3, name: "Clean Ocean", icon: "🌊", earned: true, date: "Jan 2025" },
    { id: 4, name: "100 Hours", icon: "⏰", earned: false, date: null },
    { id: 5, name: "Community Leader", icon: "👥", earned: false, date: null },
    { id: 6, name: "Carbon Crusher", icon: "💨", earned: false, date: null }
  ],
  campaigns: [
    {
      id: 1,
      title: "Tree Plantation Drive",
      hoursContributed: 9,
      nextMilestone: "Plant 1000 trees",
      status: "Active",
      progress: 62
    },
    {
      id: 2,
      title: "Community Cleanup",
      hoursContributed: 4,
      nextMilestone: "Collect 500kg waste",
      status: "Active",
      progress: 40
    }
  ],
  recentContributions: [
    {
      id: 1,
      action: "Planted 5 saplings",
      date: "Jan 20, 2025",
      campaign: "Tree Plantation Drive"
    },
    {
      id: 2,
      action: "Joined Beach Cleanup",
      date: "Jan 14, 2025",
      campaign: "Coastal Cleanup"
    },
    {
      id: 3,
      action: "Upvoted 'Why Tree Planting Matters'",
      date: "Jan 12, 2025",
      campaign: null
    }
  ],
  recentActivity: [
    { id: 1, action: "Published new blog: 'Tree Plantation Guide'", date: "2 days ago", icon: "📝" },
    { id: 2, action: "Launched Ocean Restoration Project", date: "5 days ago", icon: "🌊" },
    { id: 3, action: "Reached 400 total volunteers", date: "1 week ago", icon: "👥" }
  ],
  quickStats: {
    volunteers: 80,
    description: "Snapshot of recent activity"
  },
  preferences: {
    emailNotifications: true,
    campaignUpdates: true,
    weeklyDigest: false,
    marketingEmails: false,
    profileVisibility: "public"
  }
};

const ProfileHeader = ({ profile, isEditing, onEdit, onSave, onCancel }) => {
  const [localProfile, setLocalProfile] = useState(profile);
  const [imageHover, setImageHover] = useState(false);

  const handleChange = (field, value) => {
    setLocalProfile(prev => ({ ...prev, [field]: value }));
  };

  // console.log("consolel fuck",profile)

  const handleSave = () => {
    onSave(localProfile);
  };

  return (
    <div className="relative group mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="relative group/avatar">
            <div 
              className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-emerald-500/30 cursor-pointer"
              onMouseEnter={() => setImageHover(true)}
              onMouseLeave={() => setImageHover(false)}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
{              console.log(profile)
}              {profile.OrgInfo.logo_path ? (
                <img src={profile.OrgInfo.logo_path} alt="image" className="w-full h-full object-cover rounded-2xl" />
              ) : (
                profile.username.substring(0, 2).toUpperCase()
              )}
              {imageHover && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300">
                  <Camera className="w-6 h-6 text-white" />
                  <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Change Logo
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={localProfile.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="text-3xl font-bold text-gray-800 bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 mb-2 w-full focus:outline-none focus:border-emerald-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {profile.username}
                  </h1>
                )}
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                  {profile.OrgInfo.verification_status === true ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      <p>Verified</p>
                    </span> ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-rose-100 text-rose-700 rounded-full border border-rose-200 font-medium">
                      <ShieldX className="w-4 h-4" />
                      <p>Unverified</p>
                    </span>
                    )
                  
                  }

                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    {profile.address}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Founded {new Date(profile.createdAt).toLocaleDateString("en-GB", {
                        month: "short",
                        year: "numeric"
                        })}
                  </span>
                </div>

                {isEditing ? (
                  <textarea
                    value={localProfile.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows={3}
                    className="text-gray-600 text-sm bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-emerald-500"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {profile.OrgInfo.description}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                  <button
                    onClick={ () => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("link copied")
                    }}
                    className="p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Link className="w-5 h-5 text-emerald-600" />
                  </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const StatsCard = ({ icon: Icon, label, value, sublabel, color = "from-emerald-500 to-teal-500" }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 text-center">
      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {value}
      </div>
      <div className="text-sm text-gray-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          {sublabel}
        </div>
      )}
    </div>
  </div>
);   


const CampaignCard = ({ campaign }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            {campaign.title}
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-600" />
              {campaign.volunteer} volunteers
            </span>
            <span className="flex items-center gap-1.5">
              <AlignEndVertical className="w-4 h-4 text-emerald-600" />
              {campaign.category}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarCheck className="w-4 h-4 text-emerald-600" />
              Started   {new Date(campaign.start_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short"
                      })}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarX className="w-4 h-4 text-emerald-600" />
              End Date   {new Date(campaign.end_date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short"
                      })}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
          Edit
        </button>
      </div>
    </div>
  </div>
);


export default function IndividualProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(orgData.preferences);
  const [formData, setFormData] = useState(orgData.profile);
  const [indDetail, setindDetail] =useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchUserDetail = async() =>{

      try{
        const res = await getIndById();

        setindDetail(res.data.individual)

      }catch(err){
        console.log("failed to fetch organization detail", err)
      }finally{
        setLoading(false)
      }
    }
    fetchUserDetail();
    
  }, []);

  if(loading) return <div><p>loading wait a min</p></div>
  if(!indDetail) return <div><p>didn't get any data for this individual</p></div>

  const handleSaveProfile = (updatedProfile) => {
    console.log('Saving profile:', updatedProfile);
    setIsEditing(false);
  };

  // console.log(indDetail.name, indDetail.)

    //for splitting address
  const parts = indDetail.IndividualInfo.address.split(" ");
  const country = parts[0]
  const state = parts[1]
  const city = parts[2]
  const street = parts[3]

  // const docPaths = indDetail.OrgInfo.legal_documents ? formData.legalDocs.split(' ') : [];

  console.log(country, state, city, street)

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLocationChange = (field, value) => {
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [field]: value
      }
    });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'profile', label: 'Organization Info', icon: User },
    { id: 'dangerZone', label: 'Danzer Zone', icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <ProfileHeader 
            profile={indDetail}
            onSave={handleSaveProfile}
            onCancel={() => setIsEditing(false)}
          />

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-emerald-300'
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard 
                  icon={Leaf} 
                  label="Campaigns Joined" 
                  value={indDetail.IndividualInfo.total_campaigns_joined}
                  color="from-emerald-500 to-teal-500"
                />
                <StatsCard 
                  icon={Clock} 
                  label="Hours Contributed" 
                  value={indDetail.IndividualInfo.total_campaigns_joined}
                  color="from-teal-500 to-emerald-600"
                />
                <StatsCard 
                  icon={Award} 
                  label="Impact Score" 
                  value={indDetail.IndividualInfo.total_campaigns_joined}
                  color="from-emerald-600 to-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Recent Campaigns */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Active Campaigns
                      </h2>
                      <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                        View All <span>→</span>
                      </button>
                    </div>
                    <div className="space-y-4">
                      {indDetail?.IndividualInfo?.total_campaigns_joined?.slice(0, 2).map(campaign => (
                        <CampaignCard key={campaign.campaign_id} campaign={campaign} />
                      ))}
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Recent Activity
                      </h2>
                      <div className="space-y-4">
                        {orgData.recentActivity.map(activity => (
                          <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0 group/item hover:bg-gray-50 -mx-4 px-4 py-2 rounded-lg transition-colors duration-300">
                            <div className="text-2xl">{activity.icon}</div>
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {activity.action}
                              </p>
                              <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {activity.date}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* right side cards */}
                <div>
                  {/* Current Rank Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-teal-200/60 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg">
                      <h2 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Current Rank
                      </h2>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-6xl drop-shadow-lg">{orgData.currentRank.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {orgData.currentRank.name}
                          </h3>
                          <p className="text-emerald-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Next: {orgData.currentRank.nextRank}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-emerald-50" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Rank is based on your cumulative Impact Score.
                      </p>
                    </div>
                  </div>


                  {/* Articles Upvoted */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                      <h2 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Articles You Upvoted
                      </h2>
                      <div className="space-y-3">
                        {orgData.articles.map((article, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 transition-all duration-300 group/article cursor-pointer"
                          >
                            <p className="text-sm font-medium text-gray-800 flex-1 group-hover/article:text-emerald-700 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {article.title}
                            </p>
                            <span className="text-sm text-emerald-600 ml-3 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                              ▲ {article.upvotes}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (

                <div className="min-h-screen bg-gray-50">

                  {/* Main Container */}
                  <div className="max-w-4xl mx-auto px-4 py-10">
                    <div className="bg-white rounded-lg shadow-md p-8">

                      {/* Profile Section */}
                      <div className="flex flex-col md:flex-row gap-8 mb-10">
                        {/* Left Side - Form Fields */}
                        <div className="flex-1 space-y-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Organization Bio
                            </label>
                            <textarea
                              name="bio"
                              value={indDetail.OrgInfo.description}
                              onChange={handleInputChange}
                              placeholder="Tell us about your organization..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent resize-none h-24"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={indDetail.email}
                              onChange={handleInputChange}
                              placeholder="e.g necessary cleaner"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Organization Full Name
                            </label>
                            <input
                              type="text"
                              name="orgName"
                              value={indDetail.username}
                              onChange={handleInputChange}
                              placeholder="e.g necessary cleaner"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Address Section */}
                      <div className="mb-10">
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Address
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <input
                            type="text"
                            name="country"
                            value={country}
                            onChange={handleInputChange}
                            placeholder="Country"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                          />
                          <input
                            type="text"
                            name="state"
                            value={state}
                            onChange={handleInputChange}
                            placeholder="State"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                          />
                          <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={handleInputChange}
                            placeholder="City"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                          />
                        </div>
                        <input
                          type="text"
                          name="street"
                          value={street}
                          onChange={handleInputChange}
                          placeholder="Street"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                        />
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-end mb-8">
                        <button
                          onClick={handleSaveProfile}
                          className="px-8 py-3 bg-[#2d5f4d] text-white font-semibold rounded-md hover:bg-[#1f4035] transition-colors"
                        >
                          SAVE CHANGES
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )};

          {activeTab === 'dangerZone' && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-orange-100/50 rounded-2xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                <h2 className="text-xl font-bold text-red-600 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Danger Zone
                </h2>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-red-50 border border-gray-300 hover:border-red-300 rounded-lg text-red-600 font-medium transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Log Out
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-red-50 border border-gray-300 hover:border-red-300 rounded-lg text-red-600 font-medium transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}