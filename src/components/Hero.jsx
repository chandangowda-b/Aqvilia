import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", 
      title: "Advancing Clinical Research",
      subtitle: "Global expertise in drug development and diagnostics."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
      title: "Precision & Innovation",
      subtitle: "Accelerating the path from laboratory to life-saving therapies."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581093458791-9f302e6830d7?q=80&w=2070&auto=format&fit=crop",
      title: "Trusted Global Partner",
      subtitle: "Delivering high-quality data for a healthier world."
    }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-darkBlue">
      
      {/* 1. BACKGROUND SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* 2. HERO CONTENT */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <div key={slide.id} className="animate-fadeInUp">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl font-light opacity-90 mb-8 max-w-2xl mx-auto drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link to="/services" className="bg-primary hover:bg-[#00629b] text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition-all hover:-translate-y-1 shadow-lg">
                    Our Services
                  </Link>
                  <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-darkBlue text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest transition-all hover:-translate-y-1 shadow-lg">
                    Contact Us
                  </Link>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* 3. SLIDE INDICATORS (INLINE STYLE FIX) */}
      <div 
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 30
        }}
      >
        <div 
          style={{
            backgroundColor: 'white',
            borderRadius: '9999px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                height: '6px',
                borderRadius: '999px',
                transition: 'all 0.5s ease',
                backgroundColor: index === currentSlide ? '#007CC3' : '#d1d5db',
                width: index === currentSlide ? '32px' : '12px',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;