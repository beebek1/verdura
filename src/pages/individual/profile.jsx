import React, { useState } from 'react';
import { User, Mail, MapPin, Calendar, Award, TrendingUp, Settings, Bell, Shield, Link2, Camera, Edit2, Save, X, Leaf, Target, Clock, Star, ChevronRight } from 'lucide-react';

// Mock user data - would come from backend
const userData = {
  profile: {
    name: "Aayush Kumar",
    email: "aayush.kumar@example.com",
    bio: "Passionate environmentalist dedicated to making a positive impact through community action and sustainable practices.",
    avatar: null, // Could be URL
    joinDate: "January 2024",
    location: {
      country: "Nepal",
      state: "Bagmati Province",
      city: "Pātan"
    }
  },
  stats: {
    impactScore: 620,
    campaignsJoined: 6,
    hoursContributed: 42,
    treesPlanted: 127,
    rank: "Green Leaf",
    rankProgress: 45,
    nextRank: "Forest Guardian"
  },
  achievements: [
    { id: 1, name: "First Campaign", icon: "🎯", earned: true, date: "Jan 2024" },
    { id: 2, name: "Tree Warrior", icon: "🌳", earned: true, date: "Jan 2025" },
    { id: 3, name: "Clean Ocean", icon: "🌊", earned: true, date: "Jan 2025" },
    { id: 4, name: "100 Hours", icon: "⏰", earned: false, date: null },
    { id: 5, name: "Community Leader", icon: "👥", earned: false, date: null },
    { id: 6, name: "Carbon Crusher", icon: "💨", earned: false, date: null }
  ],
  recentActivity: [
    { id: 1, action: "Planted 5 saplings", campaign: "Tree Plantation Drive", date: "2 days ago", icon: "🌱" },
    { id: 2, action: "Joined Beach Cleanup", campaign: "Coastal Cleanup", date: "1 week ago", icon: "🏖️" },
    { id: 3, action: "Completed 10 hours", campaign: "Community Garden", date: "2 weeks ago", icon: "⏱️" }
  ],
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
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
      <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="relative group/avatar">
            <div 
              className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg shadow-emerald-500/50 cursor-pointer"
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
                    className="text-3xl font-bold text-white bg-white/5 border border-white/20 rounded-lg px-3 py-2 mb-2 w-full focus:outline-none focus:border-emerald-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ) : (
                  <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {profile.name}
                  </h1>
                )}
                
                <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-4 h-4" />
                    {profile.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {profile.location.city}, {profile.location.country}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Joined {profile.joinDate}
                  </span>
                </div>

                {isEditing ? (
                  <textarea
                    value={localProfile.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows={3}
                    className="text-gray-300 text-sm bg-white/5 border border-white/20 rounded-lg px-3 py-2 w-full focus:outline-none focus:border-emerald-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                ) : (
                  <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {profile.bio}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <button
                    onClick={onEdit}
                    className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Edit2 className="w-5 h-5 text-emerald-400" />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="p-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <Save className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={onCancel}
                      className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      <X className="w-5 h-5 text-red-400" />
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

const StatsCard = ({ icon: Icon, label, value, sublabel }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
      <Icon className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {value}
      </div>
      <div className="text-sm text-gray-300 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-gray-400 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          {sublabel}
        </div>
      )}
    </div>
  </div>
);

const AchievementBadge = ({ achievement }) => (
  <div className={`relative group ${!achievement.earned && 'opacity-50'}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl transition-opacity duration-500 ${achievement.earned ? 'opacity-50 group-hover:opacity-100' : 'opacity-0'}`} />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 text-center">
      <div className="text-4xl mb-2">{achievement.icon}</div>
      <div className="text-sm font-semibold text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {achievement.name}
      </div>
      {achievement.earned ? (
        <div className="text-xs text-emerald-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          {achievement.date}
        </div>
      ) : (
        <div className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
          Locked
        </div>
      )}
    </div>
  </div>
);

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');
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
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'activity', label: 'Activity', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#29313D] to-[#1e2633] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 animate-pulse" />
      
      <div className="relative p-4 md:p-8">
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
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/50'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
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
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatsCard icon={Target} label="Impact Score" value={userData.stats.impactScore} />
                <StatsCard icon={Leaf} label="Campaigns" value={userData.stats.campaignsJoined} sublabel="Active" />
                <StatsCard icon={Clock} label="Hours" value={userData.stats.hoursContributed} sublabel="Contributed" />
                <StatsCard icon={Star} label="Trees" value={userData.stats.treesPlanted} sublabel="Planted" />
              </div>

              {/* Current Rank */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Current Rank Progress
                  </h2>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="text-6xl">🌿</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {userData.stats.rank}
                        </h3>
                        <span className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {userData.stats.rankProgress}% to {userData.stats.nextRank}
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                          <div 
                            className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700 ease-out relative"
                            style={{ width: `${userData.stats.rankProgress}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Keep contributing to campaigns to unlock the next rank and exclusive badges!
                  </p>
                </div>
              </div>

              {/* Top Achievements */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Recent Achievements
                    </h2>
                    <button 
                      onClick={() => setActiveTab('achievements')}
                      className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      View All <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {userData.achievements.slice(0, 3).map(achievement => (
                      <AchievementBadge key={achievement.id} achievement={achievement} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {userData.recentActivity.map(activity => (
                    <div key={activity.id} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl">{activity.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {activity.action}
                        </h3>
                        <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {activity.campaign} • {activity.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
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

          {activeTab === 'settings' && (
            <div className="space-y-6">
              {/* Notification Settings */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Bell className="w-6 h-6 text-emerald-400" />
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Notifications
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(preferences).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                        <span className="text-gray-200 capitalize" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <button
                          onClick={() => togglePreference(key)}
                          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                            value ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-white/20'
                          }`}
                        >
                          <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                            value ? 'translate-x-7' : 'translate-x-1'
                          }`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-emerald-400" />
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Privacy
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <label className="block text-gray-200 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Profile Visibility
                      </label>
                      <select 
                        value={preferences.profileVisibility}
                        onChange={(e) => setPreferences({...preferences, profileVisibility: e.target.value})}
                        className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <option value="public">Public</option>
                        <option value="friends">Friends Only</option>
                        <option value="private">Private</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-red-400 mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Danger Zone
                  </h2>
                  <div className="space-y-3">
                    <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 rounded-lg text-red-400 transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Log Out
                    </button>
                    <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-red-500/10 border border-white/10 hover:border-red-500/30 rounded-lg text-red-400 transition-all duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
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