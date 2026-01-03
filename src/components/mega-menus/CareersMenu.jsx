import React from 'react';

const CareersMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-primary animate-slideDown z-0">
      <div className="max-w-[1440px] mx-auto flex min-h-[400px]">
        {/* Left White Area */}
        <div className="w-3/5 bg-white p-12 flex gap-12">
            <div className="flex-1 pr-6 border-r border-gray-200">
                <h4 className="text-darkBlue font-bold text-xl mb-4">Working at Aqlivia</h4>
                <p className="text-textLight text-sm leading-relaxed mb-6">Our mission is to accelerate innovation for a healthier world. Together, we can solve customer challenges and improve patient lives.</p>
                <span className="text-primary text-xs font-bold uppercase cursor-pointer hover:underline">LEARN MORE ›</span>
            </div>
            <div className="flex-1">
                <h4 className="text-darkBlue font-bold text-xl mb-4">Life at Aqlivia</h4>
                <p className="text-textLight text-sm leading-relaxed mb-6">Careers, culture and everything in between. Find out what’s going on right here, right now.</p>
                <span className="text-primary text-xs font-bold uppercase cursor-pointer hover:underline">LEARN MORE ›</span>
            </div>
        </div>
        {/* Right Blue Area */}
        <div className="w-2/5 bg-primary p-12 text-white">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500" className="rounded-lg shadow-lg mb-6 w-full h-48 object-cover"/>
            <h4 className="font-bold text-2xl mb-4">We're Hiring</h4>
            <p className="text-sm leading-relaxed mb-6 opacity-90">Improving human health requires brave thinkers who are willing to explore new ideas and build on successes. Unleash your potential with us.</p>
            <button className="bg-transparent border-none text-white text-xs font-bold uppercase hover:underline">SEARCH JOBS ›</button>
        </div>
      </div>
    </div>
  );
};

export default CareersMenu;