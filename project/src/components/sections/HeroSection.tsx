import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import TypingEffect from '../ui/TypingEffect';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "👾 Welcome to Wallace's World of Code 👾", 
  subtitle = "Where bots meet brains and the future is typed." 
}) => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  
  const onTitleComplete = () => {
    setShowSubtitle(true);
  };
  
  const onSubtitleComplete = () => {
    setShowScrollDown(true);
  };
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Animated background grid
  useEffect(() => {
    const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    const gridSize = 40;
    const dotSize = 1;
    
    const drawGrid = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(14, 224, 255, 0.3)';
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          // Add some randomness to make the grid more dynamic
          if (Math.random() > 0.7) {
            ctx.globalAlpha = Math.random() * 0.5 + 0.1;
            ctx.fillRect(x, y, dotSize, dotSize);
          }
        }
      }
    };
    
    const animateGrid = () => {
      drawGrid();
      requestAnimationFrame(animateGrid);
    };
    
    animateGrid();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <canvas id="hero-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-8 glitch" data-text={title}>
          <TypingEffect 
            text={title} 
            className="font-bold neon-glow"
            tag="span"
            onComplete={onTitleComplete}
          />
        </h1>
        
        {showSubtitle && (
          <TypingEffect 
            text={subtitle}
            delay={300}
            className="text-xl md:text-2xl mb-12 gradient-text"
            tag="h2"
            onComplete={onSubtitleComplete}
          />
        )}
        
        {showScrollDown && (
          <div 
            className="mt-20 cursor-pointer scroll-down"
            onClick={scrollToAbout}
          >
            <ChevronDown 
              size={44} 
              className="text-primary animate-bounce" 
            />
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;