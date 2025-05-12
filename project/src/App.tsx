import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import SocialSection from './components/sections/SocialSection';
import ContactSection from './components/sections/ContactSection';
import CompanionBot from './components/ui/CompanionBot';

function App() {
  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'glowing-cursor';
    document.body.appendChild(cursor);
    
    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  // Update page title
  useEffect(() => {
    document.title = "Wallace's World of Code";
  }, []);

  return (
    <div className="App">
      <Header />
      
      <main>
        <HeroSection 
          title="👾 Welcome to Wallace's World of Code 👾" 
          subtitle="Where bots meet brains and the future is typed."
        />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <SocialSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Companion Bot */}
      <CompanionBot name="Byte" />
    </div>
  );
}

export default App;