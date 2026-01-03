import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { FaChevronRight, FaHome } from 'react-icons/fa';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full font-sans text-darkBlue">
     
      {/* 1. HERO SECTION - Explicitly Left Aligned */}
      <section className="relative h-[90vh] min-h-[400px] flex items-center bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }}>
        
        {/* Dark Gradient from Left to Right (Text sits on the dark part) */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/80 via-sky-500/80 to-transparent"></div>
        
        {/* Content Container - Forces Left Alignment */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-10 text-left">
          <div className="max-w-3xl"> {/* Limits text width so it doesn't stretch too far right */}
            <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight text-white">{service.title}</h1>
            <p className="text-xl md:text-1xl font-bold opacity-90 text-white tracking-wide">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 2. BLUE BREADCRUMB BAR (Like in the video) */}
      <div className="bg-[#00629B] text-white py-5 shadow-md relative z-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center text-xs md:text-sm font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-gray-300 flex items-center gap-2">
                <FaHome size={14} /> Home
            </Link>
            <span className="mx-3 opacity-50">/</span>
            <span className="opacity-50">Services</span>
            <span className="mx-3 opacity-50">/</span>
            <span className="text-white">{service.title}</span>
        </div>
      </div>

      {/* 3. INTRO TEXT SECTION */}
      <section className="py-16 md:py-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8">Overview</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                {service.description}
            </p>
        </div>
      </section>

      {/* 4. "SERVICES INCLUDE" / CAPABILITIES CARDS (Video Style) */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <h3 className="text-2xl font-bold text-darkBlue mb-10 flex items-center gap-3">
                <span className="w-2 h-8 bg-primary block rounded-sm"></span>
                Key Capabilities & Solutions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.points && service.points.map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                        <div>
                            <h4 className="text-xl font-bold text-darkBlue group-hover:text-primary transition-colors mb-4">
                                {item.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                {item.desc}
                            </p>
                        </div>
                        
                        {/* The "Learn More" Arrow Effect */}
                        <div className="flex items-center text-primary text-xs font-bold uppercase tracking-widest cursor-pointer group-hover:translate-x-2 transition-transform">
                            Learn More <FaChevronRight className="ml-2 text-[10px]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA (Optional, adds professional finish) */}
      <section className="bg-darkBlue py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-white/80 mb-8 text-lg">Contact our team to learn how our {service.title} can support your clinical development.</p>
            <Link to="/contact" className="inline-block bg-white text-darkBlue px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-100 transition-colors">
                Contact Us
            </Link>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;