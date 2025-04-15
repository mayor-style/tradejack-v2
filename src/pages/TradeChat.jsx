import DashSideNav from "@/components/dashboard/DashSideNav";
import InAppNav from "@/components/InAppNav";
import React, { useState, useRef, useEffect } from "react";
import landingImg4 from "./../assets/landingImg4.JPG";
import { GoDotFill } from "react-icons/go";
import { SlOptionsVertical } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { IoAttach } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineStickyNote2, MdPeopleOutline, MdWarning } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";

// Mock data for the chat 
const mockChatThreads = {
  "0xSanityy": [
    {
      id: 1,
      sender: "0xSanityy",
      isCurrentUser: false,
      message: "Hey there, I'm interested in trading my $55 Amazon gift card. What exchange rate can you offer?",
      timestamp: "10:32 AM",
      avatar: landingImg4
    },
    {
      id: 2,
      sender: "You",
      isCurrentUser: true,
      message: "Hello! I can offer 85% for the Amazon gift card. I can send payment via PayPal or CashApp, whichever you prefer.",
      timestamp: "10:35 AM"
    },
    {
      id: 3,
      sender: "0xSanityy",
      isCurrentUser: false,
      message: "80% works for me. I prefer CashApp. How does the process work?",
      timestamp: "10:37 AM",
      avatar: landingImg4
    },
    {
      id: 4,
      sender: "You",
      isCurrentUser: true,
      message: "Great! Here's how we'll proceed: First you'll initiate the trade through the platform, then once I verify the gift card, I'll release the payment via CashApp through our escrow system.",
      timestamp: "10:38 AM"
    },
    {
      id: 5,
      sender: "0xSanityy",
      isCurrentUser: false,
      message: "Perfect, I'll start the process now. Is there a transaction fee I should be aware of?",
      timestamp: "10:40 AM",
      avatar: landingImg4
    },
    {
      id: 6,
      sender: "You",
      isCurrentUser: true,
      message: "The platform charges a 2% fee for security and escrow services. It's worth it for the protection on both sides. I'll be covering that fee.",
      timestamp: "10:41 AM"
    }
  ],
  "TradeMaster": [
    {
      id: 1,
      sender: "TradeMaster",
      isCurrentUser: false,
      message: "Hi there! I have a $100 Steam gift card I'd like to trade. Can you help?",
      timestamp: "9:15 AM",
      avatar: landingImg4
    },
    {
      id: 2,
      sender: "You",
      isCurrentUser: true,
      message: "Hey TradeMaster! I can offer 82% for the Steam card. Would that work for you?",
      timestamp: "9:20 AM"
    },
    {
      id: 3,
      sender: "TradeMaster",
      isCurrentUser: false,
      message: "I was hoping for at least 85%. Any chance you could go a bit higher?",
      timestamp: "9:22 AM",
      avatar: landingImg4
    },
    {
      id: 4,
      sender: "You",
      isCurrentUser: true,
      message: "I can meet you at 83%. That's the best I can do for Steam cards right now.",
      timestamp: "9:25 AM"
    }
  ],
  "CryptoTrader": [
    {
      id: 1,
      sender: "CryptoTrader",
      isCurrentUser: false,
      message: "Hello! I'd like to trade BTC for your USDT. What's your current rate?",
      timestamp: "11:05 AM",
      avatar: landingImg4
    },
    {
      id: 2,
      sender: "You",
      isCurrentUser: true,
      message: "Hi CryptoTrader! I can offer market rate minus 0.5% for BTC to USDT exchanges. How much are you looking to trade?",
      timestamp: "11:10 AM"
    },
    {
      id: 3,
      sender: "CryptoTrader",
      isCurrentUser: false,
      message: "I'm looking to trade about 0.15 BTC. Can you process that amount?",
      timestamp: "11:15 AM",
      avatar: landingImg4
    },
    {
      id: 4,
      sender: "You",
      isCurrentUser: true,
      message: "Yes, I can handle that volume. Let's use the platform's escrow system to ensure a safe trade.",
      timestamp: "11:18 AM"
    },
    {
      id: 5,
      sender: "CryptoTrader",
      isCurrentUser: false,
      message: "Perfect. I'll set up the trade now. What's the expected processing time?",
      timestamp: "11:22 AM",
      avatar: landingImg4
    }
  ]
};

