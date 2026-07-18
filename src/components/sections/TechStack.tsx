import { motion } from 'motion/react';
import { profile } from '@/data/profile';
import { useInView } from 'react-intersection-observer';

export function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = Array.from(new Set(profile.skills.map(s => s.category)));

  return (
    <section id="tech-stack" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tech Arsenal</h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            A comprehensive overview of my technical skills, frameworks, and tools I use to build digital experiences.
          </p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const categorySkills = profile.skills.filter(s => s.category === category);
            
            return (
              <div key={category}>
                <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-white/20" />
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categorySkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                        className="group relative glass p-6 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                      >
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                          <div className="flex items-start justify-between">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition-transform duration-300 group-hover:text-accent-primary group-hover:border-accent-primary/30">
                              <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-white/10 font-mono group-hover:text-white/20 transition-colors">
                              {skill.level}
                            </span>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-medium text-white mb-2">{skill.name}</h4>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-accent-primary to-highlight rounded-full"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
