import React, { useRef,useState } from 'react';
import { User, Mail, MapPin, Calendar, CalendarCheck,CalendarX, TrendingUp, Settings, ShieldX, ShieldCheck, Camera, Link, AlignEndVertical, X, Leaf, Target, ArrowBigUp, Users, Briefcase, FileText, Upload, Eye, Heart, MessageCircle, BarChart3 } from 'lucide-react';
import { useEffect } from 'react';
import { getOrgById, getOrgRecentActivity, updateOrgPfp, updateOrgProfile } from '../../services/api';
import tempImage from '../../assets/pollution.png';
import authRole from '../protect/authRole';
import Profile from '../individual/profile';
import { useNavigate } from 'react-router-dom';

// Mock organization data - would come from backend
const orgData = {
  profile: {
    name: "Youth Climate Organization",
    email: "contact@ycorg.com",
    bio: "A community-driven environmental group focused on reforestation and waste reduction projects.",
    avatar: null,
    foundedDate: "January 2024",
    location: {
      country: "Nepal",
      state: "Bagmati Province",
      city: "Pātan",
      street: ""
    },
    orgType: "Verified"
  },
  stats: {
    campaignsCreated: 12,
    activeCampaigns: 8,
    totalVolunteers: 450,
    blogsPublished: 28,
    totalImpact: 8500,
    hoursGenerated: 2400
  },
  recentBlogs: [
    { 
      id: 1, 
      title: "How Tree Plantation Improves Air Quality", 
      views: 1520, 
      likes: 152,
      comments: 24,
      date: "Jan 18, 2025"
    },
    { 
      id: 2, 
      title: "Volunteer Stories from the Field", 
      views: 980, 
      likes: 98,
      comments: 15,
      date: "Jan 15, 2025"
    },
    { 
      id: 3, 
      title: "The Impact of Community Action", 
      views: 756, 
      likes: 76,
      comments: 12,
      date: "Jan 12, 2025"
    }
  ],
  achievements: [
    { id: 1, name: "First Campaign", icon: "🎯", earned: true, date: "Jan 2024" },
    { id: 2, name: "Tree Champion", icon: "🌳", earned: true, date: "Mar 2024" },
    { id: 3, name: "Community Leader", icon: "👥", earned: true, date: "Jun 2024" },
    { id: 4, name: "1000 Volunteers", icon: "⭐", earned: false, date: null }
  ],
  articles: [
    { title: "How Tree Plantation Improves Air Quality", upvotes: 152 },
    { title: "Volunteer Stories from the Field", upvotes: 98 }
  ],
  recentActivity: [
    { id: 1, action: "Published new blog: 'Tree Plantation Guide'", date: "2 days ago", icon: "📝" },
    { id: 2, action: "Launched Ocean Restoration Project", date: "5 days ago", icon: "🌊" },
    { id: 3, action: "Reached 400 total volunteers", date: "1 week ago", icon: "👥" }
  ],
  preferences: {
    emailNotifications: true,
    volunteerUpdates: true,
    weeklyReport: true,
    marketingEmails: false,
    profileVisibility: "public"
  }
};

