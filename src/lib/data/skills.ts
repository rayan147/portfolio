export const skills = {
  Frontend: [
    'JavaScript',
    'TypeScript',
    'SvelteKit',
    'Vue.js',
    'React',
    'HTML5',
    'CSS3',
    'Tailwind CSS'
  ],
  Backend: ['Node.js', 'Nest.js', 'Python', 'Go', 'REST APIs', 'Rust', 'Express.js'],
  'Cloud & DevOps': [
    'AWS Services (S3, EC2, ECS, ECR, SQS, IAM, CloudWatch, and more )',
    'Docker',
    'Kubernetes',
    'GitOps',
    'ArgoCD',
    'Terraform',
    'Ansible',
  ],
  Databases: ['PostgreSQL', 'MySQL', 'NoSQL', 'Prisma ORM', 'Redis', 'MongoDB'],
  'Tools & Practices': [
    'Git',
    'GitHub Actions',
    'CircleCI',
    'Linux',
    'Agile',
    'CI/CD',
    'Infrastructure-as-Code'
  ]
} as const;

export type SkillCategory = keyof typeof skills;
export type Skill = typeof skills[SkillCategory][number];
