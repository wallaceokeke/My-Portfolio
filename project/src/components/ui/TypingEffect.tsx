import { useEffect, useRef } from 'react';
import useTypingEffect from '../../hooks/useTypingEffect';

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

const TypingEffect = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
  showCursor = true,
  tag: Tag = 'p'
}: TypingEffectProps) => {
  const { displayText, isComplete } = useTypingEffect({ text, speed, delay });
  const completedRef = useRef(false);

  useEffect(() => {
    if (isComplete && !completedRef.current && onComplete) {
      completedRef.current = true;
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <Tag className={`${className} ${showCursor && !isComplete ? 'cursor' : ''}`}>
      {displayText}
    </Tag>
  );
};

export default TypingEffect;