const ProfileHeader = ({ profile, isEditing, onEdit, onSave, onCancel }) => {
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
      await updateOrgPfp(formData)
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
              ) : profile?.OrgInfo?.logo_path ? (
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/${profile.OrgInfo.logo_path}`}
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
                    {profile.OrgInfo.address}
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

//document update

const DocumentUploader = ({ legalDocString, onUpdate }) => {
  // 1. Split the string into an array. If empty, start with 2 empty slots.
  const docArray = legalDocString && legalDocString.trim() !== "" 
    ? legalDocString.split(/\s+/) 
    : ["", ""];

  // Ensure we always handle 2 boxes
  while (docArray.length < 2) docArray.push("");

  const handleAction = (index, newValue) => {
    const updatedArray = [...docArray];
    updatedArray[index] = newValue;
    
    // 2. Send the updated string (containing the local blob URL) back to parent
    // This is what triggers the "Preview" to show up instantly.
    onUpdate(updatedArray.join(' ').trim());
  };

  const onFileSelect = async(e, index) => {
    const file = e.target.files[0];
    const file2 = e.target.files[1];
    if (file) {
      // THIS IS THE KEY: It generates a local temporary path for the image preview
      const localPreviewUrl = URL.createObjectURL(file);
      handleAction(index, localPreviewUrl);

      const formData = new FormData();
      formData.append("images", file);
      formData.append("images", file2);

      try{
        await updateOrgPfp(formData)
      }catch(err){
        console.log("error : ", err)
      }
      
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[0, 1].map((index) => {
        const fileValue = docArray[index];
        const hasFile = fileValue && fileValue.trim() !== "";

        return (
          <div key={index} className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-2">
              {index === 0 ? "Registration Document" : "PAN / Tax Document"}
            </label>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center h-64 bg-gray-50 overflow-hidden">
              {hasFile ? (
                /* --- PREVIEW MODE (Logic from your Cover Image reference) --- */
                <div className="relative w-full h-full">
                  <img 
                    src={fileValue} 
                    alt="Document preview" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => handleAction(index, "")}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition-colors shadow-md"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                /* --- UPLOAD MODE (Logic from your Cover Image reference) --- */
                <div className="text-center">
                  <svg 
                    className="w-16 h-16 mx-auto mb-4 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                    />
                  </svg>
                  <p className="text-gray-500 mb-2">Drop document here or</p>
                  <label className="text-teal-600 hover:text-teal-700 cursor-pointer font-medium">
                    Browse
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => onFileSelect(e, index)}
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        );
      })}
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
        <button className="flex-1 cursor-pointer px-4 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold transition-all duration-300" onClick={seeMoreHandler} style={{ fontFamily: "'Inter', sans-serif" }}>
          See More
        </button>
      </div>
    </div>
  </div>
);


//for calculating impact score
const calculateImpactScore = (data) => {
  const { total_blogs, total_campaigns, total_upvotes, total_volunteers, verification_status} = data;

  // 1. Assign raw points based on weights
  const rawPoints = 
    (total_campaigns * 500) + 
    (total_volunteers * 50) + 
    (total_blogs * 100) + 
    (total_upvotes * 5);

  // 2. The "Saturation" Formula
  // This ensures the score approaches 10,000 but never exceeds it.
  // We use a constant (k) to determine how "hard" it is to reach the limit.
  const limit = 10000;
  const k = 5000; // Adjust this to make it harder or easier to gain points
  
  let score = limit * (rawPoints / (rawPoints + k));

  // 3. Verification Bonus (e.g., +10% boost for verified orgs)
  if (verification_status) {
    score = score + (limit - score) * 0.1; 
  }

  return Math.round(score);
};


export default function OrganizationProfile() {
  const navigate = useNavigate();
  const role = authRole();

  if( role === "individual"){
    return  <Profile/>
  }
  
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(orgData.preferences);
  const [orgDetail, setOrgDetail] =useState(null);
  const [loading, setLoading] = useState(true)
  const [legalDoc, setLegalDoc] = useState(null);
  const [sliceLimit1, setSliceLimit1] = useState(2);
  const [sliceLimit2, setSliceLimit2] = useState(2);
  const [recentActivity, setRecentActivity] = useState(false);
  const [formData, setFormData] = useState({
    bio : "",
    email : "",
    orgName : "",
    country : "",
    state : "",
    city : "", 
    street : ""
  });


  useEffect(()=>{
    const fetchOrganizationDetail = async() =>{

      try{
        const res = await getOrgById();
        const res2 = await getOrgRecentActivity();

        setOrgDetail(res.data.organization)
        setRecentActivity(res2.data.recentActivities)
      }catch(err){
        console.log("failed to fetch organization detail", err)
      }finally{
        setLoading(false)
      }
    }
    fetchOrganizationDetail();
    
  }, []);

  useEffect(() => {
    if (orgDetail) {
      const parts = orgDetail.OrgInfo?.address?.split(" ") || [];
      setFormData({
        bio: orgDetail.OrgInfo?.description || "",
        email: orgDetail.email || "",
        orgName: orgDetail.username || "",
        country: parts[0] || "",
        state: parts[1] || "",
        city: parts[2] || "",
        street: parts[3] || ""
      });
    }
  },[orgDetail])

  if(loading) return <div><p>loading wait a min</p></div>
  if(!orgDetail) return <div><p>backend isn't loading data</p></div>

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData(prev =>({
      ...prev,
      [name] : value
    }))
  };

  const handleSaveProfile = async() => {
    await updateOrgProfile(formData)
  };

  const seeMoreHandler = () => {
    navigate('/campaigns')
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'profile', label: 'Organization Info', icon: User },
    { id: 'dangerZone', label: 'Danzer Zone', icon: Settings }
  ]

  return (
    <>
    {role === "organization" &&
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
        <div className="p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <ProfileHeader 
              profile={orgDetail}
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <StatsCard 
                    icon={Target} 
                    label="Campaigns" 
                    value={orgDetail.OrgInfo.total_campaigns}
                    sublabel="Created"
                    color="from-emerald-500 to-teal-500"
                  />
                  <StatsCard 
                    icon={Leaf} 
                    label="Active" 
                    value='4'
                    sublabel="Running Now"
                    color="from-teal-500 to-emerald-600"
                  />
                  <StatsCard 
                    icon={Users} 
                    label="Volunteers" 
                    value={orgDetail.OrgInfo.total_volunteers}
                    sublabel="Total"
                    color="from-emerald-600 to-teal-500"
                  />
                  <StatsCard 
                    icon={FileText} 
                    label="Blogs" 
                    value={orgDetail.OrgInfo.total_blogs}
                    sublabel="Published"
                    color="from-teal-600 to-emerald-500"
                  />
                  <StatsCard 
                    icon={BarChart3} 
                    label="Impact" 
                    value={calculateImpactScore(orgDetail.OrgInfo)}
                    sublabel="Score"
                    color="from-emerald-500 to-teal-600"
                  />
                  <StatsCard 
                    icon={ArrowBigUp} 
                    label="Upvotes" 
                    value={orgDetail.OrgInfo.total_upvotes}
                    sublabel="Gained"
                    color="from-teal-500 to-emerald-500"
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
                        {orgDetail.OrgInfo.Campaigns.slice(0, sliceLimit2).map(campaign => (
                          <CampaignCard key={campaign.campaign_id} campaign={campaign} seeMoreHandler={seeMoreHandler} />
                        ))}
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
                          {recentActivity?.slice(0, sliceLimit1).map((activity, index) => {
                            const isCampaign = !!activity.campaign_id;
                            const type = isCampaign ? "Campaign" : "Blog";
                            const title = activity.title;
                            const status = activity.status;
                            const category = activity.category || "-";
                            const date = new Date(activity.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });

                            return (
                              <div key={isCampaign ? activity.campaign_id : activity.blog_id} className="relative flex gap-6 group/item">
                                {/* Timeline Connector Line */}
                                {index !== recentActivity.length - 1 && (
                                  <div className="absolute left-[11px] top-8 w-[2px] h-full bg-gray-100 group-hover/item:bg-emerald-100 transition-colors" />
                                )}

                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                </div>

                                <div className="flex-1 pb-6 border-b border-gray-50 last:border-0">
                                  <div className="flex justify-between items-start mb-1">
                                    <p className="font-bold text-gray-800 group-hover/item:text-emerald-600 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                                      [{type}] {title}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                                      {date}
                                    </div>
                                  </div>

                                  <p className="text-sm text-gray-500 line-clamp-1 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Category: {category}
                                  </p>

                                  {/* Status Tag */}
                                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-bold text-emerald-700">
                                    {status}
                                  </div>
                                </div>
                              </div>
                            );
                          })}

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

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Impact Summary */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-teal-200/60 rounded-2xl blur-xl" />
                      <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Impact Summary
                        </h2>
                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {calculateImpactScore(orgDetail.OrgInfo)}
                            </div>
                            <p className="text-emerald-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                              Total Impact Score
                            </p>
                          </div>
                          <div className="border-t border-white/20 pt-4">
                            <div className="flex justify-between text-emerald-50 text-sm mb-2">
                              <span style={{ fontFamily: "'Inter', sans-serif" }}>Campaigns Launched</span>
                              <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{orgDetail.OrgInfo.total_campaigns}</span>
                            </div>
                            <div className="flex justify-between text-emerald-50 text-sm">
                              <span style={{ fontFamily: "'Inter', sans-serif" }}>Volunteers Engaged</span>
                              <span className="font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{orgDetail.OrgInfo.total_volunteers}</span>
                            </div>
                          </div>
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
                                value={formData.bio}
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
                                value={formData.email}
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
                                value={formData.orgName}
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

                        {/* Legal Documents Section */}
                        <div className="mb-10">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Legal Documents
                          </label>

                          <DocumentUploader 
                            legalDocString={orgDetail.OrgInfo.legal_documents}
                            onUpdate={(newDocString) =>{
                              setOrgDetail(prev => ({
                                ...prev,
                                OrgInfo : {
                                  ...prev.OrgInfo,
                                  legal_documents : newDocString
                                }
                              }));
                            }}
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
    }
  </>
  );
}