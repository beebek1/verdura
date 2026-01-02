import React from 'react';
import { Link } from 'react-router-dom';
import Verdu from '../assets/verdu.png'

const NavbarInd = ({ transparent = false }) => {
  return (
    <nav className={`flex justify-between items-center w-full px-8 py-4 ${
      transparent ? 'bg-transparent absolute top-0 left-0 right-0 z-50' : 'bg-[#29313D]'
    }`}>
        <Link to="/inddashboard">
          <img 
            src={Verdu} 
            alt="logo" 
            className='w-40 h-15 object-contain'
          />
        </Link>

        {/* Navigation links - aligned to the right */}
        <div className="flex items-center space-x-12 mr-8">
          <Link to="/blog" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            Blog
          </Link>
          <Link to="/joincampaign" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            Campaigns
          </Link>
          <Link to="/my-impact" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            My Impact
          </Link>
          <Link to="/profileind" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            Profile
          </Link>
        </div>
    </nav>
  )
}

export default NavbarInd