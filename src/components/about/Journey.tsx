
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Briefcase, Rocket } from 'lucide-react';

const Journey = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <h2 className="text-3xl font-display font-medium mb-8 text-center">
        My Journey
      </h2>
      
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3 mb-3">
              <GraduationCap className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-sm text-muted-foreground">2021 - 2023</div>
          </div>
          <div className="flex-grow bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-display font-medium mb-2">Education & Early Projects</h3>
            <p className="text-muted-foreground">
              Completed my education in Computer Software Engineering while working on side projects that 
              laid the foundation for my career. Started exploring Python and web development.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3 mb-3">
              <Code className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-sm text-muted-foreground">2023 - 2024</div>
          </div>
          <div className="flex-grow bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-display font-medium mb-2">Python Framework Development</h3>
            <p className="text-muted-foreground">
              Created a Python GUI framework inspired by Flutter, bringing a modern, responsive 
              experience to Python developers. Focused on making GUI development more intuitive.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3 mb-3">
              <Briefcase className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-sm text-muted-foreground">2023 - 2024</div>
          </div>
          <div className="flex-grow bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-display font-medium mb-2">E-commerce & Teesical</h3>
            <p className="text-muted-foreground">
              Implemented custom WooCommerce solutions for Teesical, an apparel brand specializing in 
              custom designs. Developed features for inventory management and order processing.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
            <div className="rounded-full bg-blue-100 p-3 mb-3">
              <Rocket className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-sm text-muted-foreground">2024 - Present</div>
          </div>
          <div className="flex-grow bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-display font-medium mb-2">Current Projects & Future Vision</h3>
            <p className="text-muted-foreground">
              Currently working on data visualization tools and exploring AI integration in 
              existing applications. Planning to expand my Python framework with new features.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Journey;
