
import React from 'react';
import { motion } from 'framer-motion';
import ContactHeader from './contact/ContactHeader';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ContactForm />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
