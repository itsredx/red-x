
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Briefcase, Lightbulb, GraduationCap, Rocket } from 'lucide-react';

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
                  I'm a developer and entrepreneur with a passion for creating elegant solutions to complex problems. 
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Developer working" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

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
                    <div className="text-sm text-muted-foreground">2015 - 2019</div>
                  </div>
                  <div className="flex-grow bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-display font-medium mb-2">Education & Early Projects</h3>
                    <p className="text-muted-foreground">
                      Completed my education in Computer Science while working on side projects that 
                      laid the foundation for my career. Started exploring Python and web development.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 flex-shrink-0 flex flex-col items-center">
                    <div className="rounded-full bg-blue-100 p-3 mb-3">
                      <Code className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="text-sm text-muted-foreground">2019 - 2021</div>
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
                    <div className="text-sm text-muted-foreground">2021 - 2023</div>
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
                    <div className="text-sm text-muted-foreground">2023 - Present</div>
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
          </div>
        </section>

        <section className="py-16 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-display font-medium mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to new projects and collaborations. If you have an idea or need a 
              developer with my expertise, don't hesitate to reach out.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default AboutPage;
