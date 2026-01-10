import React, { useState, useEffect } from 'react';
import { Leaf, Users, TrendingUp, Award, ChevronRight } from 'lucide-react';

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
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium text-gray-500">{label}</span>
      <Icon className={`w-5 h-5 ${iconColor}`} />
    </div>
    <div className="text-3xl font-bold text-gray-900">{value}</div>
  </div>
);

const ProgressBar = ({ progress, color = "bg-blue-500" }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
    <div 
      className={`${color} h-2.5 rounded-full transition-all duration-700 ease-out`}
      style={{ width: `${progress}%` }}
    />
  </div>
);

const CampaignCard = ({ campaign }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
    <div className="flex items-start justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.title}</h3>
        <p className="text-sm text-gray-600 mb-1">
          {campaign.hoursContributed} hours contributed • Next: {campaign.nextMilestone}
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            Status: <span className="text-green-600 font-medium">{campaign.status}</span>
          </span>
          <span>Progress: {campaign.progress}%</span>
        </div>
      </div>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors duration-200">
        Continue
      </button>
    </div>
    <ProgressBar progress={campaign.progress} color="bg-blue-500" />
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 mb-8 shadow-lg transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-2xl font-bold text-blue-600 shadow-md">
              {data.user.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Hi, {data.user.name}</h1>
              <p className="text-blue-100 text-sm">{data.user.tagline}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <StatCard 
            icon={Leaf} 
            label="Campaigns Joined" 
            value={data.stats.campaignsJoined}
            iconColor="text-green-500"
          />
          <StatCard 
            icon={TrendingUp} 
            label="Hours Contributed" 
            value={data.stats.hoursContributed}
            iconColor="text-blue-500"
          />
          <StatCard 
            icon={Award} 
            label="Impact Score" 
            value={data.stats.impactScore}
            iconColor="text-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Goal Progress */}
            <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Total Goal Progress</h2>
                <span className="text-sm text-gray-500">
                  You are ahead of {data.stats.goalProgress.aheadOfUsers}% of users this month
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    You have: {data.stats.goalProgress.current} / {data.stats.goalProgress.target}
                  </span>
                  <span className="text-2xl font-bold text-blue-600">{data.stats.goalProgress.percentage}%</span>
                </div>
                <ProgressBar progress={data.stats.goalProgress.percentage} color="bg-gradient-to-r from-blue-500 to-teal-500" />
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{data.currentRank.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{data.currentRank.name}</h3>
                      <span className="text-sm text-gray-600">Progress toward next level: {data.currentRank.progressToNext}%</span>
                    </div>
                    <div className="mb-3">
                      <ProgressBar progress={data.currentRank.progressToNext} color="bg-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 flex-wrap">
                      {data.currentRank.rankLevels.map((rank, idx) => (
                        <React.Fragment key={rank}>
                          <span className={idx === 1 ? 'font-semibold text-green-700' : ''}>{rank}</span>
                          {idx < data.currentRank.rankLevels.length - 1 && <ChevronRight className="w-3 h-3" />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-sm text-gray-600">
                    Goal level: <span className="font-semibold">Yearly Goal</span> • Estimated CO₂ offset: <span className="font-semibold text-green-700">{data.stats.goalProgress.estimatedCO2Offset} t</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Current Campaigns */}
            <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Current Campaigns</h2>
              <div className="space-y-4">
                {data.campaigns.map(campaign => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            </div>

            {/* Recent Contributions */}
            <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Contributions</h2>
              <div className="space-y-4">
                {data.recentContributions.map(contribution => (
                  <div key={contribution.id} className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">{contribution.action}</p>
                      <p className="text-sm text-gray-500">
                        {contribution.date}
                        {contribution.campaign && ` — ${contribution.campaign}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Current Rank Card */}
            <div className={`bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 shadow-lg text-white transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-lg font-semibold mb-4">Current Rank</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{data.currentRank.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{data.currentRank.name}</h3>
                  <p className="text-green-100 text-sm">Next: {data.currentRank.nextRank}</p>
                </div>
              </div>
              <p className="text-sm text-green-100">Rank is based on your cumulative Impact Score.</p>
            </div>

            {/* Articles Upvoted */}
            <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Articles You Upvoted</h2>
              <div className="space-y-3">
                {data.articles.map((article, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <p className="text-sm font-medium text-gray-900 flex-1">{article.title}</p>
                    <span className="text-sm text-gray-500 ml-2">▲ {article.upvotes}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-lg text-white transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
              <p className="text-purple-100 text-sm mb-4">{data.quickStats.description}</p>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">{data.quickStats.volunteers}</div>
                <p className="text-purple-100">volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}