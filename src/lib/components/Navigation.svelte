<script lang="ts">
	import { navItems, type SectionId } from '$lib/data/navigation';
	import { trapFocus } from '$lib/utils/focus-trap';
	
	interface Props {
		activeSection: SectionId;
		isMenuOpen: boolean;
		navTransparent: boolean;
		onMenuToggle: () => void;
		onSectionClick: (sectionId: SectionId) => void;
	}

	let { activeSection, isMenuOpen, navTransparent, onMenuToggle, onSectionClick }: Props = $props();
</script>

<!-- Mobile Menu Backdrop -->
{#if isMenuOpen}
	<div
		class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
		onclick={() => onMenuToggle()}
		role="presentation"
	></div>
{/if}

<!-- Skip Navigation Link -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50">
	Skip to main content
</a>

<!-- Navigation - Applied 60-30-10 Color Rule & 8pt Spacing -->
<nav
	class="fixed top-0 z-50 w-full transition-all duration-300 {navTransparent
		? 'bg-transparent'
		: 'border-b border-slate-200/80 bg-slate-50/95 shadow-sm backdrop-blur-md'}"
	aria-label="Main navigation"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
		<!-- 8pt spacing: 4*8, 8*8, 16*8 -->
		<div class="flex h-16 items-center justify-between sm:h-20">
			<!-- 8pt: 16*8, 20*8 -->
			<a
				href="#hero"
				onclick={(e) => {
					e.preventDefault();
					onSectionClick('hero');
				}}
				class="text-xl font-bold sm:text-2xl {navTransparent
					? 'text-white'
					: 'text-slate-800'} transition-opacity hover:opacity-80"
			>
				Rayan Ramirez
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden space-x-8 md:flex" aria-label="Desktop navigation">
				<!-- 8pt spacing -->
				{#each navItems as item}
					<button
						onclick={() => onSectionClick(item.id)}
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
				onclick={onMenuToggle}
				class="relative z-50 -mr-3 p-3 md:hidden {navTransparent
					? 'text-white'
					: 'text-slate-700'} touch-manipulation rounded-lg transition-colors {navTransparent
					? 'hover:bg-white/10'
					: 'hover:bg-slate-100'}"
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
		<div
			class="md:hidden overflow-hidden transition-all duration-300 ease-in-out {isMenuOpen
				? 'max-h-96 opacity-100'
				: 'max-h-0 opacity-0 pointer-events-none'}"
		>
			<nav
				id="mobile-menu"
				class="border-t py-4 {navTransparent ? 'border-white/20' : 'border-slate-200'}"
				aria-label="Mobile navigation"
				use:trapFocus={isMenuOpen}
			>
				<div class="space-y-2">
					<!-- 8pt: 2*8 -->
					{#each navItems as item}
						<button
							onclick={() => onSectionClick(item.id)}
							class="block w-full touch-manipulation rounded-lg px-4 py-3 text-left text-base font-medium transition-all duration-200 {navTransparent
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
		</div>
	</div>
</nav>

<style>
	/* Screen reader only class */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.focus\:not-sr-only:focus {
		position: absolute;
		width: auto;
		height: auto;
		padding: 0.5rem 1rem;
		margin: 0;
		overflow: visible;
		clip: auto;
		white-space: normal;
	}
</style>