import React, { useState, useEffect, ReactNode } from 'react';

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
  prompt?: string;
  showPrompt?: boolean;
  commands?: Record<string, (args: string[]) => string | JSX.Element>;
}

const Terminal: React.FC<TerminalProps> = ({
  title = 'Terminal',
  children,
  className = '',
  prompt = 'wallace@world-of-code:~$',
  showPrompt = true,
  commands = {}
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<(string | JSX.Element)[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    setHistory((prev) => [...prev, input]);
    
    // Process command
    const args = input.trim().split(' ');
    const command = args[0];
    
    if (command in commands) {
      const result = commands[command](args.slice(1));
      setOutput((prev) => [...prev, `${prompt} ${input}`, result]);
    } else if (command === 'clear') {
      setOutput([]);
    } else if (command === 'help') {
      setOutput((prev) => [...prev, `${prompt} ${input}`, (
        <div className="mt-2 mb-4">
          <p className="text-green-400">Available commands:</p>
          <ul className="ml-4">
            {Object.keys(commands).map((cmd) => (
              <li key={cmd}><span className="text-yellow-400">{cmd}</span></li>
            ))}
            <li><span className="text-yellow-400">clear</span> - Clear terminal</li>
            <li><span className="text-yellow-400">help</span> - Show this help</li>
          </ul>
        </div>
      )]);
    } else {
      setOutput((prev) => [...prev, `${prompt} ${input}`, `Command not found: ${command}. Type 'help' for available commands.`]);
    }
    
    setInput('');
  };

  return (
    <div className={`terminal ${className}`}>
      {title && (
        <div className="terminal-header flex items-center mb-2 border-b border-primary pb-2">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-sm">{title}</div>
        </div>
      )}
      
      <div className="terminal-content">
        {children}
        
        {output.map((item, index) => (
          <div key={index} className="mb-1">
            {typeof item === 'string' ? <p>{item}</p> : item}
          </div>
        ))}
        
        {showPrompt && (
          <form onSubmit={handleInputSubmit} className="flex items-center">
            <span className="text-green-400 mr-2">{prompt}</span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-1 bg-transparent border-none outline-none text-white"
              autoFocus
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Terminal;