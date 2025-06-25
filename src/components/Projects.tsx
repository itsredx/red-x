
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'Pythra – Python GUI Framework',
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
          <Link
            to="/projects"
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-full transition-all hover:shadow-lg hover:translate-y-[-2px]"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
