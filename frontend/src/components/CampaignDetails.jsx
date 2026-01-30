import React from 'react';
import { X } from 'lucide-react';

const CampaignDetail = ({ campaign, isOpen, onClose }) => {
  if (!isOpen || !campaign) return null;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status?.toUpperCase()) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'UPCOMING':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'cleaning':
        return '🧹';
      case 'planting':
        return '🌱';
      case 'recycling':
        return '♻️';
      case 'education':
        return '📚';
      case 'conservation':
        return '🦁';
      default:
        return '🌍';
    }
  };

  const calculateDuration = () => {
    if (!campaign.start_date) return 'N/A';
    if (!campaign.end_date) return 'N/A';
    
    const start = new Date(campaign.start_date);
    const end = new Date(campaign.end_date);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return days > 0 ? `${days} days` : 'N/A';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-start gap-4 pr-12">
            <div className="text-5xl">{getCategoryIcon(campaign.category)}</div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-3">{campaign.title}</h2>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border-2 ${getStatusColor(campaign.status)}`}>
                  ● {campaign.status || 'Active'}
                </span>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold capitalize">
                  {campaign.category || 'General'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Volunteers Card */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-teal-600 rounded-lg p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 font-semibold">Volunteers</span>
              </div>
              <div className="text-3xl font-bold text-teal-700">{campaign.volunteer || 0}</div>
            </div>

            {/* Duration Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 rounded-lg p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 font-semibold">Duration</span>
              </div>
              <div className="text-3xl font-bold text-blue-700">{calculateDuration()}</div>
            </div>

            {/* Status Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-600 rounded-lg p-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600 font-semibold">Status</span>
              </div>
              <div className="text-xl font-bold text-purple-700 capitalize">{campaign.status || 'Active'}</div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Campaign Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-teal-600">
                <p className="text-sm text-gray-500 mb-1 font-medium">Start Date</p>
                <p className="text-lg font-bold text-gray-800">{formatDate(campaign.start_date)}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="text-sm text-gray-500 mb-1 font-medium">End Date</p>
                <p className="text-lg font-bold text-gray-800">{formatDate(campaign.end_date)}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              About This Campaign
            </h3>
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                {campaign.description || 'No description provided for this campaign.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;