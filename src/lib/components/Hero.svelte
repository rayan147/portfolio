<script lang="ts">
	import { contactInfo } from '$lib/data/contact';
	import type { SectionId } from '$lib/data/navigation';

	interface Props {
		onSectionClick: (sectionId: SectionId) => void;
	}

	let { onSectionClick }: Props = $props();
</script>

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
				onclick={() => onSectionClick('projects')}
				class="w-full transform touch-manipulation rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:text-lg"
			>
				<!-- 10% - Accent: Blue CTA button for primary action -->
				View My Work
			</button>
			<button
				onclick={() => onSectionClick('contact')}
				class="w-full touch-manipulation rounded-xl border-2 border-slate-400 px-8 py-4 text-base font-semibold text-slate-300 transition-all duration-200 hover:bg-slate-400/20 hover:text-white sm:w-auto sm:text-lg"
			>
				<!-- 30% - Secondary: Subtle border button for secondary action -->
				Get In Touch
			</button>
		</div>

		<!-- Social Links - Enhanced Touch Targets -->
		<div class="animate-fade-in-delay-4 flex justify-center space-x-8">
			<a
				href="mailto:{contactInfo.email}"
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
				href={contactInfo.social.github}
				class="touch-manipulation rounded-lg p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-blue-400"
				aria-label="GitHub"
				target="_blank"
				rel="noopener noreferrer"
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
				href={contactInfo.social.linkedin}
				class="touch-manipulation rounded-lg p-3 text-slate-400 transition-colors hover:bg-white/5 hover:text-blue-400"
				aria-label="LinkedIn"
				target="_blank"
				rel="noopener noreferrer"
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