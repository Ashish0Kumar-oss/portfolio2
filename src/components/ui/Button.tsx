import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', icon, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-accent-primary text-white hover:bg-accent-primary/90 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
      secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10',
      outline: 'border border-accent-primary text-accent-primary hover:bg-accent-primary/10',
      ghost: 'text-text-secondary hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
