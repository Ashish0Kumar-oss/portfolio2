import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-gradient">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-secondary/20 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y, opacity }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-primary/30 text-accent-primary text-sm font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-white">{profile.name}</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-medium text-text-secondary h-10">
              <Typewriter words={profile.titles} />
            </div>
            
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              {profile.about.split('.')[0]}. {profile.about.split('.')[1]}.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects">
              <Button icon={<ArrowRight className="w-5 h-5" />}>View Projects</Button>
            </a>
            <Button variant="secondary" icon={<Download className="w-5 h-5" />}>Resume</Button>
            
            <div className="flex items-center gap-2 ml-4">
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Abstract 3D Representation / Composition */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ 
                y: [-20, 20, -20],
                rotateZ: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-80 h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-3xl blur-2xl opacity-50" />
              <div className="absolute inset-0 glass-panel rounded-3xl border border-white/20 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="font-mono text-xl text-white font-bold">{'</>'}</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <div className="w-3 h-3 rounded-full bg-highlight" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/10 rounded w-full" />
                  <div className="h-4 bg-white/10 rounded w-5/6" />
                  <div className="h-4 bg-accent-primary/50 rounded w-1/2" />
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-text-secondary">
                  <span>main.tsx</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -30, 0] }} 
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -right-10 top-20 glass px-6 py-4 rounded-2xl flex items-center gap-4"
            >
              <div className="text-3xl font-bold text-white">{profile.stats.projects}+</div>
              <div className="text-sm text-text-secondary">Projects<br/>Completed</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 30, 0] }} 
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              className="absolute -left-10 bottom-20 glass px-6 py-4 rounded-2xl flex items-center gap-4"
            >
              <div className="text-3xl font-bold text-white">{profile.stats.commits}+</div>
              <div className="text-sm text-text-secondary">GitHub<br/>Commits</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
