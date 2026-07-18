/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CustomCursor } from '@/components/ui/CustomCursor';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
import { PhotoStory } from '@/components/sections/PhotoStory';
import { Projects } from '@/components/sections/Projects';
import { GitHubAnalytics } from '@/components/sections/GitHubAnalytics';
import { Journey } from '@/components/sections/Journey';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary/30 selection:text-white">
      <CustomCursor />
      <CommandPalette />
      <Header />
      
      <main>
        <Hero />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <TechStack />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <PhotoStory />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Projects />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <GitHubAnalytics />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Journey />
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
