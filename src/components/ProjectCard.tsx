
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
  className?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
  className,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card border border-border p-6 transition-all hover:shadow-lg",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {imageUrl ? (
            <div className="overflow-hidden rounded-lg mb-4 bg-muted aspect-video">
              <img
                src={imageUrl}
                alt={title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="rounded-lg mb-4 bg-muted h-32 md:h-48 flex items-center justify-center">
              <span className="text-muted-foreground">No image available</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="inline-block text-xs font-medium py-1 px-2 rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-display font-medium group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        
        <div className="mt-auto pt-4">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
            >
              View Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
