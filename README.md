# Gerry Santos — portfolio

A personal site for Gerry Santos, web developer in Taguig: a counted
preloader, an oversized name, a technology marquee, a selected-work grid with
parallax and a cursor-following label, an about teaser, an expanding services
list, a toolkit section and a contact section with a form. Each project has a
case-study page with a next-project link, and there is a full about page.

## Run it

```sh
bun install
bun run dev        # http://localhost:5173
bun run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
```

`npm install && npm run dev` works too if Bun is not installed.

## Content

- `src/data/site.ts` is the whole site: name, role, location, socials,
  projects, services, toolkit, experience and education. Project covers live in
  `public/images/work`; the portrait is `public/images/portrait.jpg`.
- `src/app/pages/*` are the three pages; `src/app/components/motion.tsx` holds
  the reusable animation pieces (masked line reveals, parallax, magnetic
  buttons).
- `src/styles.css` holds the tokens: a paper canvas, ink text, one electric
  accent, Bricolage Grotesque for display type.
- `public/GerryQSantosResume.pdf` is the downloadable résumé linked from the
  hero, about page, nav-adjacent links and footer.

### Placeholders to replace

- `public/images/portrait.jpg` is a stock portrait, not Gerry.
- The K-12 and JBA7 covers (`public/images/work/k12.svg`, `jba7.svg`) are
  designed cover art, because the chatbot has no live UI to capture and the
  JBA7 domain is offline. The other three covers are real screenshots of the
  live sites.

### Contact form

`src/worker/index.ts` receives the form at `/api/contact`. It validates and
acknowledges, but does not deliver anywhere yet — wire it to an email API (key
in Sites → Secrets) or save submissions to D1.

## Deploy with Freebuff Sites

`deploy.json` points at the build output. After `bun run build`, deploy with
the `sites_deploy` tool from this directory.
