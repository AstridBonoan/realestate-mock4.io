# Aurea Network — Real Estate Mockup Design #4

Modern, community-driven real estate website mockup built with **React**, **Vite**, and **Tailwind CSS**. Deployed to **GitHub Pages** via **GitHub Actions** (build → `gh-pages` branch → Deploy from Branch).

## Live site

After enabling Pages, the site will be available at:

https://astridbonoan.github.io/realestate-mock4.io/

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages setup (Deploy from Branch)

1. Push this repository to `main`.
2. GitHub Actions builds the site and publishes to the `gh-pages` branch.
3. In the repo: **Settings → Pages**
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`
5. Save and wait for the site to go live.

## Routes

- `/` — Homepage
- `/about` — About
- `/membership` — Membership
- `/join` — Membership application
- `/opportunities` — Investments & rentals
- `/opportunities/:id` — Property detail
- `/partners` — Partnerships
- `/contact` — Contact

## Notes

- No backend or database — forms validate and show success states on the frontend only.
- Company name, team, testimonials, and property data live in `src/data/` for easy replacement.
- Base path is configured for the `realestate-mock4.io` repository name.
