
import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
        About Me
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        My journey as a developer, entrepreneur, and problem solver.
      </p>
    </motion.div>
  );
};

export default AboutHeader;
