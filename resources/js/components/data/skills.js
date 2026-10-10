// Icon names map to lucide-vue-next components, resolved in TechStack.vue
export const skillGroups = [
  {
    label: 'Backend',
    description: 'Application logic, data, and access control.',
    items: [
      { name: 'Laravel', icon: 'Server' },
      { name: 'PHP', icon: 'FileCode2' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'REST APIs', icon: 'Webhook' },
      { name: 'Laravel Sanctum', icon: 'ShieldCheck' },
    ],
  },
  {
    label: 'Frontend',
    description: 'Interfaces people actually use every day.',
    items: [
      { name: 'Vue 3', icon: 'Component' },
      { name: 'Inertia.js', icon: 'Layers' },
      { name: 'JavaScript', icon: 'Braces' },
      { name: 'Tailwind CSS', icon: 'Palette' },
      { name: 'HTML', icon: 'FileCode' },
      { name: 'CSS', icon: 'Brush' },
    ],
  },
  {
    label: 'Tools',
    description: 'How the work gets versioned, built, and shipped.',
    items: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'Vite', icon: 'Zap' },
      { name: 'VS Code', icon: 'Code2' },
    ],
  },
]
