
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Code, Terminal, Globe, Cpu, ShoppingCart, Laptop, FileText } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
  color: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Python', percentage: 90, icon: <Code className="h-5 w-5" />, color: 'bg-blue-500' },
    { name: 'Django', percentage: 85, icon: <Terminal className="h-5 w-5" />, color: 'bg-green-600' },
    { name: 'HTML, CSS, JS', percentage: 80, icon: <Globe className="h-5 w-5" />, color: 'bg-orange-500' },
    { name: 'C', percentage: 70, icon: <Cpu className="h-5 w-5" />, color: 'bg-gray-700' },
    { name: 'WooCommerce', percentage: 75, icon: <ShoppingCart className="h-5 w-5" />, color: 'bg-purple-500' },
    { name: 'Linux', percentage: 80, icon: <Laptop className="h-5 w-5" />, color: 'bg-red-500' },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
            My Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A combination of technical expertise and practical experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card border border-border rounded-xl p-6 group hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Pencil sketch animation effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                <svg width="100%" height="100%" className="stroke-primary">
                  <pattern id={`sketch-${index}`} patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="100" y2="100" strokeWidth="0.5" />
                    <line x1="100" y1="0" x2="0" y2="100" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#sketch-${index})`} />
                </svg>
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`rounded-full p-2 ${skill.color} text-white mr-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-display font-medium">{skill.name}</h3>
                <span className="ml-auto text-lg font-medium">{skill.percentage}%</span>
              </div>
              
              <Progress value={skill.percentage} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
