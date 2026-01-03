import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// --- PAGES ---
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

// --- HELPER: Scroll To Top ---
// This ensures that when you navigate to a new page, it starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="font-sans antialiased text-textDark">
      
      {/* 1. Navbar (Global) */}
      <Navbar />
      
      {/* 2. Scroll Helper */}
      <ScrollToTop />

      {/* 3. Routing Logic */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Dynamic Services Page (e.g., /services/consulting) */}
        <Route path="/services/:serviceId" element={<ServiceDetail />} />

        {/* 4. CATCH-ALL ROUTE (Critical Fix) 
           If the browser loads a URL it doesn't recognize (like /index.html),
           this forces it to show the Home page instead of a blank screen.
        */}
        <Route path="*" element={<Home />} />
      </Routes>

      {/* 5. Footer & Chatbot (Global) */}
      <Footer />
      <Chatbot />
      
    </div>
  );
}

export default App;