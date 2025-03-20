
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Lightbulb } from 'lucide-react';

const Expertise = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-20"
    >
      <h2 className="text-3xl font-display font-medium mb-8 text-center">
        My Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
          <Code className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-display font-medium mb-3">Development</h3>
          <p className="text-muted-foreground">
            Specializing in Python, JavaScript, React, and PHP. I build robust, scalable applications 
            with clean code and intuitive user interfaces.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
          <Briefcase className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-display font-medium mb-3">Business Strategy</h3>
          <p className="text-muted-foreground">
            Combining technical knowledge with business acumen to create solutions that drive 
            growth, improve efficiency, and deliver tangible results.
          </p>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-8 transition-all hover:shadow-md">
          <Lightbulb className="h-8 w-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-display font-medium mb-3">Problem Solving</h3>
          <p className="text-muted-foreground">
            Taking complex challenges and breaking them down into manageable solutions with 
            creativity, analytical thinking, and technical expertise.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Expertise;
