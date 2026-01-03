import React, { useState, useEffect, useRef } from 'react';
import { FaCommentDots, FaPaperPlane, FaTimes, FaChevronLeft, FaListUl } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // --- INITIAL OPTIONS (From your screenshot) ---
  const INITIAL_OPTIONS = [
    { label: "Questions about our Science/Services/Pricing", value: "science" },
    { label: "Investigator Site Support (Holiday Schedules. Lab Reports. Supplies/Resupply. etc)", value: "support" },
    { label: "Portal Access / Password Reset", value: "portal" },
    { label: "Global Accreditations & Laboratory Certifications", value: "certs" },
    { label: "Careers / Employment", value: "careers" },
    { label: "Locations / Phone Numbers", value: "locations" }
  ];

  // --- INITIAL MESSAGES ---
  const INITIAL_MESSAGES = [
    { 
      id: 1, 
      text: "We are here if you need us.", 
      sender: "bot",
      type: "text"
    },
    {
      id: 2,
      text: "What can we help you with today?",
      sender: "bot",
      type: "options",
      options: INITIAL_OPTIONS
    }
  ];

  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  // --- SCROLL TO BOTTOM ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // --- RESTART CHAT ---
  const handleRestart = () => {
    setMessages(INITIAL_MESSAGES);
  };

  // --- BOT LOGIC ENGINE ---
  const handleBotResponse = (userText, value = null) => {
    setIsTyping(true);

    let responseText = "I'm not sure about that. Please contact our support team directly.";
    let link = null;

    // Normalize text for matching if value isn't provided
    const matchKey = value || userText.toLowerCase();

    // 1. SCIENCE / SERVICES / PRICING
    if (matchKey === 'science' || userText.includes('science') || userText.includes('pricing')) {
      responseText = "Our scientific experts provide comprehensive support for clinical trials. For specific pricing or service details, please request a proposal.";
      link = { text: "Request Proposal", url: "/contact" };
    }
    
    // 2. INVESTIGATOR SITE SUPPORT
    else if (matchKey === 'support' || userText.includes('investigator') || userText.includes('holiday')) {
      responseText = "For Investigator Site Support (including lab reports and supplies), please log in to the Investigator Portal or contact your Project Manager.";
      link = { text: "Investigator Portal", url: "/resources" };
    }

    // 3. PORTAL ACCESS
    else if (matchKey === 'portal' || userText.includes('portal') || userText.includes('password')) {
      responseText = "Having trouble logging in? You can reset your password or request access on our portal login page.";
      link = { text: "Reset Password", url: "/resources" };
    }

    // 4. ACCREDITATIONS
    else if (matchKey === 'certs' || userText.includes('accreditation') || userText.includes('certification')) {
      responseText = "We maintain global standards including CAP, CLIA, and NGSP certifications across our laboratories.";
      link = { text: "View Certifications", url: "/about" };
    }

    // 5. CAREERS
    else if (matchKey === 'careers' || userText.includes('job') || userText.includes('employment')) {
      responseText = "We are always looking for talent! View our latest job openings on the Careers page.";
      link = { text: "View Openings", url: "/careers" };
    }

    // 6. LOCATIONS
    else if (matchKey === 'locations' || userText.includes('phone') || userText.includes('location')) {
      responseText = "We have global laboratories in the US, UK, China, India, and Japan. Find specific phone numbers here:";
      link = { text: "View Locations", url: "/contact" };
    }

    // DEFAULT GREETING
    else if (userText.match(/(hello|hi|hey)/i)) {
      responseText = "Hello! Please choose an option above so I can direct you to the right team.";
    }

    // --- SIMULATE NETWORK DELAY ---
    setTimeout(() => {
      setIsTyping(false);
      
      const newBotMessage = {
        id: Date.now(),
        text: responseText,
        sender: "bot",
        type: "text",
        link: link
      };

      setMessages(prev => [...prev, newBotMessage]);
    }, 1200);
  };

  // --- SEND MESSAGE HANDLER ---
  const handleSendMessage = () => {
    if (!input.trim()) return;

    // 1. Add User Message
    setMessages(prev => [...prev, { id: Date.now(), text: input, sender: "user", type: "text" }]);
    const currentInput = input;
    setInput("");

    // 2. Trigger Bot Response
    handleBotResponse(currentInput);
  };

  // --- OPTION CLICK HANDLER ---
  const handleOptionClick = (option) => {
    // Add User Message (Visual only)
    setMessages(prev => [...prev, { id: Date.now(), text: option.label, sender: "user", type: "text" }]);
    
    // Trigger Bot Response with the specific 'value'
    handleBotResponse(option.label, option.value);
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#00A3A1] w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-[0_4px_14px_rgba(0,163,161,0.4)] cursor-pointer z-50 hover:scale-110 hover:rotate-3 transition-all duration-300"
      >
        {isOpen ? <FaTimes /> : <FaCommentDots />}
      </div>

      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[600px] max-h-[80vh] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)] origin-bottom-right">
          
          {/* HEADER (Teal Color Match) */}
          <div className="bg-[#00A3A1] text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
               {/* Back/Reset Button */}
               <button onClick={handleRestart} className="hover:bg-white/20 p-1 rounded-full transition-colors" title="Restart Chat">
                 <FaChevronLeft className="text-white text-lg"/>
               </button>
               
               {/* Icon & Title */}
               <div className="flex items-center gap-2">
                 <div className="bg-white/20 p-1.5 rounded-full border border-white/30">
                   <FaListUl className="text-white text-sm"/>
                 </div>
                 <span className="font-bold text-base leading-tight">Customer Solutions Team</span>
               </div>
            </div>
            {/* Close Button */}
            <FaTimes onClick={() => setIsOpen(false)} className="cursor-pointer text-xl hover:text-white/80 transition-colors"/>
          </div>

          {/* MESSAGES AREA */}
          <div className="flex-1 p-4 bg-white overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                
                {/* Message Bubble */}
                {msg.type !== 'options' && (
                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-[15px] shadow-sm leading-snug relative ${
                    msg.sender === 'user' 
                      ? 'bg-[#00A3A1] text-white rounded-tr-none' 
                      : 'bg-[#f0f0f0] text-gray-800 rounded-tl-none'
                  }`}>
                    {msg.text}

                    {/* Link Button (if any) */}
                    {msg.link && (
                      <Link to={msg.link.url} className="block mt-3 text-center bg-white text-[#00A3A1] py-2 rounded-lg text-xs font-bold uppercase hover:bg-gray-50 transition-colors border border-[#00A3A1]/20">
                        {msg.link.text}
                      </Link>
                    )}
                  </div>
                )}

                {/* Options Buttons (Stacked Vertically like Screenshot) */}
                {msg.type === 'options' && (
                   <div className="w-full mt-2 space-y-2">
                      {/* Show the question text first if it exists */}
                      {msg.text && (
                        <div className="bg-[#f0f0f0] text-gray-800 rounded-2xl rounded-tl-none p-3.5 text-[15px] shadow-sm max-w-[85%] mb-3">
                          {msg.text}
                        </div>
                      )}
                      
                      {/* Render Buttons */}
                      <div className="flex flex-col items-start gap-2 w-full pl-2">
                        {msg.options.map((opt, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleOptionClick(opt)}
                            className="text-left text-[13px] bg-white border border-gray-300 text-[#005a8e] px-4 py-3 rounded-2xl hover:bg-[#f0f4f8] hover:border-[#005a8e] transition-all font-semibold shadow-sm w-full md:w-[90%]"
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                   </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-[#f0f0f0] text-gray-500 rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AREA (Matching Screenshot) */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="relative">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border border-gray-300 rounded-full pl-5 pr-12 py-3 text-sm outline-none text-gray-700 placeholder-gray-500 focus:border-[#00A3A1] transition-colors" 
                placeholder="Choose an option"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={() => handleSendMessage()} 
                disabled={!input.trim()}
                className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${input.trim() ? 'text-[#00A3A1] hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;