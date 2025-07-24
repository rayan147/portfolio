<script lang="ts">
	import { contactInfo } from '$lib/data/contact';
	
	// Obfuscate email to prevent spam
	const emailParts = contactInfo.email.split('@');
	const obfuscatedEmail = `${emailParts[0]}[at]${emailParts[1]}`;
	
	function handleEmailClick(event: MouseEvent) {
		event.preventDefault();
		window.location.href = `mailto:${contactInfo.email}`;
	}
</script>

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
						href="#"
						class="touch-manipulation text-sm font-medium break-all text-blue-600 transition-colors hover:text-blue-700 sm:text-base"
						onclick={handleEmailClick}
					>
						{obfuscatedEmail}
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
						href="tel:{contactInfo.phone}"
						class="touch-manipulation text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:text-base"
					>
						{contactInfo.phone}
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
					<span class="text-sm font-medium text-slate-600 sm:text-base">{contactInfo.location}</span>
				</div>
			</div>

			<!-- Social links with enhanced spacing -->
			<div class="mt-16 text-center">
				<div class="flex justify-center space-x-6">
					<a
						href={contactInfo.social.github}
						class="touch-manipulation rounded-xl p-3 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
						aria-label="GitHub"
						target="_blank"
						rel="noopener noreferrer"
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
						href={contactInfo.social.linkedin}
						class="touch-manipulation rounded-xl p-3 text-slate-400 transition-colors hover:bg-blue-50 hover:text-blue-600"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
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