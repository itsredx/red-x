
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-8">
      <h3 className="text-2xl font-display font-medium mb-6">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 bg-background transition-all resize-none"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "inline-flex items-center justify-center w-full h-12 px-6 font-medium bg-primary text-white rounded-full transition-all",
            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg hover:translate-y-[-2px]"
          )}
        >
          {isSubmitting ? (
            <>Sending<span className="ml-2 animate-pulse">...</span></>
          ) : (
            <>Send Message <Send className="ml-2 h-4 w-4" /></>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
