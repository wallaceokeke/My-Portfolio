import GlowingIcon from '../ui/GlowingIcon';
import socialLinks from '../../data/social';

const SocialSection = () => {
  return (
    <section id="social" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 neon-glow text-center">
          <span className="gradient-text">{'<Connect.WithMe />'}</span>
        </h2>
        
        <div className="flex justify-center space-x-8 md:space-x-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <GlowingIcon 
                key={social.id}
                color={social.color}
                size="lg"
                href={social.url}
                className="hover:scale-110 transition-transform duration-300"
              >
                <Icon size={28} />
                <span className="sr-only">{social.name}</span>
              </GlowingIcon>
            );
          })}
        </div>
        
        <div className="mt-12 bg-terminal p-6 rounded-lg inline-block text-left">
          <p className="text-green-400 mb-2">$ git remote -v</p>
          {socialLinks.map((social) => (
            <p key={social.id} className="text-gray-300 mb-1">
              <span className="text-blue-300">{social.name}</span> <span className="text-yellow-300">{social.url}</span> (follow)
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;