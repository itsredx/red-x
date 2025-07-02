
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import AboutHeader from '@/components/about/AboutHeader';
import AboutHero from '@/components/about/AboutHero';
import Expertise from '@/components/about/Expertise';
import Journey from '@/components/about/Journey';
import CallToAction from '@/components/about/CallToAction';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="pt-24">
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <AboutHeader />
            <AboutHero />
            {/* EMBEDDED VIDEO */}
            <div className="my-12">
              <video
                src="/video.mp4"
                controls
                preload="metadata"
                poster="/video-poster.jpg"
                className="w-full rounded-2xl shadow-lg"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
            <Expertise />
            <Journey />
          </div>
        </section>

        <Skills />

        <CallToAction />
      </main>

      <Footer />
    </motion.div>
  );
};

export default AboutPage;
