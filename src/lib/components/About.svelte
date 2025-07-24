<script lang="ts">
	import { contactInfo } from '$lib/data/contact';
</script>

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
						{contactInfo.location}
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
						<a href="tel:{contactInfo.phone}" class="transition-colors hover:text-blue-600"
							>{contactInfo.phone}</a
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