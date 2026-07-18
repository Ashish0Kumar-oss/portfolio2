import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { profile } from '@/data/profile';
import { GitPullRequest, GitMerge, Star, Users, BookOpen } from 'lucide-react';

export function GitHubAnalytics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { label: 'Total Commits', value: profile.stats.commits, icon: GitMerge, color: 'text-accent-primary' },
    { label: 'Repositories', value: profile.stats.projects, icon: BookOpen, color: 'text-accent-secondary' },
    { label: 'Contributions', value: profile.stats.contributions, icon: GitPullRequest, color: 'text-success' },
    { label: 'Followers', value: '150+', icon: Users, color: 'text-warning' },
  ];

  // Generate a mock contribution graph
  const weeks = 52;
  const days = 7;
  const contributionGrid = Array.from({ length: days }, () =>
    Array.from({ length: weeks }, () => Math.floor(Math.random() * 4))
  );

  return (
    <section id="analytics" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Open Source & Analytics</h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            My impact across the global developer community through code and collaboration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Grid */}
          <div className="lg:col-span-1 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col justify-between items-start gap-4 hover:bg-white/10 transition-colors"
                >
                  <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Activity Graph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 glass p-8 rounded-3xl border border-white/5"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">Contribution Activity</h3>
              <a href={profile.contact.github} className="text-sm text-accent-primary hover:text-white transition-colors flex items-center gap-2">
                @Ashish0Kumar-oss <Star className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full overflow-x-auto pb-4 scrollbar-thin">
              <div className="min-w-[800px] flex gap-1.5">
                {contributionGrid.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex flex-col gap-1.5">
                    {row.map((level, colIndex) => (
                      <motion.div
                        key={colIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.2, 
                          delay: 0.5 + ((rowIndex * colIndex) * 0.001) 
                        }}
                        className={`w-3.5 h-3.5 rounded-sm ${
                          level === 0 ? 'bg-white/5' :
                          level === 1 ? 'bg-accent-primary/40' :
                          level === 2 ? 'bg-accent-primary/70' :
                          'bg-accent-primary'
                        } hover:scale-150 hover:z-10 transition-transform cursor-crosshair`}
                        title={`${level * 5} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-end gap-2 text-xs text-text-secondary">
              Less
              <div className="w-3 h-3 rounded-sm bg-white/5" />
              <div className="w-3 h-3 rounded-sm bg-accent-primary/40" />
              <div className="w-3 h-3 rounded-sm bg-accent-primary/70" />
              <div className="w-3 h-3 rounded-sm bg-accent-primary" />
              More
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
