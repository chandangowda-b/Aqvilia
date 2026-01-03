import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicroscope, FaGlobe, FaBalanceScale, FaHandHoldingHeart } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full">
      
      {/* =======================
          HERO SECTION
      ======================== */}
      <section className="relative h-[80vh] w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000')" }}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140B42]/90 to-[#140B42]/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full pt-20">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">About Aqlivia</h1>
          <p className="text-xl text-white/90 font-light max-w-2xl leading-relaxed">
            Transforming scientific insights into impactful healthcare solutions that improve patient outcomes and shape the future of medicine.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-primary py-4 z-20">
           <div className="max-w-[1440px] mx-auto px-6 text-white text-sm font-semibold">
              {/* Optional Breadcrumbs or Tagline could go here */}
           </div>
        </div>
      </section>


      {/* =======================
          WHO WE ARE SECTION
      ======================== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-darkBlue text-4xl font-bold mb-8">Who We Are</h2>
            <p className="text-textLight text-lg leading-relaxed mb-6">
              Aqlivia is a global specialty Contract Research Organization (CRO) dedicated to advancing innovation in pharmaceutical, biotechnology, and healthcare research. The company partners with organizations across the drug and medical device development lifecycle, delivering high-quality, science-driven solutions that accelerate progress from discovery to market.
            </p>
            <p className="text-textLight text-lg leading-relaxed mb-8">
              With expertise spanning drug discovery, clinical research, medical imaging trials, and pharmacovigilance, Aqlivia supports both pre-approval and post-market studies.
            </p>
            <Link to="/contact" className="bg-primary hover:bg-[#005a8e] text-white px-8 py-3 rounded-full font-bold uppercase transition-transform hover:-translate-y-1 shadow-lg inline-block">
              Partner With Us
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000" 
              alt="About Team" 
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>


      {/* =======================
          CORE VALUES SECTION
      ======================== */}
      <section className="py-20 px-6 bg-[#f4f8fb]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <FaMicroscope className="text-5xl text-primary mx-auto mb-6" />
              <h4 className="text-darkBlue text-xl font-bold mb-4">Scientific Excellence</h4>
              <p className="text-textLight text-sm leading-relaxed">
                Delivering high-quality, science-driven solutions that accelerate progress from discovery to market.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <FaGlobe className="text-5xl text-primary mx-auto mb-6" />
              <h4 className="text-darkBlue text-xl font-bold mb-4">Global Reach</h4>
              <p className="text-textLight text-sm leading-relaxed">
                Combining international standards with local expertise to deliver reliable and compliant services.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <FaBalanceScale className="text-5xl text-primary mx-auto mb-6" />
              <h4 className="text-darkBlue text-xl font-bold mb-4">Ethics & Integrity</h4>
              <p className="text-textLight text-sm leading-relaxed">
                A strong focus on quality, ethics, and data integrity enables long-term trusted partnerships.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <FaHandHoldingHeart className="text-5xl text-primary mx-auto mb-6" />
              <h4 className="text-darkBlue text-xl font-bold mb-4">Patient Outcomes</h4>
              <p className="text-textLight text-sm leading-relaxed">
                Committed to impactful solutions that improve patient outcomes and shape the future of medicine.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =======================
          GLOBAL FOOTPRINT
      ======================== */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-darkBlue text-4xl font-bold mb-6">Our Global Footprint</h2>
          <p className="text-textLight text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Aqlivia operates with a global footprint, working across multiple therapeutic areas including oncology, metabolic disorders, immunology, biologics, and biosimilars. We help clients achieve regulatory and scientific excellence worldwide.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1200" 
            alt="Global Map" 
            className="w-full rounded-xl shadow-lg border border-gray-100"
          />
        </div>
      </section>

    </div>
  );
};

export default About;