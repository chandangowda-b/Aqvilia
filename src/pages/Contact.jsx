import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="w-full bg-white">
      
      {/* =======================
          HERO SECTION (Video + Blue Overlay)
      ======================== */}
      <section className="relative h-[95vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden">
        
        {/* 1. VIDEO BACKGROUND */}
        <video 
          // Added 'object-[center_20%]' to shift the video view
          className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          {/* Placeholder video - Replace 'src' with your actual video file path if you have one */}
          <source src="src/assets/aqvilia_contact_us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 2. LIGHT BLUE TINT (The Overlay) */}
        {/* This applies your #009CDE color with 60% opacity mixed over the video */}
        <div className="absolute inset-0 bg-[#009CDE]/60 mix-blend-multiply"></div>
        
        {/* 3. GRADIENT (For Text Readability) */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/30 to-transparent"></div>

        {/* 4. HERO TEXT */}
        <h1 className="relative z-10 text-4xl md:text-8xl font-bold text-white tracking-wide text-center drop-shadow-md">
          Let's Connect
        </h1>
      </section>

      {/* =======================
          CONTENT SECTION
      ======================== */}
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        
        {/* 1. TOP LINKS (Resource List) */}
        <div className="mb-12">
          <ul className="space-y-3 text-sm text-[#545454] list-disc pl-5 leading-relaxed">
            <li>
              For <strong>Career Opportunities</strong> or specific job/role questions, please visit our <Link to="/careers" className="text-primary hover:underline font-semibold">Careers Page</Link>.
            </li>
            <li>
              To <strong>Submit Specimens</strong>, please visit our <a href="#" className="text-primary hover:underline font-semibold">Specimen Submission Site</a>.
            </li>
            <li>
              Need <strong>Investigator Site Support</strong> (lab reports, supply requests, etc.)? Visit <a href="#" className="text-primary hover:underline font-semibold">Portals here</a>.
            </li>
            <li>
              Need support with <strong>Portal Access</strong>? <a href="#" className="text-primary hover:underline font-semibold">Click Here</a>.
            </li>
            <li>
              For specific location <strong>Phone Numbers</strong>, please visit our <a href="#" className="text-primary hover:underline font-semibold">Locations page</a>.
            </li>
          </ul>
          <p className="mt-6 text-xs text-gray-500 italic">
            Complete the form below to be contacted by our Customer Solutions Team.
          </p>
        </div>

        {/* 2. CONTACT FORM */}
        <form className="space-y-8">
          
          {/* Row 1: Names */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="First Name *" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400" required />
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="Last Name *" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400" required />
            </div>
          </div>

          {/* Row 2: Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <input type="email" placeholder="Email Address *" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400" required />
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="Business Phone" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400" />
            </div>
          </div>

          {/* Row 3: Job Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="Job Title *" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400" required />
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="Company *" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400" required />
            </div>
          </div>

          {/* INTERESTS CHECKBOXES */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <label className="block text-sm font-bold text-darkBlue mb-4 uppercase tracking-wider">I am interested in:</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
              {['Research Technology', 'Drug Development', 'Bioanalytics & ADME Services', 'Bioinformatics', 'Biomarker / Assay Services', 'Bioprospecting & Specimen Mgmt', 'Central Laboratory Services', 'Cell & Gene Therapy', 'Clinical Lab Services', 'COVID-19 / Safety Testing', 'Companion Diagnostics', 'Decentralized Laboratory Solutions', 'Flow Cytometry', 'Genomics Services', 'Immunogenicity', 'Lab Data Management', 'Translational Science', 'Vaccine Clinical Trial Testing'].map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary cursor-pointer" />
                  <span className="text-xs text-gray-600 group-hover:text-primary transition-colors">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* COUNTRY SELECT */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Country *</label>
            <div className="relative">
              <select className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none bg-white text-gray-700">
                <option value="">Please Select</option>
                <option value="US">United States</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
                <option value="CN">China</option>
                <option value="JP">Japan</option>
              </select>
              {/* Custom Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* TEXT AREAS */}
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Additional Comments or Details *</label>
            <textarea rows="4" className="w-full border border-red-300/50 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400 resize-none"></textarea>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">How did you hear about us?</label>
            <textarea rows="2" className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-400 resize-none"></textarea>
          </div>

          {/* PRIVACY TEXT */}
          <div className="text-[10px] text-gray-500 leading-normal space-y-2">
            <p>
              Aqlivia is committed to protecting and respecting your privacy, and we’ll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you.
            </p>
            <p className="flex items-start gap-2">
              <input type="checkbox" className="mt-0.5" />
              <span>I agree to receive other communications from Aqlivia.</span>
            </p>
            <p>
              You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our <a href="#" className="underline text-primary">Privacy Policy</a>.
            </p>
            <p>
              By clicking submit below, you consent to allow Aqlivia to store and process the personal information submitted above to provide you the content requested.
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="flex justify-center pt-4">
            <button className="bg-[#007CC3] hover:bg-[#005a8e] text-white font-bold uppercase text-sm px-12 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;