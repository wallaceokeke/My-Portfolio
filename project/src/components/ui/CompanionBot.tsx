import { useState, useEffect, useRef } from 'react';
import { Bot, X, Send } from 'lucide-react';
import useTypingEffect from '../../hooks/useTypingEffect';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface CompanionBotProps {
  name?: string;
}

const CompanionBot: React.FC<CompanionBotProps> = ({ name = 'Byte' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const initialMessage = `Hi there! I'm ${name}, Wallace's AI assistant. How can I help you learn more about Wallace and his work?`;
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ sender: 'bot', text: initialMessage }]);
        setIsTyping(false);
      }, 1000);
    }
  }, [isOpen, messages.length, initialMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulated bot response based on user input
    setTimeout(() => {
      const response = getBotResponse(input.toLowerCase());
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };
  
  const getBotResponse = (input: string): string => {
    if (input.includes('experience') || input.includes('background')) {
      return "Wallace has extensive experience in building bots and AI systems. He's been coding for over 5 years and specializes in Python and JavaScript.";
    }
    if (input.includes('skills') || input.includes('tech stack')) {
      return "Wallace is proficient in Python, HTML, CSS, JavaScript, Telegram Bot API, AI & ML logic, prompt engineering, Git/GitHub, and has cybersecurity fundamentals knowledge.";
    }
    if (input.includes('project') || input.includes('portfolio')) {
      return "Wallace has worked on several exciting projects including HELB Assist Bot, Smart Loan System, EmoAI, Voice Translator System, and this PersonalBotFolio. Check out the Projects section for more details!";
    }
    if (input.includes('contact') || input.includes('hire')) {
      return "You can contact Wallace through the terminal-style contact form on this site or reach out via his social media links. He's currently open to freelance opportunities and collaborations!";
    }
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return `Hello there! How can I assist you with information about Wallace's work?`;
    }
    return "I'm not sure I understand that question. Feel free to ask about Wallace's experience, skills, projects, or how to contact him!";
  };

  return (
    <>
      <button 
        className="floating-bot p-4 bg-terminal rounded-full neon-border"
        onClick={toggleChat}
      >
        <Bot size={24} color="var(--primary)" />
      </button>
      
      <div className={`chat-container ${isOpen ? 'visible' : ''}`}>
        <div className="chat-header bg-terminal p-3 flex justify-between items-center border-b border-primary">
          <h3 className="text-primary flex items-center">
            <Bot size={18} className="mr-2" />
            {name}
          </h3>
          <button 
            className="text-gray-400 hover:text-white"
            onClick={toggleChat}
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="chat-messages p-3 max-h-[250px] overflow-y-auto">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-3 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}
            >
              <div 
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'bot' 
                    ? 'bg-blue-900 text-white'
                    : 'bg-green-800 text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="text-left mb-3">
              <div className="inline-block p-2 rounded-lg bg-blue-900 text-white">
                <span className="typing-dots">typing</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="chat-input p-3 border-t border-primary flex"
        >
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent border border-gray-700 rounded-l p-2 text-white focus:outline-none focus:border-primary"
          />
          <button 
            type="submit"
            className="bg-primary text-black p-2 rounded-r"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default CompanionBot;