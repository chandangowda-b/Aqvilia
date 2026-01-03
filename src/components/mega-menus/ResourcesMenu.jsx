import React from 'react';
import { FaBolt } from 'react-icons/fa';

const ResourcesMenu = () => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-primary animate-slideDown z-0">
      {/* Top Search Area */}
      <div className="bg-darkBlue py-8">
         <div className="max-w-[1440px] mx-auto px-6 flex justify-center">
            <div className="flex items-center bg-white rounded-full px-5 py-3 w-full max-w-2xl shadow-sm">
                <FaBolt className="text-gray-400 mr-4"/>
                <input type="text" placeholder="Search resources..." className="flex-1 outline-none text-gray-700 text-sm" />
                <button className="bg-darkBlue hover:bg-black text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase transition-colors">DISCOVER</button>
            </div>
         </div>
      </div>
      
      {/* Columns */}
      <div className="max-w-[1440px] mx-auto p-12 grid grid-cols-5 gap-8">
         {[
             { title: 'SOLUTIONS', items: ['Brochures', 'Case Studies', 'e-Books', 'Fact Sheets', 'Infographics'] },
             { title: 'THOUGHT LEADERSHIP', items: ['Blog', 'Articles', 'Insights briefs', 'Presentations', 'White papers'] },
             { title: 'MULTIMEDIA', items: ['Podcasts', 'Videos', 'Webinars'] },
             { title: 'ACCREDITATIONS', items: ['Beijing, China', 'Durham, NC USA', 'Ithaca, NY USA', 'Mumbai, India'] },
             { title: 'VISITOR GUIDES', items: ['Beijing, China', 'Edinburgh, Scotland', 'Mumbai, India'] }
         ].map((col, idx) => (
             <div key={idx} className={`${idx < 4 ? 'border-r border-gray-200' : ''}`}>
                <h4 className="text-primary font-bold uppercase text-xs mb-6">{col.title}</h4>
                <ul className="space-y-3 text-sm text-textLight font-medium">
                    {col.items.map((item, i) => <li key={i} className="cursor-pointer hover:text-primary transition-colors">{item}</li>)}
                </ul>
             </div>
         ))}
      </div>
    </div>
  );
};

export default ResourcesMenu;