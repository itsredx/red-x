
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom'; // Ensure correct import

const projectsData = [
  {
    title: 'Python GUI Framework',
    description: 'A Flutter-like experience for Python developers. Build beautiful, responsive GUIs with a familiar and intuitive API.',
    technologies: ['Python', 'UI/UX', 'Framework'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: 'https://github.com/itsredx/pythra-0.0.1',
  },
  {
    title: 'InquisiSTEM',
    description: 'The AI Biology Teacher Trainer! Interactive 3D models and AI chat to enhance your teaching skills.',
    technologies: ['NextJS', 'React', 'Groq AI', 'ThreeJS'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    link: 'https://inquisi-stem.vercel.app/',
  },
  {
    title: 'HETAN Kano Chapter',
    description: 'Responsive and sleek  landing page for Home Economics Teachers Association of Nigeria HETAN Kano Chapter',
    technologies: ['JavaScript', 'React', 'NextJS', 'UI/UX'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    link: 'https://hetan.vercel.app/',
  },
  {
    title: 'Responsive Clip-Path Generator',
    description: 'A visual tool for creating responsive CSS clip-path shapes with rounded corners. Features live preview, canvas visualization, and auto-copy CSS output.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Canvas', 'UI/UX'],
    imageUrl: 'https://images.unsplash.com/photo-1699040309386-11c615ed64d5?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://responsive-clip-path-gen.vercel.app/',
  },
  {
    title: 'E-commerce Analytics Tool',
    description: 'Analytics platform for e-commerce businesses to track sales, customer behavior, and inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Data Analysis'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    link: '#',
  },
  {
    title: 'Content Management System',
    description: 'Custom CMS built for content creators and small businesses, with a focus on ease of use and flexibility.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'CMS'],
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    link: '#',
  },
  {
    title: 'Mobile App for Task Management',
    description: 'Cross-platform mobile application for personal and team task management with real-time synchronization.',
    technologies: ['React Native', 'Firebase', 'Mobile App'],
    imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/01c03a160969519.63bd95e49e6c1.jpg',
    link: '#',
  },
];

const categories = ['All', 'Python', 'React', 'E-commerce', 'PHP', 'Mobile'];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projectsData);
      return;
    }

    const filtered = projectsData.filter((project) => {
      return project.technologies.some((tech) => 
        tech.toLowerCase().includes(activeCategory.toLowerCase())
      );
    });

    setFilteredProjects(filtered);
  }, [activeCategory]);

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
                My Projects
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A showcase of my work, ranging from Python frameworks to e-commerce solutions.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    index={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    link={project.link}
                  />
                ))
              ) : (
                <div className="col-span-3 text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    No projects found in this category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-display font-medium mb-6">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to discussing product design, development work, or collaboration opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
