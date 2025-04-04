
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg flex flex-col" style={{ width: '350px', height: '500px' }}>
          <div className="bg-resume-primary text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-medium">Resume Assistant</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-resume-secondary"
              onClick={toggleChatbot}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-grow">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/f_tqI0HzpZdHpxdfHGuGB"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-b-lg"
            ></iframe>
          </div>
        </div>
      ) : (
        <Button 
          className="rounded-full h-14 w-14 flex items-center justify-center bg-resume-primary hover:bg-resume-secondary shadow-lg"
          onClick={toggleChatbot}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatbotWidget;
