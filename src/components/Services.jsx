import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const servicesData = [
  { title: "Central Laboratory Services", img: "https://images.unsplash.com/photo-1581093458891-7f3d395ddb54?auto=format&fit=crop&q=80" },
  { title: "Digital Technologies", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
  { title: "Clinical Genomics", img: "https://images.unsplash.com/photo-1530482054429-cc491f61333b?auto=format&fit=crop&q=80" },
  { title: "Discovery Sciences", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" },
  { title: "Bioanalytical Labs", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" },
  { title: "Biomarker Services", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80" },
];

const Services = () => {
  return (
    <section className="py-16 bg-iqviaLightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-iqviaDark">Our Services</h2>
           <div className="w-16 h-1 bg-iqviaGreen mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white shadow-md group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Overlay on hover (optional style choice) */}
                <div className="absolute inset-0 bg-iqviaBlue/0 group-hover:bg-iqviaBlue/10 transition-colors"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-iqviaBlue mb-4">{service.title}</h3>
                <div className="flex items-center text-iqviaGreen font-bold uppercase text-xs tracking-wider">
                  Learn more <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;