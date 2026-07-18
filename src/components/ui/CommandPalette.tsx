import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { motion, AnimatePresence } from 'motion/react';
import { Search, User, Briefcase, Mail, Code, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Visual hint for users */}
      <div className="fixed bottom-6 right-6 hidden md:flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-text-secondary z-40">
        <kbd className="font-mono bg-white/10 px-2 py-0.5 rounded text-white">⌘</kbd>
        <span className="text-xs">+</span>
        <kbd className="font-mono bg-white/10 px-2 py-0.5 rounded text-white">K</kbd>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl mx-4 overflow-hidden"
            >
              <Command className="w-full glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="flex items-center border-b border-white/10 px-4">
                  <Search className="w-5 h-5 text-text-secondary mr-2" />
                  <Command.Input 
                    placeholder="Search sections, projects, or links..." 
                    className="flex-1 bg-transparent py-4 text-white outline-none placeholder:text-text-secondary"
                  />
                  <kbd className="hidden sm:block font-mono text-[10px] text-text-secondary bg-white/5 px-2 py-1 rounded">ESC</kbd>
                </div>

                <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin">
                  <Command.Empty className="py-6 text-center text-text-secondary text-sm">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Navigation" className="text-xs text-text-secondary px-2 py-2 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-secondary [&_[cmdk-group-heading]]:mb-2">
                    <Command.Item 
                      onSelect={() => scrollTo('#tech-stack')}
                      className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-white text-sm transition-colors aria-selected:bg-white/10 aria-selected:text-accent-primary"
                    >
                      <Code className="w-4 h-4 mr-3" /> Tech Stack
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => scrollTo('#projects')}
                      className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-white text-sm transition-colors aria-selected:bg-white/10 aria-selected:text-accent-primary"
                    >
                      <Briefcase className="w-4 h-4 mr-3" /> Projects
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => scrollTo('#journey')}
                      className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-white text-sm transition-colors aria-selected:bg-white/10 aria-selected:text-accent-primary"
                    >
                      <User className="w-4 h-4 mr-3" /> My Journey
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => scrollTo('#contact')}
                      className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-white text-sm transition-colors aria-selected:bg-white/10 aria-selected:text-accent-primary"
                    >
                      <Mail className="w-4 h-4 mr-3" /> Contact
                    </Command.Item>
                  </Command.Group>

                  <Command.Group heading="Links" className="text-xs text-text-secondary px-2 py-2 mt-2 border-t border-white/5 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-text-secondary [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:mt-2">
                    <Command.Item 
                      onSelect={() => {
                        window.open(profile.contact.github, '_blank');
                        setOpen(false);
                      }}
                      className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-white text-sm transition-colors aria-selected:bg-white/10 aria-selected:text-accent-primary"
                    >
                      <ExternalLink className="w-4 h-4 mr-3" /> GitHub Profile
                    </Command.Item>
                    <Command.Item 
                      onSelect={() => {
                        window.open(profile.contact.linkedin, '_blank');
                        setOpen(false);
                      }}
                      className="flex items-center px-4 py-3 rounded-xl cursor-pointer hover:bg-white/5 text-white text-sm transition-colors aria-selected:bg-white/10 aria-selected:text-accent-primary"
                    >
                      <ExternalLink className="w-4 h-4 mr-3" /> LinkedIn Profile
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
