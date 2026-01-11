import React, { useState } from 'react';
import { User, Mail, MapPin, Calendar, Award, TrendingUp, Settings, Bell, Shield, Camera, Edit2, Save, X, Leaf, Target, Clock, Star, ChevronRight, Users, Briefcase } from 'lucide-react';

// Mock user data - would come from backend
const userData = {
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
  articles: [
    { title: "How Tree Plantation Improves Air Quality", upvotes: 152 },
    { title: "Volunteer Stories from the Field", upvotes: 98 }
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
              {profile.avatar ? (
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                profile.name.substring(0, 2).toUpperCase()
              )}
              {imageHover && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300">
                  <Camera className="w-6 h-6 text-white" />
                  <span className="text-xs text-white font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Change Photo
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
                    {profile.name}
                  </h1>
                )}
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    {profile.location.city}, {profile.location.country}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    Joined {profile.joinDate}
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
                    {profile.bio}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <button
                    onClick={onEdit}
                    className="p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Edit2 className="w-5 h-5 text-emerald-600" />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="p-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      <Save className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={onCancel}
                      className="p-2.5 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <X className="w-5 h-5 text-red-500" />
                    </button>
                  </>
                )}
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

const ProgressBar = ({ progress, showPercentage = false }) => (
  <div className="relative">
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <div 
        className="h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700 ease-out relative shadow-sm"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
      </div>
    </div>
    {showPercentage && (
      <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-sm font-semibold text-emerald-600" style={{ fontFamily: "'Inter', sans-serif" }}>
        {progress}%
      </span>
    )}
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
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" />
              {campaign.hoursContributed} hours
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4 text-emerald-600" />
              Next: {campaign.nextMilestone}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full border border-emerald-200 font-medium">
              {campaign.status}
            </span>
            <span className="text-gray-600">Progress: {campaign.progress}%</span>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
          Continue
        </button>
      </div>
      <ProgressBar progress={campaign.progress} />
    </div>
  </div>
);

