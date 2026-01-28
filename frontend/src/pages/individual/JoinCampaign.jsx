import { useEffect, useState } from 'react'
import { getAllCampaigns, joinCampaignApi } from '../../services/api';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CreateCampaign from '../organization/CampaignOrg';
import getUserRole from '../protect/authRole';
import {Loading, BadRequest} from '../../components/Loading';

const CampaignCard = ({ campaign_id, title, status, volunteers, currentVolunteers, description, location, date }) => {
  const [isJoined, setIsJoined] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  
  const isActive = status === 'Active';
  
  const handleJoin = async() => {
    setIsJoined(true);
    showToast('Successfully joined the campaign!');
    await joinCampaignApi(campaign_id)
  };
  
  const handleCancelClick = () => {
    setShowCancelModal(true);
  };
  
  const confirmCancel = async() => {
    setIsJoined(false);
    setShowCancelModal(false);
    await joinCampaignApi(campaign_id)
    showToast('Campaign participation cancelled', 'warning');
  };
  
  const shortDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;
  
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-slate-200">
        {/* Decorative gradient bar */}        
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isActive 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : 'bg-sky-50 text-sky-700 border border-sky-200'
          }`}>
            {status}
          </span>
        </div>
        
        {isJoined && (
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-3 mb-4 rounded-r">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">✓</span>
              <div>
                <p className="text-sm font-semibold text-blue-800">You're participating!</p>
                <p className="text-xs text-blue-600">Check your email for updates</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Short description - always visible */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {shortDescription}
        </p>
        
        {/* Location and Date info */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-gray-400">📍</span>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-gray-400">📅</span>
            <span>{date}</span>
          </div>
        </div>
        
        {/* Progress bar for volunteers */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Volunteer Progress</span>
            <span className="text-sm font-bold text-gray-800">{currentVolunteers}/{volunteers}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(currentVolunteers / volunteers) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {showDetails && (
          <div className="mb-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">Full Description</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
          </div>
        )}
        
        <div className="flex gap-2 flex-wrap">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 min-w-[120px] px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium text-sm border border-gray-200"
          >
            {showDetails ? '← Less Info' : 'More Info →'}
          </button>
          
          {!isJoined ? (
            <button 
              onClick={()=>handleJoin()}
              className="flex-1 min-w-[120px] px-4 py-2.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition font-semibold text-sm"
            >
              Join Campaign
            </button>
          ) : (
            <button 
              onClick={handleCancelClick}
              className="flex-1 min-w-[120px] px-4 py-2.5 bg-slate-600 text-white rounded-md hover:bg-slate-700 transition font-medium text-sm"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      
      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full transform transition-all">
            <div className="text-center mb-4">
              <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 text-2xl">⚠️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cancel Participation?</h3>
              <p className="text-gray-600 text-sm">
                Are you sure you want to cancel your participation in <span className="font-semibold">{title}</span>? 
                This action will remove you from the volunteer list.
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
              >
                Keep Participation
              </button>
              <button
                onClick={confirmCancel}
                className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-semibold"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const JoinCampaign = () => {

  const [toasts, setToasts] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState([]);
  const[loading, setLoading] = useState(true)


  const role = getUserRole();
  
  
  useEffect(() => {
    window.showToast = (message, type = 'success') => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message, type }]);
      
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 3000);
    };
  }, []);

  //showing blogs through api
  useEffect(()=>{
    const fetchBlogs = async()=>{
      try{
        const data = await getAllCampaigns();
        setCampaigns(data);
      }catch(error){
        console.error("Failed to fetch campaigns", error);
        setError(true)

      }finally{
        setLoading(false)
      }
    };
    
    fetchBlogs();
  },[]);

  if(loading) return <Loading/>
  if(!campaigns) return <BadRequest/>

  return (
    <>
    {role === "organization"  && <CreateCampaign/>}
    {(role === "individual" || !role) &&
      <div className="flex flex-col min-h-screen bg-slate-50 w-full">
        {/* Toast Container */}
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {toasts.map(toast => (
            <div
              key={toast.id}
              className={`${
                toast.type === 'warning' ? 'bg-slate-600' : 'bg-emerald-600'
              } text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in flex items-center gap-3`}
            >
              <span className="text-xl">{toast.type === 'warning' ? '⚠️' : '✓'}</span>
              <p className="font-semibold">{toast.message}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <main className="flex-grow px-4 sm:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold text-slate-800 mb-2">
                Nearby Campaigns
              </h2>
              <p className="text-slate-600 text-base">
                Discover environmental initiatives around you
              </p>
            </div>

            {error === true &&         
              <DotLottieReact className='mt-40'
                src="https://lottie.host/efa320a0-9ce4-4a24-92b2-b095a507db98/wcFkvgbOOK.lottie"
                loop
                autoplay
                style={{ width: '30px', height: '30px' }}
              />
            }
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {campaigns.map(campaign => (
                <CampaignCard key={campaign.campaign_id} {...campaign} />
              ))}
            </div>
          </div>
        </main>

        <style>{`
          @keyframes slide-in {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}</style>
      </div>
    }
    </>
  )
}

export default JoinCampaign