import { motion } from 'motion/react';
import { profile } from '@/data/profile';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Selected projects that showcase my passion for building beautiful and functional applications.
            </p>
          </div>
          <a 
            href={profile.contact.github} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center gap-2 text-accent-primary hover:text-white transition-colors"
          >
            View all on GitHub 
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-white/20"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-8 relative z-20 -mt-10">
                <div className="glass-panel p-6 rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a href={project.github} className="text-text-secondary hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.demo} className="text-text-secondary hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-text-secondary pt-4 border-t border-white/5">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" /> {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" /> {project.forks}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
