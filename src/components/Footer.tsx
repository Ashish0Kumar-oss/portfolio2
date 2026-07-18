import { profile } from '@/data/profile';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-secondary text-sm flex items-center gap-2">
            <span>© {new Date().getFullYear()} {profile.name}.</span>
            <span>Crafted with precision.</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
