interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 'helb-assist',
    title: 'HELB Assist Bot',
    description: 'Telegram bot designed to help students with the HELB loan application process, providing guidance, answering FAQs, and simplifying the application journey.',
    techStack: ['Python', 'Telegram Bot API', 'NLP', 'AWS Lambda'],
    github: 'https://github.com/wallaceokeke/HELB-Assist-Bot',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'kate-pc',
    title: 'Kate PC Assistant',
    description: 'An advanced AI desktop assistant that helps manage files, automates tasks, and provides natural language interaction with your computer. Features voice commands and personalized responses.',
    techStack: ['Python', 'Speech Recognition', 'NLP', 'PyQt'],
    github: 'https://github.com/wallaceokeke',
    image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'smart-loan',
    title: 'Smart Loan System Logic',
    description: 'Custom loan rules engine with fraud control mechanisms and AI decision-making capabilities to automate loan approvals while minimizing risk.',
    techStack: ['Python', 'TensorFlow', 'SQL', 'Docker'],
    github: 'https://github.com/wallaceokeke',
    image: 'https://images.pexels.com/photos/6693645/pexels-photo-6693645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'emoai',
    title: 'EmoAI – Emotional Deep Reflection Bot',
    description: 'An AI system that guides users through deep thoughts, fantasy scenarios, and self-reflection exercises to promote emotional awareness and growth.',
    techStack: ['Python', 'GPT API', 'React', 'Node.js'],
    github: 'https://github.com/wallaceokeke',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'voice-translator',
    title: 'Voice Translator System – Sheng Edition',
    description: 'Audio-based translator that converts between Sheng (Kenyan slang) and standard English, helping bridge communication gaps in multicultural environments.',
    techStack: ['Python', 'TensorFlow', 'Web Speech API', 'Flask'],
    github: 'https://github.com/wallaceokeke',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'personal-botfolio',
    title: 'PersonalBotFolio',
    description: 'A walking/talking bot that explains this portfolio, demonstrating advanced AI capabilities while serving as both the medium and the message.',
    techStack: ['React', 'TypeScript', 'Three.js', 'Web Speech API'],
    github: 'https://github.com/wallaceokeke',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export default projects;