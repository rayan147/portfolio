import { onMount } from 'svelte';

export function createIntersectionObserver(
	callback: (entries: IntersectionObserverEntry[]) => void,
	options?: IntersectionObserverInit
) {
	let observer: IntersectionObserver | null = null;

	onMount(() => {
		observer = new IntersectionObserver(callback, options);

		return () => {
			observer?.disconnect();
		};
	});

	return {
		observe: (element: Element | null) => {
			if (element && observer) {
				observer.observe(element);
			}
		},
		unobserve: (element: Element | null) => {
			if (element && observer) {
				observer.unobserve(element);
			}
		}
	};
}

export function lazyLoad(node: HTMLElement, threshold = 0.1) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.dispatchEvent(new CustomEvent('intersect'));
					observer.unobserve(node);
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}