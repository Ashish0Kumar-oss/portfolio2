import { useState } from 'react';
import { motion } from 'motion/react';
import { profile } from '@/data/profile';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/Button';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">Let's build something amazing together.</h2>
            <p className="text-text-secondary text-lg mb-12">
              Whether you have a project in mind, looking for a developer to join your team, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6">
              <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-accent-primary group-hover:border-accent-primary transition-all">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-text-secondary font-mono mb-1">Email Me</div>
                  <div className="text-lg font-medium text-white">{profile.contact.email}</div>
                </div>
              </a>

              <div className="flex gap-4 pt-8 border-t border-white/10">
                <a href={profile.contact.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-accent-primary transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-accent-primary transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={profile.contact.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-accent-primary transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                  01. Name
                </label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-warning text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                  02. Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-warning text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2 font-mono">
                  03. Message
                </label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-primary/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-warning text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12"
                icon={!isSubmitting && !isSuccess ? <Send className="w-5 h-5" /> : undefined}
              >
                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
