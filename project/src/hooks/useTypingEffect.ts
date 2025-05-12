import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
}

const useTypingEffect = ({ text, speed = 50, delay = 0 }: UseTypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: number;
    
    if (delay > 0 && currentIndex === 0) {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }
      }, delay) as unknown as number;
    } else if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed) as unknown as number;
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, text, speed, delay, isComplete]);

  const reset = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  };

  return { displayText, isComplete, reset };
};

export default useTypingEffect;