
import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
        Get in Touch
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
