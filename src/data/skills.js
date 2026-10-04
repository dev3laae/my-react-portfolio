// Each skill maps to a lucide-react icon name (resolved in Skills/SkillIcon.jsx)
export const skillGroups = [
  {
    id: 'front-end',
    title: 'Front-End',
    file: 'core.jsx',
    skills: [
      { name: 'HTML5', icon: 'FileCode2' },
      { name: 'CSS3', icon: 'Palette' },
      { name: 'JavaScript', icon: 'Braces' },
      { name: 'TypeScript', icon: 'FileType' },
      { name: 'React.js', icon: 'Atom' },
      { name: 'Next.js', icon: 'Triangle' },
      { name: 'JSX', icon: 'Code2' },
    ],
  },
  {
    id: 'styling',
    title: 'Styling',
    file: 'styles.css',
    skills: [
      { name: 'Tailwind CSS', icon: 'Wind' },
      { name: 'Sass / SCSS', icon: 'Paintbrush' },
      { name: 'Bootstrap', icon: 'LayoutGrid' },
      { name: 'Responsive Design', icon: 'Smartphone' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    file: 'tooling.json',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Vite', icon: 'Zap' },
      { name: 'Node.js', icon: 'Hexagon' },
      { name: 'npm', icon: 'Package' },
      { name: 'Postman', icon: 'Send' },
    ],
  },
  {
    id: 'data-backend',
    title: 'Data & Backend Basics',
    file: 'data.py',
    skills: [
      { name: 'Python', icon: 'Terminal' },
      { name: 'SQL', icon: 'Database' },
      { name: 'Excel', icon: 'Table' },
      { name: 'Data Analysis', icon: 'BarChart3' },
      { name: 'REST APIs', icon: 'Globe' },
      { name: 'PHP', icon: 'Server' },
    ],
  },
]
