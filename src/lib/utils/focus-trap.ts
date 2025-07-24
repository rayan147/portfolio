export function trapFocus(node: HTMLElement) {
	const focusableElements = node.querySelectorAll<HTMLElement>(
		'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
	);
	const firstFocusable = focusableElements[0];
	const lastFocusable = focusableElements[focusableElements.length - 1];

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		if (event.shiftKey) {
			// Shift + Tab
			if (document.activeElement === firstFocusable) {
				event.preventDefault();
				lastFocusable?.focus();
			}
		} else {
			// Tab
			if (document.activeElement === lastFocusable) {
				event.preventDefault();
				firstFocusable?.focus();
			}
		}
	}

	node.addEventListener('keydown', handleKeydown);

	// Focus first element when trap is activated
	firstFocusable?.focus();

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeydown);
		}
	};
}