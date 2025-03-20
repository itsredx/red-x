
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              About Me
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              I'm a developer and entrepreneur with a passion for creating elegant solutions to complex problems. 
              With expertise in Python, web development, and e-commerce, I bring technical skill and business 
              acumen to every project.
            </p>
            
            <p className="text-muted-foreground text-lg mb-6">
              My journey began with a fascination for how technology can solve real-world problems. 
              This led me to develop frameworks, build e-commerce platforms, and constantly explore 
              new technologies that push the boundaries of what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/about"
                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
              >
                My Journey
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 font-medium text-primary border border-primary/50 rounded-full transition-all hover:bg-primary/5"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-2xl p-6 transition-all hover:shadow-md">
              <Code className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-display font-medium mb-2">Developer</h3>
              <p className="text-muted-foreground">
                I specialize in building robust applications using Python, JavaScript, and other modern technologies.
                My code is clean, maintainable, and focused on solving real problems.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 transition-all hover:shadow-md">
              <Briefcase className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-display font-medium mb-2">Entrepreneur</h3>
              <p className="text-muted-foreground">
                I understand business needs and market dynamics, allowing me to create solutions that 
                not only work technically but also deliver tangible value and results.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-6 transition-all hover:shadow-md">
              <Lightbulb className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-display font-medium mb-2">Problem Solver</h3>
              <p className="text-muted-foreground">
                I approach challenges with creativity and analytical thinking, developing innovative solutions
                that address core needs and create exceptional user experiences.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
