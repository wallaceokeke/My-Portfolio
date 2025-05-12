import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <Terminal size={20} className="text-primary mr-2" />
            <span className="text-gray-400">Wallace's World of Code</span>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-500 text-sm flex items-center justify-center">
              Built with <Heart size={14} className="text-red-500 mx-1" /> and code
            </p>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Wallace Brown
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          <p className="font-mono">./wallace-portfolio --version=1.0.0</p>
          <p className="mt-2">Last updated: May 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;