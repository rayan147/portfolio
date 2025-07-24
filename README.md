# Rayan Ramirez - Portfolio Website

A modern, responsive portfolio website built with SvelteKit, TypeScript, and Tailwind CSS, showcasing my experience as an AWS DevOps & Full-Stack Engineer.

🌐 **Live Demo**: [https://rayan-ramirez.dev](https://rayan-ramirez.dev)

## 🚀 Features

- **Modern Tech Stack**: Built with SvelteKit 2.x, Svelte 5 (runes), TypeScript, and Tailwind CSS 4.x
- **Responsive Design**: Mobile-first approach with smooth animations and transitions
- **Performance Optimized**: Lazy loading, intersection observers, and optimized bundle size
- **Accessible**: WCAG compliant with skip navigation, focus management, and semantic HTML
- **SEO Ready**: Structured data, sitemap, meta tags, and Open Graph support
- **Secure**: CSP headers, secure external links, and email obfuscation
- **Design System**: Implements 60-30-10 color theory and 8pt grid system

## 📋 Sections

1. **Hero** - Introduction and call-to-action
2. **About** - Professional summary and statistics
3. **Experience** - Work history and achievements
4. **Projects** - Featured projects with live demos and source code
5. **Skills** - Technical skills organized by category
6. **Contact** - Multiple ways to get in touch

## 🛠️ Tech Stack

### Frontend
- **Framework**: SvelteKit 2.x with Svelte 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite 7.x

### Infrastructure
- **Deployment**: Node.js adapter
- **Testing**: Vitest (unit) & Playwright (E2E)
- **Linting**: ESLint & Prettier
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rayan147/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run linter
pnpm format       # Format code
pnpm check        # Type checking
pnpm check:watch  # Type checking in watch mode

# Testing
pnpm test         # Run all tests
pnpm test:unit    # Run unit tests
pnpm test:e2e     # Run E2E tests
```

### Project Structure

```
src/
├── lib/
│   ├── components/       # Reusable components
│   │   ├── Navigation.svelte
│   │   ├── Hero.svelte
│   │   ├── About.svelte
│   │   ├── Experience.svelte
│   │   ├── Projects.svelte
│   │   ├── Skills.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   ├── data/            # Data files
│   │   ├── navigation.ts
│   │   ├── skills.ts
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   └── contact.ts
│   └── utils/           # Utility functions
│       ├── intersection-observer.ts
│       └── focus-trap.ts
├── routes/              # SvelteKit routes
│   ├── +page.svelte
│   └── +layout.svelte
├── app.html            # HTML template
├── app.css             # Global styles
└── hooks.server.ts     # Server hooks (security headers)
```

## 🎨 Design Principles

### Color Theory (60-30-10 Rule)
- **60%** - Dark backgrounds (slate-900, slate-800)
- **30%** - Secondary colors (slate-300, slate-400)
- **10%** - Accent color (blue-400, blue-600)

### Spacing System
- Based on 8pt grid system
- Consistent spacing using multiples of 8px
- Responsive spacing that scales with viewport

### Typography
- Clear hierarchy with appropriate line heights
- Responsive font sizes
- Optimized for readability

## 🔒 Security Features

- Content Security Policy (CSP) headers
- Secure external link handling (`rel="noopener noreferrer"`)
- Email obfuscation to prevent spam
- X-Frame-Options and other security headers

## ♿ Accessibility

- Skip navigation link for keyboard users
- Focus trap for mobile menu
- Proper ARIA labels and roles
- Semantic HTML structure
- Keyboard navigation support
- High contrast ratios

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Deploy with Node.js

The project is configured with the Node.js adapter. After building:

```bash
node build/index.js
```

### Environment Variables

Create a `.env` file for any environment-specific configuration:

```env
# Example (if needed)
PUBLIC_SITE_URL=https://rayan-ramirez.dev
```

## 📝 Customization

### Update Personal Information

1. Edit contact information in `src/lib/data/contact.ts`
2. Update projects in `src/lib/data/projects.ts`
3. Modify skills in `src/lib/data/skills.ts`
4. Update experience in `src/lib/data/experience.ts`

### Styling

- Global styles: `src/app.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles in respective `.svelte` files

## 🧪 Testing

### Unit Tests

```bash
# Run unit tests
pnpm test:unit

# Run in watch mode
pnpm test:unit -- --watch
```

### E2E Tests

```bash
# Install Playwright browsers (first time)
npx playwright install

# Run E2E tests
pnpm test:e2e
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/rayan147/portfolio/issues).

## 👨‍💻 Author

**Rayan Ramirez**

- GitHub: [@rayan147](https://github.com/rayan147)
- LinkedIn: [@rayan-ramirez](https://linkedin.com/in/rayan-ramirez)
- Email: rayan147361@gmail.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio best practices
- Built with [SvelteKit](https://kit.svelte.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

⭐ If you find this portfolio template helpful, please consider giving it a star on GitHub!