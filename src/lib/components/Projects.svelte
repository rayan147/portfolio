<script lang="ts">
	import { projects } from '$lib/data/projects';
	import { lazyLoad } from '$lib/utils/intersection-observer';
	
	let visibleProjects = $state<Set<number>>(new Set());
	
	function handleIntersect(index: number) {
		visibleProjects = new Set([...visibleProjects, index]);
	}
</script>

<section id="projects" class="bg-white py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
		<h2 class="mb-16 text-center text-3xl font-bold text-slate-900 sm:text-4xl">
			Featured Projects
		</h2>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
			{#each projects as project, index}
				<article
					class="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl {visibleProjects.has(index) ? 'animate-fade-in' : 'opacity-0'}"
					use:lazyLoad
					on:intersect={() => handleIntersect(index)}
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