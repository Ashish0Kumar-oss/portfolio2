import { motion } from 'motion/react';
import { profile } from '@/data/profile';
import { useInView } from 'react-intersection-observer';

export function Journey() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="journey" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">The Journey</h2>
          <p className="text-text-secondary text-lg">
            My path of continuous learning and growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {profile.journey.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={item.year} className="relative flex flex-col md:flex-row items-start md:justify-between group">
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-primary transform -translate-x-[7px] md:-translate-x-1/2 mt-1.5 group-hover:scale-150 group-hover:bg-accent-primary transition-all duration-300 z-10" />
                  
                  {/* Content - Left or Right based on index */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                  >
                    <div className="glass p-6 rounded-2xl group-hover:border-accent-primary/30 transition-colors">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-accent-primary text-xs font-mono mb-4 border border-white/10">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
