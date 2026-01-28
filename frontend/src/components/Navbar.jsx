import React, { useState, useEffect } from 'react'; // Added useEffect
import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import Verdu from '../assets/logo.png';

const Navbar = ({ transparent = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // --- SCROLL LOGIC START ---
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide if scrolling down and past 100px, show if scrolling up
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  // --- SCROLL LOGIC END ---

  const navItems = [
    { label: 'Blog', to: '/blogs' },
    { label: 'Campaigns', to: '/campaigns' },
    { label: 'Climate', to: '/climate' },
    { label: 'Profile', to: '/profile', icon: User }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`w-full px-10 py-5 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        transparent
          ? 'bg-transparent'
          : 'bg-[#1a2332]/95 border-b border-white/5'
      }`}>
        <div className="relative max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer">
            <Link to="/">
              <img 
                src={Verdu} 
                alt="logo" 
                className="w-36 h-12 object-contain transition-opacity duration-200 hover:opacity-80"
              />
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.to);
              return (
                <Link
                  key={index}
                  to={item.to}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    active 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {Icon ? <Icon className="w-5 h-5" /> : item.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 mx-4 rounded-lg bg-[#29313D]/95 backdrop-blur-md border border-white/5 flex flex-col gap-1 px-4 py-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.to);
              return (
                <Link
                  key={index}
                  to={item.to}
                  className={`text-sm font-medium px-3 py-2.5 rounded-md transition-all duration-200 ${
                    active
                      ? 'text-white bg-white/10'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {Icon && <Icon className="inline w-4 h-4 mr-2" />}
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under the navbar if not transparent */}
      {!transparent && <div className="h-[80px]" />}
    </>
  );
};

export default Navbar;