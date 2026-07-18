import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/profile';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'glass py-4 border-white/10' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center font-mono text-sm">
            AK
          </div>
          <span className="hidden sm:block">{profile.name}</span>
        </a>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 glass-panel px-6 py-2 rounded-full">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="secondary" size="sm" onClick={() => window.open(profile.contact.github, '_blank')}>
            GitHub
          </Button>
          <a href="#contact">
            <Button size="sm">Hire Me</Button>
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-text-secondary hover:text-white py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <Button variant="secondary" className="w-full" onClick={() => window.open(profile.contact.github, '_blank')}>
                GitHub
              </Button>
              <a href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Hire Me</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
