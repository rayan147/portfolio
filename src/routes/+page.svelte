<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import type { SectionId } from '$lib/data/navigation';

	let activeSection = $state<SectionId>('hero');
	let isMenuOpen = $state(false);
	let mounted = $state(false);
	let scrollY = $state(0);

	// Enhanced with design theory: Conservative scroll threshold for mobile
	const navTransparent = $derived(scrollY < 32); // Using 8pt grid: 4 * 8px

	function handleScroll() {
		if (!browser) return;

		scrollY = window.scrollY;
		const sections: SectionId[] = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
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

	function scrollToSection(sectionId: SectionId) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false;
		}
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		const nav = document.querySelector('nav');
		const menuButton = (event.target as HTMLElement).closest('button[aria-label="Toggle navigation menu"]');
		
		// Don't close if clicking the menu button itself
		if (menuButton) return;
		
		// Close menu if clicking outside nav
		if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		mounted = true;
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			// Use capture phase for better event handling
			document.addEventListener('click', handleClickOutside, true);
			
			// Handle escape key to close menu
			function handleEscape(event: KeyboardEvent) {
				if (event.key === 'Escape' && isMenuOpen) {
					isMenuOpen = false;
				}
			}
			document.addEventListener('keydown', handleEscape);

			return () => {
				window.removeEventListener('scroll', handleScroll);
				document.removeEventListener('click', handleClickOutside, true);
				document.removeEventListener('keydown', handleEscape);
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
	
	<!-- Structured Data -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Rayan Ramirez",
		"jobTitle": "AWS DevOps & Full-Stack Engineer",
		"description": "4+ years of experience building scalable cloud solutions and modern web applications",
		"url": "https://rayan-ramirez.dev",
		"sameAs": [
			"https://github.com/rayan147",
			"https://linkedin.com/in/rayan-ramirez"
		],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "South Amboy",
			"addressRegion": "NJ"
		}
	}
	</script>`}
</svelte:head>

<Navigation
	{activeSection}
	{isMenuOpen}
	{navTransparent}
	onMenuToggle={toggleMenu}
	onSectionClick={scrollToSection}
/>

<main id="main-content">
	<Hero onSectionClick={scrollToSection} />
	<About />
	<Experience />
	<Projects />
	<Skills />
	<Contact />
</main>

<Footer />

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