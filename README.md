# 👋 ioanamanea

My personal site and CV, live at [ioanamanea.net](https://ioanamanea.net) — building cool stuff, bit by bit 👾

## 🚀 Development

```bash
pnpm install   # install dependencies
pnpm dev       # start dev server
pnpm build     # build for production (prerenders / and /cv)
pnpm preview   # preview the production build
```

## 📝 Content

Everything — bio, experience, education, skills, projects — lives in one place: `src/lib/data.ts`. Update it once, and both the homepage and the CV pick it up.

## 📄 CV

The `/cv` route mirrors the homepage's look and feel, styled to print cleanly. Hit "Download CV" and it uses the browser's print-to-PDF — no separate PDF template to keep in sync with the site. 🖨️
