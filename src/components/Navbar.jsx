import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe, FaSearch, FaChevronDown, FaBars, FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import logoImg from '../assets/aqvilia.png'; 

// Import Mega Menus
import ServicesMenu from './mega-menus/ServicesMenu';
import TherapeuticMenu from './mega-menus/TherapeuticMenu';
import InnovationMenu from './mega-menus/InnovationMenu';
import ResourcesMenu from './mega-menus/ResourcesMenu';
import CareersMenu from './mega-menus/CareersMenu';

const NAV_DATA = {
  services: ['Consulting', 'Formulations', 'Pharmacovigilance', 'Biosimilars', 'Molecular Diagnostics', 'Biostatistics', 'Medical Writing', 'Project Management', 'Clinical Monitoring'],
  therapeutic: ['Overview', 'Cell and Gene Therapy', 'Central Nervous System', 'Obesity & Endocrinology', 'GI and Hepatology', 'Immunology', 'Infectious Diseases', 'Oncology'],
  innovation: ['Overview', 'Science Innovation', 'Operational Innovation', 'Digital Innovation'],
  resources: ['Solutions', 'Thought Leadership', 'Multimedia', 'Accreditations', 'Visitor Guides'],
  careers: ['Working at Aqlivia', 'Life at Aqlivia', 'Search Jobs']
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENGLISH'); 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileExpanded, setMobileExpanded] = useState({});
  
  const navRef = useRef(null);
  const searchInputRef = useRef(null);

  const toggleMenu = (menuName) => setActiveMenu(activeMenu === menuName ? null : menuName);
  const closeMenu = () => setActiveMenu(null);
  const toggleMobileSection = (section) => setMobileExpanded(prev => ({ ...prev, [section]: !prev[section] }));

  // --- HELPER: Generate Links for Mobile Items ---
  const getMobileLink = (category, item) => {
    const slug = item.toLowerCase().replace(/ /g, '-');
    if (category === 'services') return `/services/${slug}`;
    if (category === 'therapeutic') return `/services/${slug}`; 
    return '/contact'; 
  };

  // --- EFFECTS ---
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setActiveMenu(null);
      if (isSearchOpen && !event.target.closest('#search-drawer') && !event.target.closest('#search-trigger')) {
         setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  useEffect(() => {
    const updateLabel = () => {
      const googleSpan = document.querySelector('.goog-te-menu-value span:first-child');
      if (googleSpan) {
        let text = googleSpan.textContent.trim();
        if (text.includes('Select Language')) text = 'ENGLISH';
        setCurrentLang(text);
      }
    };
    const interval = setInterval(updateLabel, 500);
    return () => clearInterval(interval);
  }, []);

  const handleLanguageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const googleButton = document.querySelector('.goog-te-gadget-simple');
    if (googleButton) googleButton.click();
  };

  // --- COMPONENTS ---
  const NavItem = ({ name, label }) => {
    const isMenuOpen = activeMenu === name;
    return (
      <div className="relative h-full flex items-center">
        <button 
          onClick={() => toggleMenu(name)} 
          className={`font-bold text-base flex items-center gap-1 hover:text-primary transition-colors relative
            ${isMenuOpen ? 'text-primary' : 'text-white'}`}
        >
          {label} 
          <FaChevronDown size={10} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          <span className={`absolute -bottom-2 left-0 w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></span>
        </button>
      </div>
    );
  };

  const NavLinkItem = ({ to, label }) => (
    <div className="relative h-full flex items-center">
      <Link 
        to={to} 
        onClick={closeMenu} 
        className="group text-white font-bold text-sm flex items-center gap-1 hover:text-primary transition-colors relative"
      >
        {label}
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-white transition-all duration-300 scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 origin-left"></span>
      </Link>
    </div>
  );

  return (
    // RESTORED: Absolute + Transparent Gradient on ALL pages
    <header 
      ref={navRef}
      className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-darkBlue/90 via-darkBlue/60 to-transparent font-sans"
    >
      <div id="google_translate_element" style={{ display: 'none' }}></div> 

      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center relative z-50">
        <div>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logoImg} alt="Logo" className="h-8 md:h-10 w-auto brightness-0 invert" />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex flex-col items-end gap-2">
          {/* TOP BAR */}
          <div className="flex gap-4 text-[11px] text-white font-bold uppercase tracking-wider items-center">
            <div 
              className="relative cursor-pointer h-[30px] pr-3 border-r border-white/20 flex items-center gap-1 hover:text-primary transition-colors z-50"
              onClick={handleLanguageClick}
            >
              <FaGlobe size={13} className="mt-[1px]" />
              <span className="text-[11px] font-bold uppercase tracking-wider truncate">{currentLang}</span>
            </div>

            <button 
              id="search-trigger"
              onClick={() => setIsSearchOpen(!isSearchOpen)} 
              className={`flex items-center gap-2 transition-colors cursor-pointer z-50 ${isSearchOpen ? 'text-primary' : 'hover:text-primary'}`}
            >
              <span className="text-xs">Search</span> 
              {isSearchOpen ? <FaTimes size={14} /> : <FaSearch size={14} />}
            </button>
          </div>

          {/* MAIN NAV LINKS */}
          <nav className="flex items-center gap-10">
            <NavItem name="services" label="Services" />
            <NavItem name="therapeutic" label="Therapeutic Expertise" />
            <NavItem name="innovation" label="Innovation" />
            <NavItem name="resources" label="Resources" />
            <NavLinkItem to="/about" label="About Us" />
            <NavItem name="careers" label="Careers" />
            <Link to="/contact" className="bg-primary hover:bg-[#00629b] text-white text-xs font-bold uppercase px-6 py-3 rounded-full transition-all shadow-md">Contact Us</Link>
          </nav>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      
      {/* SEARCH DRAWER */}
      <div 
        id="search-drawer"
        className={`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-out overflow-hidden z-40 origin-top
          ${isSearchOpen ? 'max-h-[80px] opacity-100 border-t-4 border-primary' : 'max-h-0 opacity-0'}`}
      >
        <div className="max-w-[1440px] mx-auto px-6 py-5 flex items-center">
           <FaSearch className="text-primary mr-4 text-xl" />
           <input 
             ref={searchInputRef} type="text" placeholder="Search Aqlivia..." 
             className="flex-1 text-lg text-darkBlue placeholder-gray-400 outline-none bg-transparent font-medium"
             value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
           />
           <button onClick={() => setIsSearchOpen(false)} className="ml-4 text-xs font-bold text-gray-400 hover:text-red-600 uppercase tracking-wider">Close</button>
        </div>
      </div>

      {/* =======================
          MOBILE MENU OVERLAY
      ======================== */}
      <div className={`fixed inset-0 bg-[#140B42] z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 overflow-y-auto md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         
         <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
           <div className="relative flex items-center gap-2 text-white w-[150px] h-[40px]" onClick={handleLanguageClick}>
              <FaGlobe /> 
              <span className="text-sm font-bold uppercase truncate">{currentLang}</span>
           </div>
           <div className="text-white text-lg"><FaSearch /></div>
        </div>

        <div className="flex flex-col gap-2 text-white pb-20">
          {Object.keys(NAV_DATA).map(key => (
            <div key={key} className="border-b border-white/10">
              <button onClick={() => toggleMobileSection(key)} className="flex justify-between items-center w-full text-lg font-bold py-3 capitalize">
                {key === 'therapeutic' ? 'Therapeutic Expertise' : key} {mobileExpanded[key] ? <FaMinus size={12}/> : <FaPlus size={12}/>}
              </button>
              
              {/* DROPDOWN LINKS */}
              {mobileExpanded[key] && (
                <div className="pl-4 pb-4 flex flex-col gap-3 text-sm text-gray-300">
                  {NAV_DATA[key].map(item => (
                    <Link 
                      key={item} 
                      // 1. DYNAMIC LINK GENERATION
                      to={getMobileLink(key, item)} 
                      // 2. CLOSE MENU ON CLICK
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-primary py-1 block"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* STATIC LINKS */}
          <div className="border-b border-white/10">
            <Link to="/about" className="flex justify-between items-center w-full text-lg font-bold py-3" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </div>
          
          <Link to="/contact" className="mt-8 bg-primary text-center text-white py-3 rounded-full font-bold uppercase shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>

      {/* MEGA MENUS (Desktop) */}
      <div className="hidden md:block">
        {activeMenu === 'services' && <ServicesMenu closeMenu={closeMenu} />}
        {activeMenu === 'therapeutic' && <TherapeuticMenu closeMenu={closeMenu} />}
        {activeMenu === 'innovation' && <InnovationMenu closeMenu={closeMenu} />}
        {activeMenu === 'resources' && <ResourcesMenu closeMenu={closeMenu} />}
        {activeMenu === 'careers' && <CareersMenu closeMenu={closeMenu} />}
      </div>
    </header>
  );
};

export default Navbar;