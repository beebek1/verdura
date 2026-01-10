import React, { useState, useEffect } from 'react';
import { Leaf, Users, TrendingUp, Award, ChevronRight, Clock, Target } from 'lucide-react';

// Mock JSON data - in production, this would come from an API
const dashboardData = {
  user: {
    name: "Aayush",
    tagline: "Your impact summary — concise, trackable, nature-centered."
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
  articles: [
    { title: "How Tree Plantation Improves Air Quality", upvotes: 152 },
    { title: "Volunteer Stories from the Field", upvotes: 98 }
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
  quickStats: {
    volunteers: 80,
    description: "Snapshot of recent activity"
  }
};

const StatCard = ({ icon: Icon, label, value, iconColor }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</span>
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconColor} flex items-center justify-center`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
        {value}
      </div>
    </div>
  </div>
);

const ProgressBar = ({ progress, showPercentage = false }) => (
  <div className="relative">
    <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden backdrop-blur-sm">
      <div 
        className="h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
      </div>
    </div>
    {showPercentage && (
      <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-sm font-semibold text-emerald-400" style={{ fontFamily: "'Inter', sans-serif" }}>
        {progress}%
      </span>
    )}
  </div>
);

const CampaignCard = ({ campaign }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
            {campaign.title}
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-300 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {campaign.hoursContributed} hours
            </span>
            <span className="text-gray-500">•</span>
            <span className="flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Next: {campaign.nextMilestone}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
              {campaign.status}
            </span>
            <span className="text-gray-400">Progress: {campaign.progress}%</span>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/50 whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
          Continue
        </button>
      </div>
      <ProgressBar progress={campaign.progress} />
    </div>
  </div>
);

export default function ImpactDashboard() {
  const [data, setData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(dashboardData);
      setMounted(true);
    }, 100);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#29313D] to-[#1e2633] flex items-center justify-center">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 border-t-emerald-500 animate-spin" />
          <div className="absolute inset-0 w-12 h-12 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2332] via-[#29313D] to-[#1e2633] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 animate-pulse" />
      
      <div className="relative p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`relative group mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-emerald-500/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {data.user.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Hi, {data.user.name}
                  </h1>
                  <p className="text-gray-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {data.user.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <StatCard 
              icon={Leaf} 
              label="Campaigns Joined" 
              value={data.stats.campaignsJoined}
              iconColor="from-emerald-500 to-teal-600"
            />
            <StatCard 
              icon={TrendingUp} 
              label="Hours Contributed" 
              value={data.stats.hoursContributed}
              iconColor="from-teal-500 to-emerald-600"
            />
            <StatCard 
              icon={Award} 
              label="Impact Score" 
              value={data.stats.impactScore}
              iconColor="from-emerald-600 to-teal-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Goal Progress */}
              <div className={`relative group transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Total Goal Progress
                    </h2>
                    <span className="text-sm text-gray-300 bg-white/5 px-4 py-2 rounded-lg border border-white/10" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Ahead of {data.stats.goalProgress.aheadOfUsers}% of users
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                        You have: <span className="text-emerald-400">{data.stats.goalProgress.current}</span> / {data.stats.goalProgress.target}
                      </span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.stats.goalProgress.percentage}%
                      </span>
                    </div>
                    <ProgressBar progress={data.stats.goalProgress.percentage} />
                  </div>

                  <div className="relative group/rank">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl blur-xl opacity-0 group-hover/rank:opacity-100 transition-opacity duration-500" />
                    <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20">
                      <div className="flex items-start gap-4">
                        <div className="text-5xl drop-shadow-lg">{data.currentRank.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                            <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {data.currentRank.name}
                            </h3>
                            <span className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                              Next level: {data.currentRank.progressToNext}%
                            </span>
                          </div>
                          <div className="mb-4">
                            <ProgressBar progress={data.currentRank.progressToNext} />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-400 flex-wrap" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {data.currentRank.rankLevels.map((rank, idx) => (
                              <React.Fragment key={rank}>
                                <span className={idx === 1 ? 'font-semibold text-emerald-400' : ''}>
                                  {rank}
                                </span>
                                {idx < data.currentRank.rankLevels.length - 1 && (
                                  <ChevronRight className="w-3 h-3" />
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Goal level: <span className="font-semibold text-emerald-400">Yearly Goal</span> • 
                          Estimated CO₂ offset: <span className="font-semibold text-emerald-400">{data.stats.goalProgress.estimatedCO2Offset} t</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Campaigns */}
              <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Current Campaigns
                </h2>
                <div className="space-y-4">
                  {data.campaigns.map(campaign => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                  ))}
                </div>
              </div>

              {/* Recent Contributions */}
              <div className={`relative group transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Recent Contributions
                  </h2>
                  <div className="space-y-4">
                    {data.recentContributions.map(contribution => (
                      <div key={contribution.id} className="flex items-start gap-4 pb-4 border-b border-white/10 last:border-0 group/item hover:bg-white/5 -mx-4 px-4 py-2 rounded-lg transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 shadow-lg shadow-emerald-500/50" />
                        <div className="flex-1">
                          <p className="font-semibold text-white mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {contribution.action}
                          </p>
                          <p className="text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {contribution.date}
                            {contribution.campaign && (
                              <span className="text-emerald-400"> — {contribution.campaign}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Current Rank Card */}
              <div className={`relative group transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8">
                  <h2 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Current Rank
                  </h2>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl drop-shadow-2xl">{data.currentRank.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {data.currentRank.name}
                      </h3>
                      <p className="text-emerald-200 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Next: {data.currentRank.nextRank}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Rank is based on your cumulative Impact Score.
                  </p>
                </div>
              </div>

              {/* Articles Upvoted */}
              <div className={`relative group transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-50" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-white mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Articles You Upvoted
                  </h2>
                  <div className="space-y-3">
                    {data.articles.map((article, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start justify-between p-3 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 border border-white/10 transition-all duration-300 group/article cursor-pointer"
                      >
                        <p className="text-sm font-medium text-gray-200 flex-1 group-hover/article:text-emerald-300 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {article.title}
                        </p>
                        <span className="text-sm text-emerald-400 ml-3 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                          ▲ {article.upvotes}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`relative group transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-emerald-500/30 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8">
                  <h2 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Quick Stats
                  </h2>
                  <p className="text-gray-300 text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {data.quickStats.description}
                  </p>
                  <div className="text-center">
                    <div className="text-6xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {data.quickStats.volunteers}
                    </div>
                    <p className="text-gray-300 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      volunteers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}