import { Github, Linkedin, Twitter, Coffee } from 'lucide-react';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: typeof Github;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/wallaceokeke',
    icon: Github,
    color: '#6e5494'
  },
  {
    id: 'kofi',
    name: 'Ko-Fi',
    url: 'https://ko-fi.com/thewizz',
    icon: Coffee,
    color: '#ff5f5f'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/wallace-brown-3908652b0',
    icon: Linkedin,
    color: '#0077b5'
  },
  {
    id: 'twitter',
    name: 'X/Twitter',
    url: 'https://x.com/brown_wall6147',
    icon: Twitter,
    color: '#1da1f2'
  }
];

export default socialLinks;