const AchievementBadge = ({ achievement }) => (
  <div className={`relative group ${!achievement.earned && 'opacity-40'}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg transition-opacity duration-500 ${achievement.earned ? 'opacity-50 group-hover:opacity-100' : 'opacity-0'}`} />
    <div className="relative bg-white rounded-xl p-4 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 text-center">
      <div className="text-4xl mb-2">{achievement.icon}</div>
      <div className="text-sm font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {achievement.name}
      </div>
      {achievement.earned ? (
        <div className="text-xs text-emerald-600 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
          {achievement.date}
        </div>
      ) : (
        <div className="text-xs text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          Locked
        </div>
      )}
    </div>
  </div>
);

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('impact');
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState(userData.preferences);

  const handleSaveProfile = (updatedProfile) => {
    console.log('Saving profile:', updatedProfile);
    setIsEditing(false);
  };

  const togglePreference = (key) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    { id: 'impact', label: 'My Impact', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'profile', label: 'Profile Info', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-teal-50/30">
      <div className="p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <ProfileHeader 
            profile={userData.profile}
            isEditing={isEditing}
            onEdit={() => setIsEditing(true)}
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
              );
            })}
          </div>

          {/* Tab Content */}
          {activeTab === 'impact' && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard 
                  icon={Leaf} 
                  label="Campaigns Joined" 
                  value={userData.stats.campaignsJoined}
                  color="from-emerald-500 to-teal-500"
                />
                <StatsCard 
                  icon={Clock} 
                  label="Hours Contributed" 
                  value={userData.stats.hoursContributed}
                  color="from-teal-500 to-emerald-600"
                />
                <StatsCard 
                  icon={Award} 
                  label="Impact Score" 
                  value={userData.stats.impactScore}
                  color="from-emerald-600 to-teal-500"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Impact */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Goal Progress */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                        <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Total Goal Progress
                        </h2>
                        <span className="text-sm text-emerald-700 bg-emerald-100 px-4 py-2 rounded-lg border border-emerald-200 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Ahead of {userData.stats.goalProgress.aheadOfUsers}% of users
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                            You have: <span className="text-emerald-600 font-semibold">{userData.stats.goalProgress.current}</span> / {userData.stats.goalProgress.target}
                          </span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {userData.stats.goalProgress.percentage}%
                          </span>
                        </div>
                        <ProgressBar progress={userData.stats.goalProgress.percentage} />
                      </div>

                      <div className="relative group/rank">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-xl blur-lg opacity-0 group-hover/rank:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                          <div className="flex items-start gap-4">
                            <div className="text-5xl drop-shadow-sm">{userData.currentRank.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                                <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                                  {userData.currentRank.name}
                                </h3>
                                <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                                  Next level: {userData.currentRank.progressToNext}%
                                </span>
                              </div>
                              <div className="mb-4">
                                <ProgressBar progress={userData.currentRank.progressToNext} />
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {userData.currentRank.rankLevels.map((rank, idx) => (
                                  <React.Fragment key={rank}>
                                    <span className={idx === 1 ? 'font-semibold text-emerald-700' : ''}>
                                      {rank}
                                    </span>
                                    {idx < userData.currentRank.rankLevels.length - 1 && (
                                      <ChevronRight className="w-3 h-3" />
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-emerald-200">
                            <p className="text-sm text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>
                              Goal level: <span className="font-semibold text-emerald-700">Yearly Goal</span> • 
                              Estimated CO₂ offset: <span className="font-semibold text-emerald-700">{userData.stats.goalProgress.estimatedCO2Offset} t</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Campaigns */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Current Campaigns
                    </h2>
                    <div className="space-y-4">
                      {userData.campaigns.map(campaign => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                      ))}
                    </div>
                  </div>

                  {/* Recent Contributions */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                      <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Recent Contributions
                      </h2>
                      <div className="space-y-4">
                        {userData.recentContributions.map(contribution => (
                          <div key={contribution.id} className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0 group/item hover:bg-gray-50 -mx-4 px-4 py-2 rounded-lg transition-colors duration-300">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 shadow-sm" />
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {contribution.action}
                              </p>
                              <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {contribution.date}
                                {contribution.campaign && (
                                  <span className="text-emerald-600 font-medium"> — {contribution.campaign}</span>
                                )}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Additional Info */}
                <div className="space-y-6">
                  {/* Current Rank Card */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-teal-200/60 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-8 shadow-lg">
                      <h2 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Current Rank
                      </h2>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-6xl drop-shadow-lg">{userData.currentRank.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {userData.currentRank.name}
                          </h3>
                          <p className="text-emerald-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Next: {userData.currentRank.nextRank}
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
                        {userData.articles.map((article, idx) => (
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

                  {/* Quick Stats */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-200/60 to-emerald-200/60 rounded-2xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl p-8 shadow-lg">
                      <h2 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Quick Stats
                      </h2>
                      <p className="text-emerald-50 text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {userData.quickStats.description}
                      </p>
                      <div className="text-center">
                        <div className="text-6xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {userData.quickStats.volunteers}
                        </div>
                        <p className="text-emerald-50 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          volunteers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  All Achievements
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {userData.achievements.map(achievement => (
                    <AchievementBadge key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Personal Information
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={userData.profile.name}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={userData.profile.email}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Bio
                      </label>
                      <textarea
                        rows={4}
                        defaultValue={userData.profile.bio}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Location
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="text"
                          placeholder="Country"
                          defaultValue={userData.profile.location.country}
                          className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                        <input
                          type="text"
                          placeholder="State"
                          defaultValue={userData.profile.location.state}
                          className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                        <input
                          type="text"
                          placeholder="City"
                          defaultValue={userData.profile.location.city}
                          className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-gray-800"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Notification Settings */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-2xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Notifications
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(preferences).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <span className="text-gray-800 capitalize font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <button
                          onClick={() => togglePreference(key)}
                          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                            value ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${
                            value ? 'translate-x-7' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>


              {/* Danger Zone */}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}