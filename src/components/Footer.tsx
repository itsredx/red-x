
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-display font-medium mb-4 inline-block">
              Portfolio<span className="text-blue-500">.</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-md">
              A passionate developer and entrepreneur creating innovative solutions 
              that solve real problems with purpose and precision.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/itsredx" 
                target="https://github.com/itsredx" 
                rel="noopener noreferrer"
                className="bg-secondary rounded-full p-2 text-muted-foreground hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ahmad-bash-dev/" 
                target="https://www.linkedin.com/in/ahmad-bash-dev/" 
                rel="noopener noreferrer"
                className="bg-secondary rounded-full p-2 text-muted-foreground hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/AhmadMBashir2" 
                target="https://x.com/AhmadMBashir2" 
                rel="noopener noreferrer"
                className="bg-secondary rounded-full p-2 text-muted-foreground hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                ambashir02@gmail.com
              </li>
              <li>
                <a 
                  href="mailto:ambashir02@gmail.com"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  Email Me
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  className="text-muted-foreground hover:text-blue-500 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} RED X. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
