<script lang="ts">
	import { skills } from '$lib/data/skills';
	import { lazyLoad } from '$lib/utils/intersection-observer';

	let visibleCategories = $state<Set<number>>(new Set());

	function handleIntersect(index: number) {
		visibleCategories = new Set([...visibleCategories, index]);
	}

	const categoryIcons = [
		// Frontend
		`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
		</svg>`,
		// Backend
		`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
		</svg>`,
		// Cloud & DevOps
		`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
		</svg>`,
		// Databases
		`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
		</svg>`,
		// Tools & Practices
		`<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
		</svg>`
	];
</script>

<section id="skills" class="bg-slate-50 py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
		<h2 class="mb-16 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
			Technical Skills
		</h2>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			{#each Object.entries(skills) as [category, skillList], index}
				<div
					class="rounded-xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 {visibleCategories.has(
						index
					)
						? 'animate-fade-in'
						: 'opacity-0'}"
					use:lazyLoad
					onintersect={() => handleIntersect(index)}
				>
					<div class="mb-6 flex items-center">
						<div
							class="h-12 w-12 {index === 0 || index === 2 || index === 4
								? 'bg-blue-100'
								: 'bg-slate-100'} mr-4 flex flex-shrink-0 items-center justify-center rounded-xl"
						>
							<div
								class={index === 0 || index === 2 || index === 4
									? 'text-blue-600'
									: 'text-slate-600'}
							>
								{@html categoryIcons[index]}
							</div>
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
