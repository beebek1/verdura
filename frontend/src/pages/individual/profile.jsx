import { useRef, useState } from "react";
import { User, Mail, MapPin, Calendar,Clock, Award,  CalendarCheck,CalendarX, TrendingUp, Settings, ShieldX, ShieldCheck, Camera, Link, AlignEndVertical, X, Leaf, Target, ArrowBigUp, Users, Briefcase, FileText, Upload, Eye, Heart, MessageCircle, BarChart3, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { getIndById, getIndRecentActivity, updateIndPfp, updateIndProfile } from '../../services/api';
import { useNavigate } from 'react-router-dom';

// Mock individual data - would come from backend
const RANKS = [
  { name: "Seedling", icon: "🌱", min: 0, description: "You are just starting, full of curiosity and potential." },
  { name: "Sprout", icon: "🌿", min: 500, description: "Your small efforts begin to grow, reaching toward new possibilities." },
  { name: "Tender Shoot", icon: "🌾", min: 1000, description: "Taking root in the world, learning how to make an impact." },
  { name: "Budding Plant", icon: "🍀", min: 1500, description: "Your contributions are visible, bringing life and hope to surroundings." },
  { name: "Young Sapling", icon: "🌳", min: 2000, description: "Standing tall, steadily growing and influencing the environment positively." },
  { name: "Growing Tree", icon: "🌴", min: 2500, description: "Your actions strengthen, providing shade and support for others." },
  { name: "Flowering Plant", icon: "🌸", min: 3000, description: "Beautiful results emerge from consistent effort and nurturing care." },
  { name: "Harvest Bloom", icon: "🌻", min: 3500, description: "The fruits of your work start to appear and inspire many." },
  { name: "Fruitful Branch", icon: "🍇", min: 4000, description: "Your contributions bear tangible results, sharing abundance with others." },
  { name: "Golden Crop", icon: "🌾", min: 4500, description: "Your impact ripens, bringing prosperity and hope to your community." },
  { name: "Mature Tree", icon: "🌲", min: 5000, description: "You stand strong, sheltering and supporting those who follow." },
  { name: "Orchard Keeper", icon: "🍎", min: 5500, description: "Your careful guidance cultivates growth and spreads positive influence." },
  { name: "Garden Master", icon: "🌺", min: 6000, description: "Your efforts bloom into beautiful results, admired by many people." },
  { name: "Abundant Grove", icon: "🌳", min: 6500, description: "A thriving community grows around your consistent care and dedication." },
  { name: "Golden Orchard", icon: "🍊", min: 7000, description: "Your work produces rewards and inspires others to take action." },
  { name: "Harvest Guardian", icon: "🌾", min: 7500, description: "You protect and nurture growth, ensuring prosperity for all." },
  { name: "Forest Elder", icon: "🌲", min: 8000, description: "Your wisdom guides others as a pillar of sustainable growth." },
  { name: "Sunlit Canopy", icon: "☀️", min: 8500, description: "Your influence shines over many, providing light and encouragement." },
  { name: "Nature Sage", icon: "🍃", min: 9000, description: "A true master of harmony, guiding growth and nurturing life." },
  { name: "Earth Steward", icon: "🌍", min: 9500, description: "Your legacy impacts the world, leaving it flourishing and balanced." },
];



const ProfileHeader = ({ profile, isEditing}) => {
  const [localProfile, setLocalProfile] = useState(profile);
  const [imageHover, setImageHover] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (field, value) => {
    setLocalProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = async(e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);

    const formData = new FormData();
    formData.append("thumbnail", file);


    try{
      await updateIndPfp(formData)
    }catch(err){
      console.log("error : ", err)
    }
  };

  return (
    <div className="relative group mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
      <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* avatar */}

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
          <div className="relative group/avatar">
            <div
              className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-emerald-500/30 cursor-pointer"
              onMouseEnter={() => setImageHover(true)}
              onMouseLeave={() => setImageHover(false)}
              onClick={handleClick}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="profile preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : profile?.IndividualInfo?.logo_path ? (
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${profile.IndividualInfo.logo_path}`}
                  alt="profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                profile?.username?.substring(0, 2).toUpperCase()
              )}

              {imageHover && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300">
                  <Camera className="w-6 h-6 text-white" />
                  <span className="text-xs text-white font-medium">
                    Change profile
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
                  {profile.isVerified === true ? (
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
                    {profile?.IndividualInfo?.address.split(" ", 2).join(" ") || "no address found"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Joined {new Date(profile.createdAt).toLocaleDateString("en-GB", {
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
                    {profile?.IndividualInfo?.description}
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


const CampaignCard = ({ campaign, seeMoreHandler }) => (   
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
        <button className=" cursor-pointer flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold transition-all duration-300" onClick={seeMoreHandler} style={{ fontFamily: "'Inter', sans-serif" }}>
          Learn More
        </button>
      </div>
    </div>
  </div>
);


//for calculating impact score
const calculateImpactScore = (individual) => {

    if (!individual) return 0;

  const total_campaigns = individual.joinedCampaigns?.length || 0;
  const total_blogs = individual.upvotedArticles?.length || 0;
  const total_upvotes = individual.upvotedArticles?.length || 0;

  // Sum volunteers from joined campaigns
  const total_volunteers = individual.joinedCampaigns?.reduce(
    (sum, campaign) => sum + (campaign.volunteer || 0),
    0
  ) || 0;

  const verification_status = individual.isVerified;

  // 1. Raw points
  const rawPoints =
    (total_campaigns * 500) +
    (total_volunteers * 50) +
    (total_blogs * 100) +
    (total_upvotes * 5);

  // 2. Saturation formula
  const limit = 10000;
  const k = 5000;

  let score = limit * (rawPoints / (rawPoints + k));

  // 3. Verification bonus
  if (verification_status) {
    score = score + (limit - score) * 0.1;
  }

  return Math.round(score);
};


//get ranks using impact score
const getRankFromScore = (score) => {
  let currentRank = RANKS[0];

  for (let i = 0; i < RANKS.length; i++) {
    if (score >= RANKS[i].min) {
      currentRank = RANKS[i];
    }
  }

  const currentIndex = RANKS.indexOf(currentRank);
  const nextRank = RANKS[currentIndex + 1] || null;

  return {
    ...currentRank,
    nextRank: nextRank?.name || "Max Rank",
  };
};




export default function IndividualProfile() {

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('overview');
  const [impactScore, setImpactScore] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [sliceLimit1, setSliceLimit1] = useState(2);
  const [sliceLimit2, setSliceLimit2] = useState(2);
  const [recentActivity, setRecentActivity] = useState(false);
  const [indDetail, setindDetail] =useState(null);
  const [loading, setLoading] = useState(true)
  const [rank, setRank] = useState({
    currentRank : "",
    nextRank : ""
  })
  const [formData, setFormData] = useState({
    bio : "",
    email : "",
    indName : "",
    country : "",
    state : "",
    city : "", 
    street : ""
  });

  useEffect(()=>{
    const fetchUserDetail = async() =>{

      try{
        const res = await getIndById();
        const res2 = await getIndRecentActivity();

        setindDetail(res.data.individual)
        setRecentActivity(res2.data.recentActivities.joinedCampaigns)

      }catch(err){
        console.log("failed to fetch individual detail", err)
      }finally{
        setLoading(false)
      }
    }
    fetchUserDetail();
    
  }, []);

  // for saving api data to usestate
  useEffect(() => {
    if (indDetail) {
      const parts = indDetail.IndividualInfo?.address?.split(" ") || [];
      setFormData({
        bio: indDetail.IndividualInfo?.description || "",
        email: indDetail.email || "",
        indName: indDetail.username || "",
        country: parts[0] || "",
        state: parts[1] || "",
        city: parts[2] || "",
        street: parts[3] || ""
      });
    }

    const score = calculateImpactScore(indDetail);
    setImpactScore(score);

    const rank = getRankFromScore(score);
    setRank(rank);
  }, [indDetail]);

  if(loading) return <div><p>loading wait a min</p></div>
  if(!indDetail) return <div><p>didn't get any data for this individual</p></div>

  const handleSaveProfile = async() => {
    if(!validator()) return

    await updateIndProfile(formData);
  };

const deleteHandler = async () => {
  const isConfirmed = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");

  if (!isConfirmed) {
    return;
  }

  try {
    const response = await axios.delete('/api/users/delete-account'); // Adjust to your route
    if (response.status === 200) {
      alert("Account deleted successfully.");
      window.location.href = '/'; 
    }
  } catch (error) {
    console.error("Delete failed:", error);
    alert("Could not delete account. Please try again.");
  }
};

  const validator = () =>{
    if(!formData.bio || !formData.email || !formData.indName || !formData.country){
      alert("all fields are required");
      return false
    }
    return true
  }

  const handleInputChange = (e) => {
    const{name, value } = e.target;

    setFormData(prev =>({
      ...prev, 
      [name] : value
    }))
  }

  const seeMoreHandler = () => {
    navigate('/campaigns')
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'profile', label: 'individual Info', icon: User },
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
                  value={indDetail?.IndividualInfo?.total_campaigns_joined}
                  color="from-emerald-500 to-teal-500"
                />
                <StatsCard 
                  icon={Clock} 
                  label="Hours Contributed" 
                  value={indDetail?.IndividualInfo?.total_campaigns_joined}
                  color="from-teal-500 to-emerald-600"
                />
                <StatsCard 
                  icon={Award} 
                  label="Impact Score" 
                  value={impactScore}
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
                        {sliceLimit2 === 2 ? (
                            <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1" onClick={()=>setSliceLimit2(5)} style={{ fontFamily: "'Inter', sans-serif" }}>
                              View all <span>→</span>
                            </button>
                          ):(
                            <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1" onClick={()=>setSliceLimit2(2)} style={{ fontFamily: "'Inter', sans-serif" }}>
                              View less <span>→</span>
                            </button>
                        )}
                    </div>
                      <div className="space-y-4">
                        {/* Check if joinedCampaigns exists and has items */}
                        {indDetail?.joinedCampaigns && indDetail.joinedCampaigns.length > 0 ? (
                          indDetail.joinedCampaigns.slice(0, sliceLimit2).map((campaign) => (
                            <CampaignCard 
                              seeMoreHandler={seeMoreHandler}
                              key={campaign.campaign_id} 
                              campaign={campaign} 
                            />
                          ))
                        ) : (
                          /* Fallback if no campaigns are joined */
                          <div className="text-center py-4 text-gray-500">
                            <p>No campaigns joined yet.</p>
                          </div>   
                        )}
                      </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="relative group py-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 to-teal-100/40 rounded-3xl blur-2xl" />
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
                      <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-gray-800 tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Recent Activity
                        </h2>
                        {sliceLimit1 === 2 ? (
                          <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1" onClick={()=>setSliceLimit1(5)} style={{ fontFamily: "'Inter', sans-serif" }}>
                            View all <span>→</span>
                          </button>
                        ):(
                          <button className="text-sm cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1" onClick={()=>setSliceLimit1(2)} style={{ fontFamily: "'Inter', sans-serif" }}>
                            View less <span>→</span>
                          </button>
                        )}
                      </div>

                      <div className="space-y-6">
                        {recentActivity?.slice(0, sliceLimit1).map((activity, index) => (
                          <div key={activity.campaign_id} className="relative flex gap-6 group/item">
                            
                            {/* Timeline Connector Line */}
                            {index !== recentActivity.length - 1 && (
                              <div className="absolute left-[11px] top-8 w-[2px] h-full bg-gray-100 group-hover/item:bg-emerald-100 transition-colors" />
                            )}

                            {/* Cool Animated Icon Indicator */}
                            <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>

                            <div className="flex-1 pb-6 border-b border-gray-50 last:border-0">
                              <div className="flex justify-between items-start mb-1">
                                <p className="font-bold text-gray-800 group-hover/item:text-emerald-600 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                                  Joined {activity.title}
                                </p>
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                  <Clock size={12} />
                                  {new Date(activity.CampaignParticipant.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                                </div>
                              </div>
                              
                              <p className="text-sm text-gray-500 line-clamp-1 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Category: {activity.category}
                              </p>

                              {/* Status Tag */}
                              <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-bold text-emerald-700">
                                <Zap size={10} className="fill-emerald-700" />
                                {activity.status}
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Empty State */}
                        {(!recentActivity || recentActivity.length === 0) && (
                          <div className="text-center py-10">
                            <p className="text-gray-400 text-sm">No recent actions recorded yet.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* right side cards */}
                <div>
                  <div className="relative group"> 
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-teal-200/60 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg">
                      <h2 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Current Rank
                      </h2>
                      <div className="flex items-center gap-4 mb-4">
                        {console.log(rank)}
                        <div className="text-6xl drop-shadow-lg">{rank.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {rank.name}
                          </h3>
                          <p className="text-emerald-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Next: {rank.nextRank}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-emerald-50" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {rank.description}
                      </p>
                    </div>
                  </div>


                  {/* Articles Upvoted */}
                  <div className="relative group py-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                      <h2 className="text-lg font-bold text-gray-800 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Articles You Upvoted
                      </h2>
                      <div className="space-y-3">
                        {indDetail.upvotedArticles.map((article, idx) => (
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
                        {(!indDetail.upvotedArticles || indDetail.upvotedArticles.length === 0) && (
                          <div className="text-left italic py-5">
                            <p className="text-gray-400 text-sm">No any upvoted arcticles.</p>
                          </div>
                        )}
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
                              Individual Bio
                            </label>
                            <textarea
                              name="bio"
                              value={formData.bio}
                              onChange={handleInputChange}
                              placeholder="Tell us about your individual..."
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
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g necessary cleaner"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              individual Full Name
                            </label>
                            <input
                              type="text"
                              name="indName"
                              value={formData.indName}
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
                            value={formData.country}
                            onChange={handleInputChange}
                            placeholder="Country"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                          />
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="State"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                          />
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                          />
                        </div>
                        <input
                          type="text"
                          name="street"
                          value={formData.street}
                          onChange={handleInputChange}
                          placeholder="Street"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2d5f4d] focus:border-transparent"
                        />
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-end mb-8">
                        <button
                          onClick={() => handleSaveProfile()}
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
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-red-50 border border-gray-300 hover:border-red-300 rounded-lg text-red-600 font-medium transition-all duration-300" onClick={deleteHandler} style={{ fontFamily: "'Inter', sans-serif" }}>
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
//uo r the best teacher