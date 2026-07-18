import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
  Cpu,
  Cloud,
  Github,
  Linkedin,
  Mail,
  Twitter
} from 'lucide-react';

export const profile = {
  name: 'Ashish Kumar',
  role: 'Full Stack Developer',
  titles: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Backend Engineer',
    'React Developer',
    'Open Source Contributor',
    'Problem Solver'
  ],
  about: `I am a passionate Full Stack Developer with expertise in building scalable, performant, and elegant web applications. With a strong foundation in the MERN stack and a keen eye for design, I transform complex problems into intuitive, user-centric solutions. My journey is driven by continuous learning and a deep love for open-source community contributions.`,
  contact: {
    email: 'ashishji962848@gmail.com',
    github: 'https://github.com/Ashish0Kumar-oss/',
    linkedin: 'https://www.linkedin.com/in/ashish-kumar-464504373',
    twitter: 'https://twitter.com/ashishkumar', // Placeholder
  },
  stats: {
    projects: 40,
    commits: 1200,
    technologies: 25,
    contributions: 500,
    yearsLearning: 3
  },
  skills: [
    { category: 'Frontend', name: 'React.js', level: 90, icon: Layout },
    { category: 'Frontend', name: 'Next.js', level: 85, icon: Globe },
    { category: 'Frontend', name: 'Tailwind CSS', level: 95, icon: Layout },
    { category: 'Backend', name: 'Node.js', level: 88, icon: Server },
    { category: 'Backend', name: 'Express.js', level: 85, icon: Server },
    { category: 'Database', name: 'MongoDB', level: 80, icon: Database },
    { category: 'Database', name: 'PostgreSQL', level: 75, icon: Database },
    { category: 'Languages', name: 'TypeScript', level: 85, icon: Code2 },
    { category: 'Languages', name: 'JavaScript', level: 90, icon: Code2 },
    { category: 'Cloud', name: 'AWS', level: 70, icon: Cloud },
    { category: 'Tools', name: 'Git & GitHub', level: 90, icon: Github },
    { category: 'Tools', name: 'Docker', level: 65, icon: Cpu },
  ],
  journey: [
    { year: '2021', title: 'Started Coding', description: 'Wrote my first line of code and discovered a passion for software development.' },
    { year: '2022', title: 'Learned React & MERN', description: 'Dove deep into modern web development, mastering frontend and backend technologies.' },
    { year: '2023', title: 'First Open Source Contribution', description: 'Started contributing to open source projects, learning from the community.' },
    { year: '2024', title: 'Full Stack Architect', description: 'Building scalable applications and exploring AI integrations in modern web apps.' },
  ],
  projects: [
    {
      title: 'DevSpace Platform',
      description: 'A comprehensive platform for developers to share projects and collaborate.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/Ashish0Kumar-oss/',
      demo: '#',
      stars: 45,
      forks: 12
    },
    {
      title: 'AI Code Assistant',
      description: 'An AI-powered tool that helps developers write better code faster.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
      tech: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma'],
      github: 'https://github.com/Ashish0Kumar-oss/',
      demo: '#',
      stars: 128,
      forks: 34
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'A beautiful, real-time analytics dashboard for e-commerce stores.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      tech: ['React', 'Recharts', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/Ashish0Kumar-oss/',
      demo: '#',
      stars: 89,
      forks: 21
    }
  ],
  experience: [
    {
      role: 'Senior Full Stack Engineer',
      company: 'Tech Innovators',
      duration: '2023 - Present',
      description: 'Leading frontend architecture and building scalable backend microservices.',
      tech: ['React', 'Node.js', 'AWS']
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Web Agency',
      duration: '2021 - 2023',
      description: 'Developed highly interactive and responsive web applications for various clients.',
      tech: ['JavaScript', 'React', 'Tailwind']
    }
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institute: 'University of Technology',
      duration: '2019 - 2023',
      achievements: 'Graduated with Honors. Led the University Coding Club.'
    }
  ],
  photos: [
    {
      id: 1,
      title: 'My Developer Setup',
      subtitle: 'Where the magic happens',
      story: 'Built my dream workspace to maximize productivity and comfort during long coding sessions.',
      quote: '"The environment you craft shapes the code you write."',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
      date: 'Jan 2024',
      height: 'h-[450px]'
    },
    {
      id: 2,
      title: 'Late Night Coding',
      subtitle: 'Chasing the bug',
      story: 'Some of the best breakthroughs happen at 3 AM when the world is quiet.',
      quote: '"Sleep is temporary, git commits are forever."',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop',
      date: 'Oct 2023',
      height: 'h-[550px]'
    },
    {
      id: 3,
      title: 'Hackathon Win',
      subtitle: '48 hours of intense coding',
      story: 'Collaborated with an amazing team to build a working prototype that won first place.',
      quote: '"Innovation happens when deadlines meet caffeine."',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
      date: 'Mar 2023',
      height: 'h-[400px]'
    },
    {
      id: 4,
      title: 'Open Source Contribution',
      subtitle: 'Giving back to the community',
      story: 'My first major PR merged into a popular open-source project. An incredible feeling of global collaboration.',
      quote: '"Code is meant to be shared."',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
      date: 'Aug 2023',
      height: 'h-[600px]'
    },
    {
      id: 5,
      title: 'College Journey',
      subtitle: 'Where it all started',
      story: 'Countless hours in the computer lab learning the fundamentals of computer science and software engineering.',
      quote: '"Foundations are built in the shadows."',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
      date: 'Sep 2019',
      height: 'h-[450px]'
    },
    {
      id: 6,
      title: 'Graduation',
      subtitle: 'A milestone achieved',
      story: 'Graduated with honors, ready to take on the world of professional software development.',
      quote: '"The end of a chapter, the beginning of a legacy."',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
      date: 'May 2023',
      height: 'h-[500px]'
    }
  ]
};
