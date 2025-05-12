import { useState } from 'react';
import Terminal from '../ui/Terminal';

interface TabData {
  id: string;
  label: string;
  content: string;
}

const tabs: TabData[] = [
  {
    id: 'bio',
    label: 'Bio',
    content: `Hello, I'm Wallace - a bot designer, AI architect, and code enthusiast with a passion for creating digital experiences that blur the line between human and machine. I specialize in designing conversational interfaces and AI systems that solve real-world problems.`
  },
  {
    id: 'journey',
    label: 'Dev Journey',
    content: `My coding journey began 5 years ago when I built my first chatbot. Since then, I've expanded into full-stack development, machine learning, and prompt engineering. I've worked on projects ranging from simple automation scripts to complex AI systems that can understand and respond to human emotions.`
  },
  {
    id: 'fun-facts',
    label: 'Fun Facts',
    content: `- I once debugged code for 36 hours straight (don't recommend)\n- My bot collection has over 20 different personalities\n- I speak 3 human languages and 5 programming languages\n- I believe AI should augment humanity, not replace it\n- My favorite movie is Blade Runner 2049`
  },
  {
    id: 'tech-love',
    label: 'Tech I Love',
    content: `- Python for its versatility and simplicity\n- TensorFlow & PyTorch for ML implementations\n- React for building responsive UIs\n- Telegram Bot API for quick bot deployment\n- GPT models for natural language understanding\n- Cybersecurity tools for protecting digital assets`
  }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState<string>('bio');
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 neon-glow text-center">
          <span className="gradient-text">{'<About.Me />'}</span>
        </h2>
        
        <Terminal title="wallace@worldofcode: ~/about" className="mb-8">
          <div className="mb-6">
            <p className="text-green-400">$</p>
            <p className="text-blue-200">
              cat wallace_profile.txt
            </p>
            <div className="pl-4 mt-2 border-l-2 border-gray-700">
              <p className="mb-2">Name: Wallace Brown</p>
              <p className="mb-2">Title: Bot Designer & AI Architect</p>
              <p className="mb-2">Location: Digital Frontier</p>
              <p className="mb-2">Mission: Creating intelligent systems that enhance human creativity</p>
            </div>
          </div>

          <div className="tabs-container">
            <div className="flex space-x-1 mb-4 overflow-x-auto pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 ${
                    activeTab === tab.id
                      ? 'bg-primary text-black font-bold'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  } rounded-md text-sm transition-colors duration-200`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="tab-content p-4 bg-gray-900 rounded-md">
              <p className="whitespace-pre-line">{activeTabData.content}</p>
            </div>
          </div>
        </Terminal>
      </div>
    </section>
  );
};

export default AboutSection;