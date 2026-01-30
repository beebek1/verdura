import React from 'react';

const LoaderButton = ({ 
  onClick, 
  isLoading, 
  text, 
  loadingText = "Processing...", 
  type = "button",
  className = "" // Allows you to add extra margins or padding if needed
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`
        w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 uppercase tracking-wide
        ${isLoading 
          ? "bg-gray-400 cursor-not-allowed" 
          : "bg-teal-800 hover:bg-teal-900 cursor-pointer text-white"}
        ${className}
      `}
    >
      <div className="flex items-center justify-center gap-2">
        {isLoading && (
          // Simple Inline SVG Spinner
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {isLoading ? loadingText : text}
      </div>
    </button>
  );
};

export default LoaderButton;