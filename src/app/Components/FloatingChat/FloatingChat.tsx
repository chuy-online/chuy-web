// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FiMessageCircle, FiX, FiUser } from "react-icons/fi";
// import "./chat.css";

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputMessage, setInputMessage] = useState("");
//   const [hasNewMessage, setHasNewMessage] = useState(false);
//   const [isFirstOpen, setIsFirstOpen] = useState(true);
//   const [isTyping, setIsTyping] = useState(false); // Estado para controlar el efecto de "escribiendo"
//   const CHAT_STORAGE_KEY = "chatHistory";
//   const CHAT_EXPIRATION_KEY = "chatExpiration";
//   const EXPIRATION_TIME = 2 * 60 * 1000; // 2 minutos en milisegundos
//   const [messages, setMessages] = useState([
//     {
//       text: "Hola en que te puedo ayudar?",
//       fromUser: false,
//     },
//   ]);

//   useEffect(() => {
//     const savedChat = localStorage.getItem(CHAT_STORAGE_KEY);
//     const expiration = localStorage.getItem(CHAT_EXPIRATION_KEY);

//     if (savedChat && expiration && new Date().getTime() < expiration) {
//       setMessages(JSON.parse(savedChat));
//     } else {
//       localStorage.removeItem(CHAT_STORAGE_KEY);
//       localStorage.removeItem(CHAT_EXPIRATION_KEY);
//       // setMessages([
//       //   {
//       //     text: t("welcomeText"),
//       //     fromUser: false,
//       //   },
//       // ]);
//     }
//   }, []);

//   useEffect(() => {
//     if (messages.length > 0) {
//       localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
//       localStorage.setItem(
//         CHAT_EXPIRATION_KEY,
//         new Date().getTime() + EXPIRATION_TIME
//       );
//     }
//   }, [messages]);

//   const toggleChat = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       setHasNewMessage(false);
//       setIsFirstOpen(false);
//     }
//   };

//   const sendMessage = async () => {
//     if (inputMessage.trim() === "") return;

//     const userMessage = { text: inputMessage, fromUser: true };
//     setMessages([...messages, userMessage]); // Mostrar el mensaje del usuario inmediatamente
//     setInputMessage("");
//     setIsTyping(true); // Activar el estado de "escribiendo"

//     const history = messages.map((message) => ({
//       role: message.fromUser ? "user" : "model",
//       parts: [{ text: message.text + "\n" }],
//     }));

//     try {
//       // Simular que el bot está escribiendo por 2 segundos
//       setTimeout(async () => {
//         const response = await axios.post("api/gemini", {
//           message: inputMessage,
//           history,
//         });

//         const botResponse = { text: response.data.message, fromUser: false };
//         setMessages((prevMessages) => [...prevMessages, botResponse]);
//         setIsTyping(false); // Desactivar el estado de "escribiendo"
//       }, 1000); // Simula 2 segundos de "escribiendo"
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setIsTyping(false);
//     }
//   };

//   const renderMessageWithFormatting = (text) => {
//     const parts = text.split(/(\*\*[^*]+\*\*)/g);
//     return parts.map((part, index) => {
//       if (part.startsWith("**") && part.endsWith("**")) {
//         return <strong key={index}>{part.slice(2, -2)}</strong>;
//       }
//       return <span key={index}>{part}</span>;
//     });
//   };

//   return (
//     <div>
//       {!isOpen && (
//         <div className="chat-icon" onClick={toggleChat}>
//           <FiMessageCircle size={35} />
//           {(hasNewMessage || isFirstOpen) && (
//             <span className="unread-dot"></span>
//           )}
//         </div>
//       )}

//       {isOpen && (
//         <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
//           <div className="chat-header">
//             <div className="header-content">
//               <h4>Chat 24/7</h4>
//               <FiX size={24} onClick={toggleChat} />
//             </div>
//             <div className="live-section">
//               <span className="live-text">En Vivo</span>
//               <span className="live-dot"></span>
//             </div>
//           </div>

//           <div className="chat-body">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`chat-message ${
//                   message.fromUser ? "from-user" : "from-bot"
//                 }`}
//               >
//                 <div className="message-icon">
//                   <FiUser size={24} />
//                 </div>
//                 <div className="message-text">
//                   {renderMessageWithFormatting(message.text)}
//                 </div>
//               </div>
//             ))}

