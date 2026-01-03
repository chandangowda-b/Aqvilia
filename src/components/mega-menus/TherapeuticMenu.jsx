import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaChevronRight } from 'react-icons/fa';

const TherapeuticMenu = ({ closeMenu }) => {
  const therapeutics = [
    'Cell and Gene Therapy (CAGT)',
    'Central Nervous System',
    'Obesity & Endocrinology',
    'GI and Hepatology',
    'Immunology',
    'Infectious Diseases',
    'Oncology'
  ];

  return (
    <div className="absolute top-full left-0 w-full shadow-xl animate-slideDown z-20 font-sans">
      
      {/* 1. TOP SEARCH BAR (Dark Blue Strip) */}
      <div className="bg-[#0F1048] py-4 px-6 md:px-12 flex justify-center items-center border-t border-white/10">
        
        {/* MERGED SEARCH BAR & BUTTON CONTAINER */}
        <div className="flex items-center bg-white rounded-full p-1 w-full max-w-2xl shadow-lg">
            
            {/* Icon & Input Area */}
            <div className="flex items-center flex-1 pl-4">
              <FaBolt className="text-gray-400 mr-3"/>
              <input 
                type="text" 
                placeholder="Search..." 
                className="flex-1 outline-none text-gray-700 text-sm placeholder-gray-500 bg-transparent h-full" 
              />
            </div>

            {/* The "DISCOVER" Button (Merged Inside) */}
            <button className="bg-[#009CDE] hover:bg-[#007AB8] text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase transition-colors tracking-wider shadow-sm">
              DISCOVER
            </button>
        </div>

      </div>

      {/* 2. MAIN CONTENT AREA (Split Layout) */}
      <div className="flex min-h-[450px]">
        
        {/* LEFT SIDE: Navigation (White Background) */}
        <div className="w-1/4 bg-white py-8 px-8 border-r border-gray-100 flex flex-col">
          <h4 className="text-[#0F1048] font-bold uppercase text-sm mb-4 tracking-wide">
            THERAPEUTIC EXPERTISE
          </h4>
          
          <ul className="flex-1">
            {/* Overview Link */}
            <li className="border-b border-dotted border-gray-300 last:border-0">
              <Link 
                to="/therapeutic/overview" 
                onClick={closeMenu} 
                className="block py-3 text-sm text-gray-600 hover:text-[#009CDE] transition-colors"
              >
                Overview
              </Link>
            </li>

            {/* List Links */}
            {therapeutics.map((item) => {
              const slug = item.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');
              return (
                <li key={item} className="border-b border-dotted border-gray-300 last:border-0">
                  <Link 
                    to={`/therapeutic/${slug}`} 
                    onClick={closeMenu} 
                    className="block py-3 text-sm text-gray-600 hover:text-[#009CDE] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* RIGHT SIDE: Content Showcase (Bright Blue Background) */}
        <div className="w-3/4 bg-[#009CDE] p-10 text-white">
          <div className="grid grid-cols-4 gap-6 h-full">
            
            {/* Card 1: Corporate Brochure */}
            <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80" 
                  alt="Scientists" 
                  className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm"
                />
                <h5 className="font-bold text-base leading-tight mb-2">Download our Corporate brochure</h5>
                <p className="text-xs text-white/90 leading-relaxed mb-4 line-clamp-4">
                  We are Aqlivia Laboratories, a leading clinical trial laboratory services organization with end-to-end laboratory services.
                </p>
                <Link to="#" className="mt-auto text-[10px] font-bold uppercase flex items-center gap-1 hover:underline">
                  LEARN MORE <FaChevronRight size={8} />
                </Link>
            </div>

            {/* Card 2: Corporate Video */}
            <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f302e686c87?w=400&q=80" 
                  alt="Lab Work" 
                  className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm"
                />
                <h5 className="font-bold text-base leading-tight mb-2">Corporate Video</h5>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Our commitment to customer success is embedded in every facet of our operations.
                </p>
                <Link to="#" className="mt-auto text-[10px] font-bold uppercase flex items-center gap-1 hover:underline">
                  LEARN MORE <FaChevronRight size={8} />
                </Link>
            </div>

            {/* Card 3: Science Innovation */}
            <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=80" 
                  alt="Patient" 
                  className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm"
                />
                <h5 className="font-bold text-base leading-tight mb-2">Science Innovation</h5>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Uniquely positioned to shape, validate, and deliver biomarker assessments to improve patient outcomes.
                </p>
                <Link to="#" className="mt-auto text-[10px] font-bold uppercase flex items-center gap-1 hover:underline">
                  LEARN MORE <FaChevronRight size={8} />
                </Link>
            </div>

            {/* Card 4: Digital Innovation */}
            <div className="flex flex-col">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-217358c7e618?w=400&q=80" 
                  alt="Doctor with Tablet" 
                  className="w-full h-32 object-cover rounded-xl mb-4 shadow-sm"
                />
                <h5 className="font-bold text-base leading-tight mb-2">Digital Innovation</h5>
                <p className="text-xs text-white/90 leading-relaxed mb-4">
                  Driving operational improvements and quality of our services.
                </p>
                <Link to="#" className="mt-auto text-[10px] font-bold uppercase flex items-center gap-1 hover:underline">
                  LEARN MORE <FaChevronRight size={8} />
                </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapeuticMenu;