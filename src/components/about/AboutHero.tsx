
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-display font-medium mb-6">
          My Story
        </h2>
        
        <p className="text-muted-foreground text-lg mb-6">
          I'm Ahmad Muhammad Bashir, also known as Red X, a developer and entrepreneur with a passion for creating elegant solutions to complex problems. 
          With expertise in Python, web development, and e-commerce, I bring technical skill and business 
          acumen to every project.
        </p>
        
        <p className="text-muted-foreground text-lg mb-6">
          My journey began with a fascination for how technology can solve real-world problems. 
          This led me to develop frameworks, build e-commerce platforms, and constantly explore 
          new technologies that push the boundaries of what's possible.
        </p>
        
        <p className="text-muted-foreground text-lg">
          I believe in creating software that not only functions flawlessly but also delivers 
          an exceptional user experience. This philosophy guides all my work, from developing 
          Python frameworks to implementing e-commerce solutions.
        </p>

        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1BfzmyYtp1EIlW4uLmLTzM0ts234753bM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px] group"
          >
            <FileText className="mr-2 h-5 w-5 group-hover:animate-pulse" /> Get My Resume
          </a>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative aspect-square rounded-2xl overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
          <svg width="100%" height="100%" className="stroke-primary">
            <pattern id="sketch-main" patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="50" y2="50" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="0" y2="50" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#sketch-main)" />
          </svg>
        </div>
        <img 
          src="/lovable-uploads/bc4d34a4-440d-4fa2-9f09-da9e641d86ac.png" 
          alt="Ahmad Muhammad Bashir (Red X)" 
          className="w-full h-full object-cover object-left"
        />
      </motion.div>
    </div>
  );
};

export default AboutHero;