//             {/* Mostrar indicador de "escribiendo" cuando el bot esté respondiendo */}
//             {isTyping && (
//               <div className="chat-message from-bot typing-indicator">
//                 <div className="message-icon">
//                   <FiUser size={24} />
//                 </div>
//                 <div className="message-text">
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                   <span className="dot"></span>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="chat-input">
//             <input
//               type="text"
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               placeholder="Escribe un mensaje..."
//             />
//             <button onClick={sendMessage}>Enviar</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FloatingChat;

"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FiMessageCircle, FiX, FiUser } from "react-icons/fi";
import "./chat.css";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isTyping, setIsTyping] = useState(false); // Estado para controlar el efecto de "escribiendo"
  const CHAT_STORAGE_KEY = "chatHistory";
  const CHAT_EXPIRATION_KEY = "chatExpiration";
  const EXPIRATION_TIME = 2 * 60 * 1000; // 2 minutos en milisegundos
  const [messages, setMessages] = useState([
    {
      text: "Hola en que te puedo ayudar??",
      fromUser: false,
    },
  ]);

  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedChat = localStorage.getItem(CHAT_STORAGE_KEY);
    const expiration = localStorage.getItem(CHAT_EXPIRATION_KEY);

    if (
      savedChat &&
      expiration &&
      new Date().getTime() < parseInt(expiration)
    ) {
      setMessages(JSON.parse(savedChat));
    } else {
      localStorage.removeItem(CHAT_STORAGE_KEY);
      localStorage.removeItem(CHAT_EXPIRATION_KEY);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
      localStorage.setItem(
        CHAT_EXPIRATION_KEY,
        (new Date().getTime() + EXPIRATION_TIME).toString()
      );
    }
  }, [messages]);

  useEffect(() => {
    // Scroll to the bottom of the chat body when messages change
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
      setIsFirstOpen(false);
    }
  };

  const sendMessage = async () => {
    if (inputMessage.trim() === "") return;

    const userMessage = { text: inputMessage, fromUser: true };
    setMessages([...messages, userMessage]); // Mostrar el mensaje del usuario inmediatamente
    setInputMessage("");
    setIsTyping(true); // Activar el estado de "escribiendo"

    const history = messages.map((message) => ({
      role: message.fromUser ? "user" : "model",
      parts: [{ text: message.text + "\n" }],
    }));

    try {
      // Simular que el bot está escribiendo por 2 segundos
      setTimeout(async () => {
        const response = await axios.post("api/gemini", {
          message: inputMessage,
          history,
        });

        const botResponse = { text: response.data.message, fromUser: false };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setIsTyping(false); // Desactivar el estado de "escribiendo"
      }, 1000); // Simula 2 segundos de "escribiendo"
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const renderMessageWithFormatting = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div>
      {!isOpen && (
        <div className="chat-icon" onClick={toggleChat}>
          <FiMessageCircle size={35} />
          {(hasNewMessage || isFirstOpen) && (
            <span className="unread-dot"></span>
          )}
        </div>
      )}

      {isOpen && (
        <div className={`chat-window ${isOpen ? "open" : "closed"}`}>
          <div className="chat-header">
            <div className="header-content">
              <h4>Chat 24/7</h4>
              <FiX size={24} onClick={toggleChat} />
            </div>
            <div className="live-section">
              <span className="live-text">En Vivo</span>
              <span className="live-dot"></span>
            </div>
          </div>

          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.fromUser ? "from-user" : "from-bot"
                }`}
              >
                <div className="message-icon">
                  {message.fromUser == false ? (
                    <img src="/logo5.svg" alt="Logo" className="h-20 w-auto" />
                  ) : (
                    <FiUser size={24} />
                  )}
                </div>
                <div className="message-text">
                  {renderMessageWithFormatting(message.text)}
                </div>
              </div>
            ))}

            {/* Mostrar indicador de "escribiendo" cuando el bot esté respondiendo */}
            {isTyping && (
              <div className="chat-message from-bot typing-indicator">
                <div className="message-icon">
                  <FiUser size={24} />
                </div>
                <div className="message-text">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Add the onKeyDown event handler
              placeholder="Escribe un mensaje..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
