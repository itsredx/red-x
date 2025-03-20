
import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8 lg:pl-8">
      <div>
        <h3 className="text-2xl font-display font-medium mb-6">Contact Information</h3>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out through the form or connect with me directly using the 
          contact information below.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-secondary rounded-full p-3 mr-4">
              <Mail className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h4 className="text-base font-medium">Email</h4>
              <a 
                href="mailto:ambashir02@gmail.com" 
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                ambashir02@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-secondary rounded-full p-3 mr-4">
              <MessageSquare className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h4 className="text-base font-medium">Let's connect</h4>
              <div className="flex space-x-4 mt-2">
                <a 
                  href="https://github.com/itsredx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/ahmad-bash-dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/AhmadMBashir2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
        <h4 className="text-xl font-display font-medium mb-4">Ready to work together?</h4>
        <p className="text-muted-foreground mb-6">
          I'm currently available for freelance work and interesting projects.
          Let's create something amazing together.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
        >
          Schedule a call &rarr;
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
