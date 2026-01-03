import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logoImg from '../assets/aqvilia.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Address Data with Google Maps Links
  const locations = [
    {
      title: "India APAC Head Quarter",
      address: "#005, The Mark Structure, Unique Infra Building, Next to Tennis court, North Bangalore – 560097",
      mapLink: "https://www.google.com/maps/search/?api=1&query=The+Mark+Structure+Unique+Infra+Building+Bangalore"
    },
    {
      title: "R&D – Manufacturing Unit-I",
      address: "House No. 520, 2nd Floor, 9th Cross, Tank road, North East of N R Mohalla, Mysuru – 570007",
      mapLink: "https://www.google.com/maps/search/?api=1&query=520+9th+Cross+Tank+road+NR+Mohalla+Mysuru"
    },
    {
      title: "Regional Office Japan",
      address: "Kyoto Research Park, Unique Kyoto City, Kyoto – 6008813",
      mapLink: "https://www.google.com/maps/search/?api=1&query=Kyoto+Research+Park+Kyoto"
    },
    {
      title: "Regional Office Canada",
      address: "# 263, Macewan Road, SW Edmonton, Alberta – T6W0C4",
      phone: "+1 587-760-3432",
      mapLink: "https://www.google.com/maps/search/?api=1&query=263+Macewan+Road+SW+Edmonton+Alberta"
    },
    {
      title: "Regional Office Australia",
      address: "#106, Portland Drive, Cameron Park, NSW 2285",
      phone: "+61 433 690 905",
      mapLink: "https://www.google.com/maps/search/?api=1&query=106+Portland+Drive+Cameron+Park+NSW"
    }
  ];

  return (
    <footer className="bg-[#140B42] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* COLUMN 1: Brand & Social */}
          <div>
            <Link to="/" className="inline-block mb-6">
               <img src={logoImg} alt="Aqlivia Logo" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering life sciences with next-generation research, development, and consulting services designed for global impact.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><FaLinkedin size={14}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><FaTwitter size={14}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><FaFacebook size={14}/></a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 & 4: Global Locations (Spanning 2 columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Global Locations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {locations.map((loc, index) => (
                <div key={index} className="group">
                  <h5 className="text-primary font-bold text-sm mb-1">{loc.title}</h5>
                  <a 
                    href={loc.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-2 text-gray-400 text-xs hover:text-white transition-colors leading-relaxed"
                  >
                    <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-white/30 group-hover:text-primary" />
                    {loc.address}
                  </a>
                  {loc.phone && (
                    <div className="flex items-center gap-2 text-gray-400 text-xs mt-1 ml-5">
                      <FaPhone size={10} className="text-white/30" /> 
                      <span>{loc.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Aqlivia Laboratories. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Terms of Use</Link>
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;