// Mock list of users in the chat
const mockUsers = [
  { id: 1, name: "0xSanityy", status: "online", avatar: landingImg4 },
  { id: 2, name: "TradeMaster", status: "offline", avatar: landingImg4 },
  { id: 3, name: "CryptoTrader", status: "online", avatar: landingImg4 },
  { id: 4, name: "GiftCardPro", status: "away", avatar: landingImg4 },
  { id: 5, name: "PayPalExchange", status: "online", avatar: landingImg4 }
];

// List of sensitive terms to trigger the warning modal
const sensitiveTerms = ["email", "phone", "whatsapp", "telegram", "signal", "gmail", "yahoo", "hotmail", "@", "contact"];

const TradeChat = () => {
  const [currentChat, setCurrentChat] = useState("0xSanityy");
  const [messages, setMessages] = useState(mockChatThreads[currentChat]);
  const [messageInput, setMessageInput] = useState("");
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showChatList, setShowChatList] = useState(false);
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");
  // Track warning acknowledgments for each chat thread
  const [warningAcknowledged, setWarningAcknowledged] = useState({});
  // State for the safety warning banner
  const [showSafetyWarning, setShowSafetyWarning] = useState(true);
  const messagesEndRef = useRef(null);
  const chatContentRef = useRef(null);

  // Change current chat
  useEffect(() => {
    setMessages(mockChatThreads[currentChat] || []);
    setMessageInput("");
  }, [currentChat]);

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  
  // Close chat list when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showChatList && chatContentRef.current && !chatContentRef.current.contains(event.target)) {
        setShowChatList(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showChatList]);

  // Check if message contains sensitive information
  const checkForSensitiveInfo = (message) => {
    return sensitiveTerms.some(term => message.toLowerCase().includes(term));
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;
    
    const containsSensitiveInfo = checkForSensitiveInfo(messageInput);
    
    // Check if warning has been acknowledged for this chat
    if (containsSensitiveInfo && !warningAcknowledged[currentChat]) {
      setPendingMessage(messageInput);
      setShowWarningModal(true);
      return;
    }
    
    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      isCurrentUser: true,
      message: messageInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Update messages in the current chat thread
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    
    // Update the chat in mockChatThreads
    mockChatThreads[currentChat] = updatedMessages;
    
    setMessageInput("");
  };

  // Handle warning acknowledgment 
  const handleWarningAcknowledge = () => {
    // Mark as acknowledged for this chat thread
    setWarningAcknowledged({
      ...warningAcknowledged,
      [currentChat]: true
    });
    
    // Close the modal but don't send the message automatically
    setShowWarningModal(false);
  };

  // Handle key press to send message with Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Switch to a different chat
  const switchChat = (userName) => {
    setCurrentChat(userName);
    setShowChatList(false);
  };

  // Component for chat message
  const ChatMessage = ({ message }) => (
    <div className={`flex mb-4 ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!message.isCurrentUser && (
        <div className="h-8 w-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
          <img src={message.avatar} alt={message.sender} className="h-full w-full object-cover" />
        </div>
      )}
      <div className={`max-w-[70%] ${message.isCurrentUser ? 'bg-tradeGreen text-black' : 'bg-tradeAsh text-white'} rounded-lg px-4 py-2`}>
        {!message.isCurrentUser && (
          <p className="text-xs text-tradeFadeWhite mb-1">{message.sender}</p>
        )}
        <p className="text-sm">{message.message}</p>
        <p className="text-xs text-right mt-1 opacity-70">{message.timestamp}</p>
      </div>
    </div>
  );

  // Empty chat placeholder
  const EmptyChatPlaceholder = () => (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="bg-tradeAsh rounded-full p-6 mb-4">
        <TbBrandTelegram className="text-tradeGreen text-4xl" />
      </div>
      <h3 className="text-white text-xl font-bold mb-2">No messages yet</h3>
      <p className="text-tradeFadeWhite text-sm max-w-md">
        Start the conversation by sending a message about your trade. Remember to keep all transactions on the platform.
      </p>
    </div>
  );

  // Warning modal component 
  const WarningModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-black border border-tradeAshLight rounded-xl max-w-md w-full p-6 relative shadow-xl">
        <button 
          onClick={() => setShowWarningModal(false)}
          className="absolute top-4 right-4 text-tradeFadeWhite hover:text-white transition-colors"
        >
          <IoMdClose className="text-xl" />
        </button>
        
        <div className="flex flex-col items-center mb-6">
          <div className="bg-red-600 rounded-full p-4 mb-4">
            <BsExclamationTriangleFill className="text-white text-2xl" />
          </div>
          <h3 className="text-tradeGreen text-center text-xl font-bold">
            Security Alert
          </h3>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="bg-tradeAsh rounded-lg p-4 border-l-4 border-tradeGreen">
            <p className="text-white font-semibold mb-1">
              Staying on-platform protects you
            </p>
            <p className="text-tradeFadeWhite text-sm">
              83% of scam cases happen when users share contact info and go off-platform.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-red-600/20 p-2 rounded-full flex-shrink-0 mt-1">
              <MdWarning className="text-red-500 text-lg" />
            </div>
            <p className="text-tradeFadeWhite text-sm">
              <span className="text-white font-medium">Off-platform = No protection</span>
              <br />Trading outside means no escrow, no refunds, and no support if something goes wrong.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-tradeGreen/20 p-2 rounded-full flex-shrink-0 mt-1">
              <FaShieldAlt className="text-tradeGreen text-lg" />
            </div>
            <p className="text-tradeFadeWhite text-sm">
              <span className="text-white font-medium">Safe trading is smart trading</span>
              <br />Our platform's escrow system ensures both parties are protected.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handleWarningAcknowledge}
            className="bg-tradeGreen text-black font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-tradeGreen focus:ring-opacity-50"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );

  // Chat list component 
  const ChatList = () => (
    <div 
      ref={chatContentRef}
      className="fixed left-0 top-0 h-full bg-black border-r border-tradeAshLight w-64 z-20 lg:z-10"
      style={{ 
        top: 'calc(56px + 2.5%)',
        height: 'calc(100vh - 56px - 5%)',
        maxHeight: 'calc(100vh - 56px - 5%)'
      }}
    >
      <div className="p-4 border-b border-tradeAshLight flex justify-between items-center">
        <h3 className="text-white font-bold">Your Chats</h3>
        <button onClick={() => setShowChatList(false)} className="text-white">
          <IoMdClose />
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(100%-60px)] custom-scrollbar">
        {Object.keys(mockChatThreads).map(userName => {
          const user = mockUsers.find(u => u.name === userName);
          const lastMessage = mockChatThreads[userName][mockChatThreads[userName].length - 1];
          
          return (
            <div 
              key={userName} 
              className={`flex items-center gap-3 p-3 hover:bg-tradeAsh cursor-pointer ${currentChat === userName ? 'bg-tradeAsh' : ''}`}
              onClick={() => switchChat(userName)}
            >
              <div className="relative">
                <img src={user?.avatar} alt={userName} className="w-10 h-10 rounded-full" />
                <div className="absolute bottom-0 right-0">
                  <GoDotFill className={`text-xs ${user?.status === 'online' ? 'text-tradeGreen' : user?.status === 'away' ? 'text-tradeOrange' : 'text-tradeFadeWhite'}`} />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-white text-sm font-medium">{userName}</p>
                <p className="text-tradeFadeWhite text-xs truncate">{lastMessage?.message}</p>
              </div>
              <div className="text-tradeFadeWhite text-xs">{lastMessage?.timestamp}</div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Overlay for clicking outside the chat list to close it
  const ChatListOverlay = () => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-30 z-10"
      onClick={() => setShowChatList(false)}
    />
  );

  return (
    <>
      <InAppNav />
      <div className="flex lg:flex-row flex-col lg:gap-[15px] bg-black h-screen lg:p-[2%] md:p-[2.5%] lg:pt-[80px]">
        <DashSideNav />
        <div className="lg:hidden h-[67px] md:h-[56px]">
          <p className="opacity-0">spacer</p>
        </div>
        
        {/* Main chat container with fixed header and footer */}
        <div className="flex-1 flex flex-col md:border border-tradeAshLight md:rounded-[14px] relative h-[calc(100vh-100px)]">
          {/* Fixed Header */}
          <div className="flex justify-between items-center gap-[10px] p-[15px] border-b border-tradeAshLight bg-black sticky top-0 z-10">
            <div className="flex items-center gap-[10px]">
              <div 
                className="lg:hidden flex items-center justify-center p-[6px] rounded-[4px] hover:bg-tradeAshLight cursor-pointer mr-2"
                onClick={() => setShowChatList(!showChatList)}
              >
                <CgNotes className="text-white text-[18px]" />
              </div>
              <div className="relative w-[35px]">
                <img className="rounded-full" src={landingImg4} alt="User avatar" />
                <div className="absolute bottom-0 right-0 bg-black rounded-full flex items-center gap-[2px]">
                  <GoDotFill className="text-[14px] text-tradeGreen" />
                </div>
              </div>
              <p className="text-[16px] text-white font-[700] cursor-pointer">
                {currentChat}
              </p>
            </div>
            <div className="flex gap-[10px] p-[5px] rounded-[6px]">
              <div className="p-[6px] rounded-[4px] hover:bg-tradeAshLight cursor-pointer" title="Trade notes">
                <MdOutlineStickyNote2 className="text-tradeFadeWhite text-[18px]" />
              </div>
              <div className="p-[6px] rounded-[4px] hover:bg-tradeAshLight cursor-pointer" title="More options">
                <SlOptionsVertical className="text-white text-[18px]" />
              </div>
            </div>
          </div>

          {/* Scrollable Chat Content */}
          <div className="flex-1 p-[15px] overflow-y-auto custom-scrollbar relative">
            {showEmptyState ? (
              <EmptyChatPlaceholder />
            ) : (
              <div className="pb-2">
                {messages.map(message => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
            
            {/* Show chat list if enabled with overlay */}
            {showChatList && <ChatListOverlay />}
            {showChatList && <ChatList />}
          </div>

          {/* Safety Warning Banner  */}
          {showSafetyWarning && (
            <div className="bg-tradeAsh border-t border-b border-tradeAshLight py-2 px-4 relative">
              <button 
                onClick={() => setShowSafetyWarning(false)}
                className="absolute top-1 right-2 text-tradeFadeWhite hover:text-white"
              >
                <IoMdClose className="text-sm" />
              </button>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-tradeOrange text-lg flex-shrink-0" />
                <p className="text-xs text-tradeFadeWhite">
                  <span className="text-white font-medium">Stay Protected, Stay on Platform:</span> Payments made outside this platform are unprotected. Our system flags off-platform transactions to protect you.
                </p>
              </div>
            </div>
          )}

          {/* Fixed Input Area */}
          <div className="flex items-center gap-[10px] p-[15px] border-t border-tradeAshLight bg-black sticky bottom-0 z-10">
            <div className="p-[6px] rounded-full bg-white text-[20px] text-black cursor-pointer" title="Attach file">
              <IoAttach />
            </div>
            <div className="flex-1 flex gap-[20px] bg-tradeAsh border border-tradeAshExtraLight p-[6px] rounded-[10px]">
              <input
                className="w-full outline-none px-[4px] py-[2px] text-[15px] font-[500] placeholder:font-[400] text-white placeholder:text-tradeFadeWhite bg-tradeAsh caret-tradeGreen"
                type="text"
                placeholder="Write a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
            <div 
              className="p-[6px] rounded-full bg-white text-[20px] text-black cursor-pointer hover:bg-tradeGreen transition-colors"
              onClick={handleSendMessage}
              title="Send message"
            >
              <TbBrandTelegram />
            </div>
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      {showWarningModal && <WarningModal />}

      {/* Toggle button for demo purposes - to show empty state */}
      <button 
        onClick={() => setShowEmptyState(!showEmptyState)} 
        className="fixed bottom-0 right-0 bg-tradeAsh text-white text-xs p-2 rounded-md z-50 opacity-50 hover:opacity-100"
      >
        Toggle Empty State
      </button>
    </>
  );
};

export default TradeChat;