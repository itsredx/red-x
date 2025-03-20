
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Python GUI Framework',
    description: 'A Flutter-like experience for Python developers. Build beautiful, responsive GUIs with a familiar and intuitive API.',
    technologies: ['Python', 'UI/UX', 'Framework'],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    link: '#',
  },
  {
    title: 'WooCommerce for Teesical',
    description: 'Custom WooCommerce implementation for Teesical, an apparel brand specializing in custom designs and print-on-demand services.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'E-commerce'],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    link: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets, with real-time updates and customizable views.',
    technologies: ['JavaScript', 'React', 'D3.js', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, highlighting my expertise in building innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/projects"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
