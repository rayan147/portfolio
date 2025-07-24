<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let activeSection = $state('hero');
	let isMenuOpen = $state(false);
	let mounted = $state(false);
	let scrollY = $state(0);

	const navItems = [
		{ id: 'hero', label: 'Home' },
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'contact', label: 'Contact' }
	];

	const skills = {
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
		Backend: ['Node.js', 'NestJS', 'Python', 'Go', 'REST APIs', 'GraphQL'],
		'Cloud & DevOps': [
			'AWS (S3, EC2, ECS, ECR, SQS, IAM, CloudWatch)',
			'Docker',
			'Kubernetes',
			'GitOps',
			'ArgoCD',
			'Terraform',
			'Ansible'
		],
		Databases: ['PostgreSQL', 'MySQL', 'NoSQL', 'Prisma ORM'],
		'Tools & Practices': [
			'Git',
			'GitHub Actions',
			'CircleCI',
			'Linux',
			'Agile',
			'CI/CD',
			'Infrastructure-as-Code'
		]
	};

	const projects = [
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

	// Enhanced with design theory: Conservative scroll threshold for mobile
	const navTransparent = $derived(scrollY < 32); // Using 8pt grid: 4 * 8px

	function handleScroll() {
		if (!browser) return;

		scrollY = window.scrollY;
		const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
		const scrollPosition = window.scrollY + 96; // 8pt grid: 12 * 8px for mobile nav offset

		for (const section of sections) {
			const element = document.getElementById(section);
			if (element) {
				const offsetTop = element.offsetTop;
				const offsetHeight = element.offsetHeight;

				if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
					activeSection = section;
					break;
				}
			}
		}
	}

	function scrollToSection(sectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event) {
		if (isMenuOpen && !event.target.closest('nav')) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		mounted = true;
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			document.addEventListener('click', handleClickOutside);

			return () => {
				window.removeEventListener('scroll', handleScroll);
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>Rayan Ramirez - AWS DevOps & Full-Stack Engineer</title>
	<meta
		name="description"
		content="AWS DevOps & Full-Stack Software Engineer with 4+ years of experience in cloud solutions, CI/CD pipelines, and modern web development."
	/>
	<meta
		name="keywords"
		content="AWS, DevOps, SvelteKit, NestJS, TypeScript, Software Engineer, Full-Stack Developer"
	/>
	<meta name="author" content="Rayan Ramirez" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Rayan Ramirez - AWS DevOps & Full-Stack Engineer" />
	<meta
		property="og:description"
		content="4+ years of experience building scalable cloud solutions and modern web applications."
	/>
	<meta property="og:url" content="https://rayan-ramirez.dev" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Rayan Ramirez - AWS DevOps & Full-Stack Engineer" />
	<meta
		property="twitter:description"
		content="4+ years of experience building scalable cloud solutions and modern web applications."
	/>
</svelte:head>

<!-- Navigation - Applied 60-30-10 Color Rule & 8pt Spacing -->
<nav
	class="fixed top-0 z-50 w-full transition-all duration-300 {navTransparent
		? 'bg-transparent'
		: 'border-b border-slate-200/80 bg-slate-50/95 shadow-sm backdrop-blur-md'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
		<!-- 8pt spacing: 4*8, 8*8, 16*8 -->
		<div class="flex h-16 items-center justify-between sm:h-20">
			<!-- 8pt: 16*8, 20*8 -->
			<button
				onclick={() => scrollToSection('hero')}
				class="text-xl font-bold sm:text-2xl {navTransparent
					? 'text-white'
					: 'text-slate-800'} transition-opacity hover:opacity-80"
			>
				Rayan Ramirez
			</button>

			<!-- Desktop Navigation -->
			<nav class="hidden space-x-8 md:flex" aria-label="Main navigation">
				<!-- 8pt spacing -->
				{#each navItems as item}
					<button
						onclick={() => scrollToSection(item.id)}
						class="rounded-lg px-4 py-2 text-sm font-medium transition-colors lg:text-base {navTransparent
							? 'text-white hover:bg-white/10 hover:text-blue-300'
							: 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'} {activeSection === item.id
							? navTransparent
								? 'bg-white/10 text-blue-300'
								: 'bg-blue-50 text-blue-600'
							: ''}"
						aria-current={activeSection === item.id ? 'page' : undefined}
					>
						{item.label}
					</button>
				{/each}
			</nav>

			<!-- Mobile Menu Button - Enhanced Touch Target -->
			<button
				onclick={toggleMenu}
				class="-mr-3 p-3 md:hidden {navTransparent
					? 'text-white'
					: 'text-slate-700'} touch-manipulation rounded-lg hover:bg-white/10"
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
				aria-label="Toggle navigation menu"
			>
				{#if isMenuOpen}
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				{:else}
					<svg
						class="h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				{/if}
			</button>
		</div>

		<!-- Mobile Navigation - 8pt Spacing Applied -->
		{#if isMenuOpen}
			<nav
				id="mobile-menu"
				class="border-t py-4 md:hidden {navTransparent ? 'border-white/20' : 'border-slate-200'}"
				aria-label="Mobile navigation"
			>
				<div class="space-y-2">
					<!-- 8pt: 2*8 -->
					{#each navItems as item}
						<button
							onclick={() => scrollToSection(item.id)}
							class="block w-full touch-manipulation rounded-lg px-4 py-3 text-left text-base font-medium transition-colors {navTransparent
								? 'text-white hover:bg-white/10 active:bg-white/20'
								: 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'} {activeSection ===
							item.id
								? navTransparent
									? 'bg-white/10'
									: 'bg-slate-100'
								: ''}"
						>
							{item.label}
						</button>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</nav>

<main>
	<!-- Hero Section - Applied 60-30-10 Color Theory & Enhanced Spacing -->
	<section
		id="hero"
		class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white"
	>
		<!-- 60% - Dominant: Dark slate/blue gradient background -->
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="relative z-10 mx-auto w-full max-w-4xl px-4 text-center">
			<!-- Enhanced Typography Hierarchy with 8pt Line Heights -->
			<h1
				class="animate-fade-in mb-6 text-4xl leading-tight font-bold sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl"
				style="line-height: 1.2;"
			>
				Hi, I'm <span class="text-blue-400">Rayan</span>
				<!-- 10% - Accent: Blue accent for emphasis -->
			</h1>
			<h2
				class="animate-fade-in-delay-1 mb-8 text-lg text-slate-300 sm:mb-12 sm:text-xl md:text-2xl lg:text-3xl"
				style="line-height: 1.4;"
			>
				<!-- 30% - Secondary: Light slate for supporting text -->
				AWS DevOps & Full-Stack Engineer
			</h2>
			<p
				class="animate-fade-in-delay-2 mx-auto mb-12 max-w-2xl text-base text-slate-400 sm:mb-16 sm:text-lg md:text-xl"
				style="line-height: 1.6;"
			>
				4+ years of experience building scalable cloud solutions, optimizing CI/CD pipelines, and
				developing modern web applications with cutting-edge technologies.
			</p>

			<!-- CTA Buttons - Applied 60-30-10 Rule -->
			<div
				class="animate-fade-in-delay-3 mb-16 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6"
			>
				<button
					onclick={() => scrollToSection('projects')}
					class="w-full transform touch-manipulation rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-lg"
				>
					<!-- 10% - Accent: Blue CTA button for primary action -->
					View My Work
				</button>
				<button
					onclick={() => scrollToSection('contact')}
					class="w-full touch-manipulation rounded-xl border-2 border-slate-400 px-8 py-4 text-base font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-400/20 hover:text-white sm:w-auto sm:text-lg"
				>
					<!-- 30% - Secondary: Subtle border button for secondary action -->
					Get In Touch
				</button>
			</div>

			<!-- Social Links - Enhanced Touch Targets -->
			<div class="animate-fade-in-delay-4 flex justify-center space-x-8">
				<a
					href="mailto:rayan147361@gmail.com"
					class="touch-manipulation rounded-lg p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-blue-400"
					aria-label="Email"
				>
					<svg
						class="h-6 w-6 sm:h-7 sm:w-7"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a
					href="https://github.com/rayan147"
					class="touch-manipulation rounded-lg p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-blue-400"
					aria-label="GitHub"
				>
					<svg
						class="h-6 w-6 sm:h-7 sm:w-7"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
				<a
					href="https://linkedin.com/in/rayan-ramirez"
					class="touch-manipulation rounded-lg p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-blue-400"
					aria-label="LinkedIn"
				>
					<svg
						class="h-6 w-6 sm:h-7 sm:w-7"
						fill="currentColor"
						viewBox="0 0 20 20"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
			</div>
		</div>

		<!-- Scroll indicator with proper spacing -->
		<div
			class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-slate-400"
		>
			<svg
				class="h-5 w-5 sm:h-6 sm:w-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				></path>
			</svg>
		</div>
	</section>

	<!-- About Section - Enhanced 8pt Grid Spacing -->
	<section id="about" class="bg-white py-16 sm:py-24 lg:py-32">
		<!-- 8pt: 16*8, 24*8, 32*8 -->
		<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<!-- 8pt: 12*8, 16*8 -->
				<div>
					<h2 class="mb-8 text-3xl font-bold text-slate-900 sm:text-4xl">About Me</h2>
					<!-- 8pt: 8*8 -->
					<div
						class="space-y-6 text-base leading-relaxed text-slate-700 sm:text-lg"
						style="line-height: 1.6;"
					>
						<!-- 8pt: 6*8 -->
						<p>
							I'm a detail-oriented Software Engineer with 4+ years of experience specializing in
							AWS DevOps and full-stack development. I have a passion for building scalable,
							efficient solutions that drive business growth.
						</p>
						<p>
							My expertise lies in architecting cloud infrastructure, optimizing CI/CD pipelines,
							and developing modern web applications. I've successfully improved system performance
							by up to 75% and reduced deployment times by 60% through innovative solutions.
						</p>
						<p>
							I hold an Associate of Arts in Finance from Berkeley College and continuously stay
							updated with the latest technologies and best practices in software engineering.
						</p>
					</div>

					<!-- Contact Info with Enhanced Spacing -->
					<address
						class="mt-8 flex flex-col space-y-4 text-sm text-slate-600 not-italic sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8 sm:text-base"
					>
						<div class="flex items-center">
							<svg
								class="mr-3 h-5 w-5 flex-shrink-0 text-slate-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
							South Amboy, NJ
						</div>
						<div class="flex items-center">
							<svg
								class="mr-3 h-5 w-5 flex-shrink-0 text-slate-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								></path>
							</svg>
							<a href="tel:973-870-6309" class="transition-colors hover:text-blue-600"
								>973-870-6309</a
							>
						</div>
					</address>
				</div>

				<!-- Stats Card - Applied 60-30-10 Color Theory -->
				<div class="mt-8 lg:mt-0">
					<div
						class="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white shadow-2xl"
					>
						<!-- 60% - Dark background -->
						<div class="grid grid-cols-2 gap-8">
							<!-- 8pt spacing -->
							<div class="text-center">
								<div class="text-3xl font-bold text-blue-400 sm:text-4xl">4+</div>
								<!-- 10% - Blue accent -->
								<div class="mt-2 text-sm text-slate-300 sm:text-base">Years Experience</div>
								<!-- 30% - Light text -->
							</div>
							<div class="text-center">
								<div class="text-3xl font-bold text-blue-400 sm:text-4xl">75%</div>
								<div class="mt-2 text-sm text-slate-300 sm:text-base">Performance Boost</div>
							</div>
							<div class="text-center">
								<div class="text-3xl font-bold text-blue-400 sm:text-4xl">60%</div>
								<div class="mt-2 text-sm text-slate-300 sm:text-base">Setup Time Reduced</div>
							</div>
							<div class="text-center">
								<div class="text-3xl font-bold text-blue-400 sm:text-4xl">99.9%</div>
								<div class="mt-2 text-sm text-slate-300 sm:text-base">Uptime Achieved</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Experience Section - Applied Spacing Theory -->
	<section id="experience" class="bg-slate-50 py-16 sm:py-24 lg:py-32">
		<!-- Enhanced white space -->
		<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
			<h2 class="mb-16 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
				Professional Experience
			</h2>

			<div class="relative">
				<!-- Timeline line with better spacing -->
				<div
					class="absolute top-0 bottom-0 left-4 w-0.5 bg-blue-200 sm:left-8"
					aria-hidden="true"
				></div>

				<article class="relative flex items-start">
					<div
						class="absolute left-2.5 h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-lg sm:left-6 sm:h-5 sm:w-5"
						aria-hidden="true"
					></div>
					<div class="ml-12 w-full sm:ml-20">
						<!-- Enhanced external spacing -->
						<div
							class="rounded-xl border border-slate-100 bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8 lg:p-10"
						>
							<header class="mb-6">
								<div class="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
									<h3 class="mb-2 text-xl font-bold text-slate-900 sm:mb-0 sm:text-2xl">
										AWS DevOps/Software Engineer
									</h3>
									<time
										class="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 sm:text-base"
										datetime="2020-03/2024-09">March 2020 - September 2024</time
									>
								</div>
								<h4 class="mb-6 text-lg font-semibold text-slate-700">IntegraTouch</h4>
							</header>

							<!-- Enhanced achievement list with better spacing -->
							<ul class="space-y-4 text-sm text-slate-700 sm:text-base">
								<li class="flex items-start">
									<svg
										class="mt-1 mr-4 h-5 w-5 flex-shrink-0 text-blue-600"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="leading-relaxed"
										>Built and maintained CI/CD with GitHub Actions and CircleCI, automating
										workflows to boost development speed and increase performance by <strong
											class="text-blue-600">40%</strong
										></span
									>
								</li>
								<li class="flex items-start">
									<svg
										class="mt-1 mr-4 h-5 w-5 flex-shrink-0 text-blue-600"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="leading-relaxed"
										>Engineered automated infrastructure and configuration pipelines using GitHub
										Actions and AWS CDK, reducing setup time by <strong class="text-blue-600"
											>60%</strong
										></span
									>
								</li>
								<li class="flex items-start">
									<svg
										class="mt-1 mr-4 h-5 w-5 flex-shrink-0 text-blue-600"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="leading-relaxed"
										>Improved data pipeline performance by <strong class="text-blue-600">75%</strong
										> through Python optimization, significantly enhancing customer satisfaction</span
									>
								</li>
								<li class="flex items-start">
									<svg
										class="mt-1 mr-4 h-5 w-5 flex-shrink-0 text-blue-600"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="leading-relaxed"
										>Migrated application from Vue.js/Sails.js to SvelteKit/NestJS, improving
										front-end responsiveness by <strong class="text-blue-600">30%</strong></span
									>
								</li>
								<li class="flex items-start">
									<svg
										class="mt-1 mr-4 h-5 w-5 flex-shrink-0 text-blue-600"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="leading-relaxed"
										>Designed scalable software architecture enabling <strong class="text-blue-600"
											>35%</strong
										>
										growth in user concurrency while maintaining
										<strong class="text-blue-600">99.9%</strong> uptime</span
									>
								</li>
							</ul>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- Projects Section - Enhanced with Color & Spacing Theory -->
	<section id="projects" class="bg-white py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
			<h2 class="mb-16 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
				Featured Projects
			</h2>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
				{#each projects as project}
					<article
						class="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<!-- Project header with enhanced spacing -->
						<div
							class="h-40 bg-gradient-to-br sm:h-48 lg:h-56 {project.title.includes('AMPROS')
								? 'from-blue-600 to-blue-800'
								: 'from-slate-700 to-slate-900'} flex items-center justify-center p-6"
						>
							<div class="text-center text-white">
								<h3 class="mb-2 text-xl leading-tight font-bold sm:text-2xl lg:text-3xl">
									{project.title.split(' - ')[1] || project.title.split(' ')[0]}
								</h3>
								<p class="text-sm text-blue-100 opacity-90 sm:text-base">
									{project.title.includes('AMPROS')
										? 'Professional Appliance Repair Services'
										: 'Restaurant Kitchen Management'}
								</p>
							</div>
						</div>

						<div class="p-6 sm:p-8">
							<p class="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
								{project.description}
							</p>

							{#if project.highlights}
								<div class="mb-6">
									<h4 class="mb-4 text-sm font-semibold text-slate-900 sm:text-base">
										Key Features:
									</h4>
									<ul class="space-y-3 text-xs text-slate-600 sm:text-sm">
										{#each project.highlights as highlight}
											<li class="flex items-start">
												<svg
													class="mt-0.5 mr-3 h-4 w-4 flex-shrink-0 text-blue-600"
													fill="currentColor"
													viewBox="0 0 20 20"
													aria-hidden="true"
												>
													<path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span class="leading-relaxed">{highlight}</span>
											</li>
										{/each}
									</ul>
								</div>
							{/if}

							<!-- Enhanced tech badges with better spacing -->
							<div class="mb-8 flex flex-wrap gap-2">
								{#each project.technologies as tech}
									<span
										class="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
									>
										{tech}
									</span>
								{/each}
							</div>

							<!-- Enhanced button layout -->
							<div class="flex flex-col gap-4 sm:flex-row">
								{#if project.liveUrl}
									<a
										href={project.liveUrl}
										class="inline-flex touch-manipulation items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg sm:text-base"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											></path>
										</svg>
										Live Demo
									</a>
								{/if}
								<a
									href={project.githubUrl}
									class="inline-flex touch-manipulation items-center justify-center rounded-lg border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:text-slate-900 sm:text-base"
									target="_blank"
									rel="noopener noreferrer"
								>
									<svg
										class="mr-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
											clip-rule="evenodd"
										></path>
									</svg>
									GitHub
								</a>
								{#if project.infraUrl}
									<a
										href={project.infraUrl}
										class="inline-flex touch-manipulation items-center justify-center rounded-lg border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-slate-400 hover:text-slate-900 sm:text-base"
										target="_blank"
										rel="noopener noreferrer"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
												clip-rule="evenodd"
											></path>
										</svg>
										Infrastructure
									</a>
								{/if}
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Skills Section - Applied Design Theory -->
	<section id="skills" class="bg-slate-50 py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
			<h2 class="mb-16 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
				Technical Skills
			</h2>

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
				{#each Object.entries(skills) as [category, skillList], index}
					<div
						class="rounded-xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
					>
						<div class="mb-6 flex items-center">
							<div
								class="h-12 w-12 {index === 0
									? 'bg-blue-100'
									: index === 1
										? 'bg-slate-100'
										: index === 2
											? 'bg-blue-100'
											: index === 3
												? 'bg-slate-100'
												: 'bg-blue-100'} mr-4 flex flex-shrink-0 items-center justify-center rounded-xl"
							>
								{#if index === 0}
									<svg
										class="h-6 w-6 {index === 0 ? 'text-blue-600' : 'text-slate-600'}"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										></path>
									</svg>
								{:else if index === 1}
									<svg
										class="h-6 w-6 text-slate-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
										></path>
									</svg>
								{:else if index === 2}
									<svg
										class="h-6 w-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
										></path>
									</svg>
								{:else if index === 3}
									<svg
										class="h-6 w-6 text-slate-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
										></path>
									</svg>
								{:else}
									<svg
										class="h-6 w-6 text-blue-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
										></path>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
									</svg>
								{/if}
							</div>
							<h3 class="text-lg font-bold text-slate-900 sm:text-xl">{category}</h3>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each skillList as skill}
								<span
									class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 sm:text-sm"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section - Enhanced Design -->
	<section id="contact" class="bg-white py-16 sm:py-24 lg:py-32">
		<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
			<h2 class="mb-16 text-center text-3xl font-bold text-slate-900 sm:text-4xl">Get In Touch</h2>

			<div class="mx-auto max-w-4xl">
				<div class="mb-12 text-center">
					<p class="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
						I'm always interested in discussing new opportunities, innovative projects, and
						collaborations. Feel free to reach out!
					</p>
				</div>

				<!-- Enhanced contact cards -->
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
					<div class="rounded-xl bg-slate-50 p-6 text-center transition-colors hover:bg-slate-100">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100"
						>
							<svg
								class="h-8 w-8 text-blue-600"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
								></path>
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
							</svg>
						</div>
						<h3 class="mb-3 text-lg font-semibold">Email</h3>
						<a
							href="mailto:rayan147361@gmail.com"
							class="touch-manipulation text-sm font-medium break-all text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
						>
							rayan147361@gmail.com
						</a>
					</div>

					<div class="rounded-xl bg-slate-50 p-6 text-center transition-colors hover:bg-slate-100">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100"
						>
							<svg
								class="h-8 w-8 text-slate-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								></path>
							</svg>
						</div>
						<h3 class="mb-3 text-lg font-semibold">Phone</h3>
						<a
							href="tel:973-870-6309"
							class="touch-manipulation text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:text-base"
						>
							973-870-6309
						</a>
					</div>

					<div class="rounded-xl bg-slate-50 p-6 text-center transition-colors hover:bg-slate-100">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100"
						>
							<svg
								class="h-8 w-8 text-blue-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								></path>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
						</div>
						<h3 class="mb-3 text-lg font-semibold">Location</h3>
						<span class="text-sm font-medium text-slate-600 sm:text-base">South Amboy, NJ</span>
					</div>
				</div>

				<!-- Social links with enhanced spacing -->
				<div class="mt-16 text-center">
					<div class="flex justify-center space-x-6">
						<a
							href="https://github.com/rayan147"
							class="touch-manipulation rounded-xl p-3 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
							aria-label="GitHub"
						>
							<svg
								class="h-7 w-7 sm:h-8 sm:w-8"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
						<a
							href="https://linkedin.com/in/rayan-ramirez"
							class="touch-manipulation rounded-xl p-3 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
							aria-label="LinkedIn"
						>
							<svg
								class="h-7 w-7 sm:h-8 sm:w-8"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Footer - Simple and Clean -->
<footer class="bg-slate-900 py-8 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
		<div class="text-center">
			<p class="text-sm text-slate-400 sm:text-base">
				© 2025 Rayan Ramirez. Built with SvelteKit and TailwindCSS using design theory principles.
			</p>
		</div>
	</div>
</footer>

<style>
	/* Enhanced animations with design theory considerations */
	:global(.animate-fade-in) {
		animation: fadeIn 0.8s ease-out;
	}

	:global(.animate-fade-in-delay-1) {
		animation: fadeIn 0.8s ease-out 0.2s both;
	}

	:global(.animate-fade-in-delay-2) {
		animation: fadeIn 0.8s ease-out 0.4s both;
	}

	:global(.animate-fade-in-delay-3) {
		animation: fadeIn 0.8s ease-out 0.6s both;
	}

	:global(.animate-fade-in-delay-4) {
		animation: fadeIn 0.8s ease-out 0.8s both;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(16px); /* 8pt grid: 2*8px */
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* Smooth scrolling with proper offset */
	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 80px; /* 8pt: 10*8px */
	}

	/* Enhanced focus visibility */
	:global(button:focus-visible),
	:global(a:focus-visible) {
		outline: 2px solid #3b82f6;
		outline-offset: 2px;
		border-radius: 4px;
	}

	/* Touch optimization */
	:global(.touch-manipulation) {
		touch-action: manipulation;
	}
</style>
