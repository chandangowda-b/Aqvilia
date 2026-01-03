import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail'; // <--- The new master template

function App() {
  return (
    <div className="font-sans antialiased text-textDark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Dynamic Route: Handles /services/consulting, /services/biostatistics, etc. */}
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;