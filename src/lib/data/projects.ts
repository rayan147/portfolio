export interface Project {
	title: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	liveUrl?: string;
	infraUrl?: string;
	highlights: string[];
}

export const projects: Project[] = [
	{
		title: 'AMPROS - Appliance Repair Services',
		description:
			'Professional appliance repair service website with booking system, membership plans, and location-based services. Features modern UI/UX with responsive design.',
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'Railway'],
		githubUrl: 'https://github.com/rayan147/ampros',
		liveUrl: 'https://ampros-production.up.railway.app/',
		highlights: [
			'Modern responsive design with professional UI/UX',
			'Service booking and scheduling system',
			'Customer testimonials and reviews',
			'Location-based service areas',
			'Membership and pricing plans'
		]
	},
	{
		title: 'Restaurant Kitchen Management (CKM)',
		description:
			'Full-stack TypeScript monorepo for modern kitchen management system with scalable architecture and type-safe API contracts.',
		technologies: ['SvelteKit', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma ORM'],
		githubUrl: 'https://github.com/rayan147/ckm-monorepo',
		infraUrl: 'https://github.com/rayan147/ckm-infra',
		highlights: [
			'Type-safe API contracts using ts-rest',
			'GitOps workflow with ArgoCD & Kubernetes',
			'AWS Secrets Provider integration',
			'Prisma ORM with PostgreSQL',
			'Custom CRDs and RBAC implementation'
		]
	}
];