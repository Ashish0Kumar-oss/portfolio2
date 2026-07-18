import { useState } from 'react';
import { motion } from 'motion/react';
import { profile } from '@/data/profile';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

export function PhotoStory() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">The Journey in Frames</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Moments that shaped my path. Hover or tap to reveal the story behind each frame.
          </p>
        </motion.div>

        <div className="w-full">
          {/* Mobile Swipe Layout */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-6 px-6 scrollbar-none">
            {profile.photos.map((photo, index) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo} 
                index={index} 
                inView={inView}
                isFlipped={flippedCards[photo.id] || false}
                onToggle={() => toggleFlip(photo.id)}
                className={`w-[85vw] flex-shrink-0 snap-center ${photo.height}`}
              />
            ))}
          </div>

          {/* Desktop/Tablet Masonry Layout */}
          <div className="hidden md:block columns-2 lg:columns-3 gap-8 space-y-8">
            {profile.photos.map((photo, index) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo} 
                index={index} 
                inView={inView}
                isFlipped={flippedCards[photo.id] || false}
                onToggle={() => toggleFlip(photo.id)}
                className={`w-full break-inside-avoid relative ${photo.height}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface PhotoCardProps {
  photo: typeof profile.photos[0];
  index: number;
  inView: boolean;
  isFlipped: boolean;
  onToggle: () => void;
  className?: string;
}

function PhotoCard({ photo, index, inView, isFlipped, onToggle, className = "" }: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative [perspective:1000px] group ${className}`}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      onClick={onToggle}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d] transition-all duration-700 ease-out"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <div className="w-full h-full rounded-3xl overflow-hidden relative">
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs mb-3 font-mono">
                {photo.date}
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">{photo.title}</h3>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-full h-full rounded-3xl glass p-8 flex flex-col justify-between border-2 border-white/10 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 opacity-50" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
              <h4 className="text-accent-primary font-medium mb-6">{photo.subtitle}</h4>
              <p className="text-text-secondary leading-relaxed">
                {photo.story}
              </p>
            </div>
            
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <Quote className="absolute top-0 left-0 w-8 h-8 text-white/10 -translate-y-1/2" />
              <p className="font-display text-lg text-white/90 italic pl-6 relative z-10">
                {photo.quote}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
