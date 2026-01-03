import React from 'react';
import { FaBolt } from 'react-icons/fa';

const InnovationMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-primary animate-slideDown z-0">
      <div className="max-w-[1440px] mx-auto flex min-h-[400px]">
        {/* Dark Blue Sidebar */}
        <div className="w-1/4 bg-darkBlue p-10 text-white">
          <h4 className="font-bold text-2xl mb-6">Innovation at Aqlivia</h4>
          <p className="text-sm leading-relaxed opacity-90">
            At Aqlivia, our foundation is built on innovation. We are committed to finding new and smarter approaches to solving customer challenges. Explore some of the newest ways we can help drive your results.
          </p>
        </div>
        
        {/* Blue Content Area */}
        <div className="w-3/4 bg-primary p-12 text-white">
          <div className="flex items-center bg-white rounded-full px-5 py-3 w-full max-w-3xl mb-12 shadow-sm">
            <FaBolt className="text-gray-400 mr-4"/>
            <input type="text" placeholder="Search innovation..." className="flex-1 outline-none text-gray-700 text-sm" />
            <button className="bg-darkBlue hover:bg-black text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase transition-colors">DISCOVER</button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
                { title: "Overview", desc: "Aqlivia Labs drives innovation via science, digital tech, and operations.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300" },
                { title: "Science Innovation", desc: "Delivers tailored lab solutions and biomarker expertise.", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300" },
                { title: "Operational Innovation", desc: "Advanced processes and tech to streamline trials.", img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300" },
                { title: "Digital Innovation", desc: "Leverages AI, automation, and analytics.", img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=300" }
            ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden flex h-32 shadow-lg group cursor-pointer hover:-translate-y-1 transition-transform">
                    <img src={card.img} className="w-1/3 object-cover"/>
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                        <h5 className="text-darkBlue font-bold text-sm mb-1">{card.title}</h5>
                        <p className="text-textLight text-xs mb-2 line-clamp-2">{card.desc}</p>
                        <span className="text-primary text-[10px] font-bold uppercase">Learn More ›</span>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationMenu;