interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Python',
    level: 90,
    color: 'var(--primary)'
  },
  {
    name: 'HTML/CSS',
    level: 85,
    color: 'var(--secondary)'
  },
  {
    name: 'JavaScript',
    level: 80,
    color: 'var(--accent)'
  },
  {
    name: 'Telegram Bot API',
    level: 95,
    color: '#0088cc'
  },
  {
    name: 'AI + ML Logic',
    level: 85,
    color: '#ff9900'
  },
  {
    name: 'Prompt Engineering',
    level: 90,
    color: '#00ffcc'
  },
  {
    name: 'Git/GitHub',
    level: 75,
    color: '#fc6d26'
  },
  {
    name: 'Cybersecurity Basics',
    level: 65,
    color: '#ff3333'
  }
];

export default skills;