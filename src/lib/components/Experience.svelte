<script lang="ts">
	import { experiences } from '$lib/data/experience';
</script>

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

			{#each experiences as experience}
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
										{experience.title}
									</h3>
									<time
										class="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 sm:text-base"
										datetime="{experience.period.start}/{experience.period.end}"
										>{experience.period.start} - {experience.period.end}</time
									>
								</div>
								<h4 class="mb-6 text-lg font-semibold text-slate-700">{experience.company}</h4>
							</header>

							<!-- Enhanced achievement list with better spacing -->
							<ul class="space-y-4 text-sm text-slate-700 sm:text-base">
								{#each experience.achievements as achievement}
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
										<span class="leading-relaxed">
											{achievement.description}
											{#if achievement.metric}
												<strong class="text-blue-600">{achievement.metric.value}</strong>
											{/if}
										</span>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>