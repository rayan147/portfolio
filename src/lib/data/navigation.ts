export const navItems = [
	{ id: 'hero', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'experience', label: 'Experience' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'contact', label: 'Contact' }
] as const;

export type NavItem = typeof navItems[number];
export type SectionId = NavItem['id'];