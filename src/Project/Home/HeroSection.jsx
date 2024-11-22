import React from 'react';

function HeroSection() {
  return (
    <div className="flex items-center justify-center w-full h-screen"> {/* Use full height of the screen */}
      <img 
        src="p" 
        alt="Cat and Dog" 
        className="w-[800px] h-[400px] object-cover shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl" 
      />
    </div>
  );
}

export default HeroSection;