import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef(null);

  // --- 1. HERO SLIDER DATA ---
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070",
      title: "Welcome to Aqlivia Global Research",
      button: "Learn More"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000",
      title: "Accelerating Clinical Innovation",
      button: "Our Technologies"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000",
      title: "Connecting Data Globally",
      button: "Explore Network"
    }
  ];

  // --- 2. AUTOMATIC SLIDER LOGIC ---
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // --- 3. SCROLL CAROUSEL LOGIC ---
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      if (direction === 'left') {
        current.scrollBy({ left: -300, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }
  };

  // --- 4. SERVICES DATA (12 Items) ---
  const servicesList = [
    { id: 'consulting', title: "Consulting", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" },
    { id: 'formulations', title: "Formulations", img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600" },
    { id: 'pharmacovigilance', title: "Pharmacovigilance", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600" },
    { id: 'biosimilars', title: "Biosimilars", img: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=600" },
    { id: 'molecular-diagnostics', title: "Molecular Diagnostics", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600" },
    { id: 'biostatistics', title: "Biostatistics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600" },
    { id: 'medical-writing', title: "Medical Writing", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600" },
    { id: 'project-management', title: "Project Management", img: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=600" },
    { id: 'clinical-monitoring', title: "Clinical Monitoring", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600" },
    { id: 'pharma-research', title: "Pharma Research Solutions", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600" },
    { id: 'computed-tomography', title: "Computed Tomography (CT)", img: '\ct.jpeg' },
    { id: 'ai-clinical-trials', title: "AI (Clinical Trials)", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600" }
  ];

  return (
    <div className="w-full">
      
      {/* =======================
          HERO SECTION
      ======================== */}
      <section className="relative h-[80vh] md:h-[105vh] w-full overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out flex items-center ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#140B42]/95 via-[#140B42]/80 to-[#140B42]/20"></div>

            {/* Content */}
            <div className={`relative z-20 max-w-[1440px] mx-auto px-6 w-full transition-all duration-1000 ${
              index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="max-w-3xl md:pl-[5%] text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-6 md:mb-8 leading-tight">
                  {slide.title.split(' ').slice(0, -3).join(' ')} <br className="hidden md:block"/>
                  <span className="font-extrabold block md:inline mt-2 md:mt-0">{slide.title.split(' ').slice(-3).join(' ')}</span>
                </h1>
                <button className="bg-primary hover:bg-[#005a8e] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-full font-bold uppercase text-sm md:text-base transition-transform hover:-translate-y-1 shadow-lg">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* --- FIXED SLIDER INDICATORS --- */}
        <div className="absolute bottom-6 md:bottom-2 left-1/2 transform -translate-x-1/2 z-30">
            <div className="bg-transparent rounded-full px-7 py-2 flex items-center gap-2 shadow-lg">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                            idx === currentSlide 
                                ? 'w-8 bg-[#f7fbfd]' 
                                : 'w-4 bg-gray-200 hover:bg-gray-400' 
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
      </section>


      {/* =======================
          INTRO SECTION (Text Only)
      ======================== */}
      <section className="py-16 md:py-10 px-6 md:px-60 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-left max-w-5xl mx-auto space-y-6 md:space-y-2">
            <h2 className="text-[#140B42] text-2xl md:text-3xl lg:text-3xl font-bold leading-snug md:leading-tight">
              Aqvilia Laboratories is a global leader in drug discovery and development laboratory services, offering a comprehensive suite of central laboratory and specialty biomarker services.
            </h2>
            <p className="text-[#545454] text-sm md:text-sm leading-relaxed">
              In a complex environment, we work closely with customers to understand their unique needs and provide the right mix of in-depth scientific and operational expertise, specialty lab services and next-generation lab technologies to achieve their goals with efficiency. At each stage of drug discovery and development, the Aqvilia Laboratories team is ready to deliver timely and reliable outcomes, turning innovative ideas into groundbreaking milestones for patients in need.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          SERVICES SECTION (Carousel - 12 Items)
      ======================== */}
      <section className="py-16 md:py-5 px-6 bg-white-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Services Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 px-2 gap-8">
            <h2 className="text-darkBlue text-2xl md:text-3xl font-bold">Our Services</h2>
            {/* Arrows hidden on very small screens, shown on md+ */}
            <div className="hidden md:flex gap-3">
              <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaChevronLeft />
              </button>
              <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Services Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-8 md:pb-12 pt-4 px-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {servicesList.map((srv, i) => (
              
              // LINK WRAPPER: Makes the entire card clickable
              <Link 
                key={i} 
                to={`/services/${srv.id}`} 
                className="min-w-[260px] md:min-w-[300px] h-[300px] md:h-[340px] bg-white rounded-xl shadow-md overflow-hidden relative group cursor-pointer transition-all duration-300 hover:-translate-y-2 md:hover:-translate-y-4 hover:shadow-2xl border-b-4 border-transparent hover:border-primary snap-start block"
              >
                <img 
                  src={srv.img} 
                  alt={srv.title} 
                  className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="h-[100px] md:h-[120px] flex items-center justify-center p-4">
                  <h3 className="text-darkBlue text-lg md:text-xl font-medium group-hover:text-primary transition-colors text-center">
                    {srv.title}
                  </h3>
                </div>
              </Link>

            ))}
          </div>

        </div>
      </section>

      {/* =======================
          RESEARCH SECTION (Clickable Cards)
      ======================== */}
      <section className="py-16 md:py-5 px-6 bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-darkBlue text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-left">Clinical Trials - Research</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                id: "medical-device-trials",
                title: "Medical Device Trials", 
                desc: "Compliance with the Medical Device Directive.", 
                img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800" 
              },
              { 
                id: "radio-imaging-trials",
                title: "Radio Imaging Trials", 
                desc: "Advanced imaging for precise clinical decisions.", 
                img: "/ct.jpeg" 
              },
              { 
                id: "nutraceutical-trials",
                title: "Nutraceutical Trials", 
                desc: "Nutraceuticals have both nutritional and pharmaceutical characters.", 
                img: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=800" 
              },
            ].map((item, i) => (
              
              // LINK WRAPPER
              <Link 
                to={`/services/${item.id}`} 
                key={i} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 text-left group block"
              >
                <img src={item.img} alt={item.title} className="w-full h-[200px] md:h-[220px] object-cover" />
                <div className="p-6 md:p-8">
                  <h3 className="text-darkBlue text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-textLight mb-4 md:mb-6 text-sm leading-relaxed">{item.desc}</p>
                  <span className="bg-black text-white text-[10px] md:text-xs font-bold px-5 py-2 md:px-6 md:py-2.5 rounded-full group-hover:bg-primary transition-colors uppercase">
                    Read More
                  </span>
                </div>
              </Link>

            ))}
          </div>
        </div>
      </section>

      {/* =======================
          BLOG SECTION
      ======================== */}
      <section className="py-16 md:py-12 px-6 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-darkBlue text-2xl md:text-3xl font-bold mb-8 md:mb-12">Latest News & Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              { tag: "Press Release", title: "Aqlivia Launches Site Lab Navigator", desc: "A breakthrough e-Requisition solution.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
              { tag: "Bioanalysis Blog", title: "19th WRIB Part 1", desc: "Insights from the upcoming event.", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800" },
            ].map((post, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                <div className="h-[200px] md:h-[300px] overflow-hidden">
                   <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 md:p-8">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">{post.tag}</span>
                  <h3 className="text-darkBlue text-xl md:text-2xl font-bold mb-3 md:mb-4">{post.title}</h3>
                  <p className="text-textLight text-sm md:text-base mb-4 md:mb-6">{post.desc}</p>
                  <div className="text-primary font-bold text-xs md:text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;