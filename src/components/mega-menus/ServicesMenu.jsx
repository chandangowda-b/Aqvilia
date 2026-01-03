import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt } from 'react-icons/fa';

// Accept closeMenu as a prop
const ServicesMenu = ({ closeMenu }) => {
  const serviceList = [
    "Consulting",
    "Formulations",
    "Pharmacovigilance",
    "Biosimilars",
    "Molecular Diagnostics",
    "Biostatistics",
    "Medical Writing",
    "Project Management",
    "Clinical Monitoring",
    "Pharma Research Solutions",
    "Computed Tomography (CT)",
    "AI (Clinical Trails)"
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t-[3px] border-primary animate-slideDown z-0">
      <div className="max-w-[1440px] mx-auto flex min-h-[400px]">
        
        {/* Sidebar */}
        <div className="w-1/4 bg-white p-8 border-r border-gray-100">
          <h4 className="text-primary font-bold uppercase text-sm mb-6">Our Services</h4>
          
          <ul className="space-y-2 text-sm font-semibold text-darkBlue">
            {serviceList.map((item) => {
              const slug = item.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '');

              return (
                <li key={item}>
                  <Link 
                    to={`/services/${slug}`} 
                    onClick={closeMenu} // <--- MAGIC HAPPENS HERE: Closes menu on click
                    className="hover:text-primary flex justify-between items-center group transition-colors py-1"
                  >
                    {item} 
                    <span className="text-gray-300 group-hover:translate-x-1 transition-transform">›</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Content (Right Side) */}
        <div className="w-3/4 bg-primary p-12 text-white">
          <div className="flex items-center bg-white rounded-full px-5 py-3 w-full max-w-3xl mb-12 shadow-sm">
            <FaBolt className="text-gray-400 mr-4"/>
            <input type="text" placeholder="Search services..." className="flex-1 outline-none text-gray-700 text-sm" />
            <button className="bg-darkBlue hover:bg-black text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase transition-colors">DISCOVER</button>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { title: "Corporate Brochure", desc: "Download our comprehensive guide.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400" },
              { title: "Science Innovation", desc: "Next-gen biomarker assessments.", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=400" },
              { title: "Digital Solutions", desc: "AI-driven operational improvements.", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400" },
              { title: "Corporate Video", desc: "Transforming patient outcomes.", img: "https://images.unsplash.com/photo-1581093458791-9f302e686c87?w=400" }
            ].map((card, idx) => (
              <div key={idx} className="group cursor-pointer">
                <img src={card.img} className="h-28 w-full object-cover rounded mb-3 shadow-lg group-hover:scale-105 transition-transform"/>
                <h5 className="font-bold text-sm mb-1">{card.title}</h5>
                <p className="text-xs text-white/80 leading-relaxed mb-2">{card.desc}</p>
                <span className="text-[10px] font-bold uppercase hover:underline">Learn More ›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMenu;