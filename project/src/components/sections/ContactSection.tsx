import { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // This would normally be where you'd send the form data to a server
      console.log('Form submitted:', formData);
      
      // For demo purposes, we'll just set success
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 neon-glow text-center">
          <span className="gradient-text">{'<Contact.Terminal />'}</span>
        </h2>
        
        <div className="terminal">
          <div className="mb-6">
            <p className="text-green-400">$</p>
            <p className="text-blue-200">
              ./send_message.sh --to=wallace
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">
                <span className="text-green-400">$</span> NAME=
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-primary transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-2">
                <span className="text-green-400">$</span> EMAIL=
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-primary transition-colors duration-200"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2">
                <span className="text-green-400">$</span> MESSAGE=
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-900 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:border-primary transition-colors duration-200"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-md flex items-center space-x-2 transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-700 cursor-not-allowed' 
                    : 'bg-primary text-black hover:bg-opacity-80'
                }`}
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Sending...' : 'Execute'}</span>
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-900 text-green-200 rounded-md mt-4">
                <p>Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-900 text-red-200 rounded-md mt-4">
                <p>There was an error sending your message. Please try again.</p>
              </div>
            )}
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400">
              <span className="text-green-400">$</span> cat contact_info.txt
            </p>
            <div className="mt-2">
              <p>Email: wallaceokeke@gmail.com</p>
              <p>Location: Nairobi, Kenya</p>
              <p>Availability: Open to freelance opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;