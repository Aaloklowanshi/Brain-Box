'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://chat.whatsapp.com/YOUR_CHAT_LINK'; // Replace with your WhatsApp chat link
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-110"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </div>
  );
};

export default WhatsAppIcon;
