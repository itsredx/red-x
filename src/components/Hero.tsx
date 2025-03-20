
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 bg-blue-200 blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 bg-blue-100 blur-[100px] -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium mb-6 animate-fade-in">
            Developer & Entrepreneur
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6 tracking-tight text-balance">
            Hi, I'm <span className="text-gradient">Ahmad Muhammad Bashir</span> <br className="hidden md:block" />
            aka <span className="text-gradient">Red X</span>.
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10">
            I'm a passionate developer and entrepreneur creating innovative solutions 
            that solve real problems. From Python frameworks to e-commerce solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 font-medium text-primary border border-primary/50 rounded-full transition-all hover:bg-primary/5"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#projects" 
          className="flex flex-col items-center text-sm text-muted-foreground animate-pulse-slow"
        >
          <span className="mb-2">Scroll down</span>
          <ArrowDownCircle className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
