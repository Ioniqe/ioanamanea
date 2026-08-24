# ioanamanea

Personal site and CV — [ioanamanea.net](https://ioanamanea.net)

## Tech Stack

- **Framework**: React with [TanStack Start](https://tanstack.com/start)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **Build**: [Vite](https://vite.dev)
- **Linting/formatting**: [Ultracite](https://ultracite.ai) (oxlint + oxfmt)
- **Deployment**: Cloudflare Pages (static, prerendered)

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production (prerenders / and /cv to static HTML)
pnpm build

# Preview the production build
pnpm preview
```

## Content

All page content (profile, experience, education, skills, projects) lives in `src/lib/data.ts` — a single source of truth for both the homepage and the CV.

## CV

The `/cv` route renders the same data in a resume layout. "Download CV" uses the browser's print-to-PDF (`window.print()`); print-specific styles keep the layout compact and paginate cleanly.
