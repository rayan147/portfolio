export interface Experience {
	title: string;
	company: string;
	period: {
		start: string;
		end: string;
	};
	achievements: Array<{
		description: string;
		metric?: {
			value: string;
			type: 'percentage' | 'time' | 'number';
		};
	}>;
}

export const experiences: Experience[] = [
	{
		title: 'AWS DevOps/Software Engineer',
		company: 'IntegraTouch',
		period: {
			start: 'March 2020',
			end: 'September 2024'
		},
		achievements: [
			{
				description:
					'Built and maintained CI/CD with GitHub Actions and CircleCI, automating workflows to boost development speed and increase performance',
				metric: {
					value: '40%',
					type: 'percentage'
				}
			},
			{
				description:
					'Engineered automated infrastructure and configuration pipelines using GitHub Actions and AWS CDK, reducing setup time',
				metric: {
					value: '60%',
					type: 'percentage'
				}
			},
			{
				description:
					'Improved data pipeline performance through Python optimization, significantly enhancing customer satisfaction',
				metric: {
					value: '75%',
					type: 'percentage'
				}
			},
			{
				description:
					'Migrated application from Vue.js/Sails.js to SvelteKit/NestJS, improving front-end responsiveness',
				metric: {
					value: '30%',
					type: 'percentage'
				}
			},
			{
				description:
					'Designed scalable software architecture enabling growth in user concurrency while maintaining uptime',
				metric: {
					value: '35%',
					type: 'percentage'
				}
			}
		]
	}
];