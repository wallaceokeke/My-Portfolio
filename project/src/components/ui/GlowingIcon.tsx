import React, { ReactNode } from 'react';

interface GlowingIconProps {
  children: ReactNode;
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

const GlowingIcon: React.FC<GlowingIconProps> = ({
  children,
  color = 'var(--primary)',
  size = 'md',
  className = '',
  onClick,
  href,
  target = '_blank'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconStyles = {
    filter: `drop-shadow(0 0 5px ${color})`,
    color
  };

  const Component = href ? 'a' : 'div';
  const linkProps = href ? { href, target, rel: "noopener noreferrer" } : {};

  return (
    <Component
      className={`social-icon flex items-center justify-center rounded-full ${sizeClasses[size]} ${className}`}
      style={iconStyles}
      onClick={onClick}
      {...linkProps}
    >
      {children}
    </Component>
  );
};

export default GlowingIcon;