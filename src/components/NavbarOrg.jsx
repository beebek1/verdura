import React from 'react';
import Verdu from '../assets/verdu.png'

const NavbarOrg = ({ transparent = false }) => {
  return (
    <nav className={`flex justify-between items-center w-full px-8 py-4 ${
      transparent ? 'bg-transparent absolute top-0 left-0 right-0 z-50' : 'bg-[#29313D]'
    }`}>
        <img 
          src={Verdu} 
          alt="logo" 
          className='w-40 h-15 object-contain'
        />

        {/* Navigation links - aligned to the right */}
        <div className="flex items-center space-x-12 mr-8">
          <a href="#blog" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            Blog
          </a>
          <a href="#campaigns" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            Campaigns
          </a>
          <a href="#profile" className="text-white text-lg font-bold hover:text-gray-300 transition-colors">
            Profile
          </a>
        </div>
    </nav>
  )
}

export default NavbarOrg