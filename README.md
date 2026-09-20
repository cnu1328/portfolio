# Srinivas Dharpally — Portfolio

Personal site: **https://portfolio-cnu1328.netlify.app**

AI/ML Engineer · Geospatial CV & LiDAR · Full-Stack. Case studies for production
computer-vision pipelines on drone, satellite and LiDAR data, and the GIS
platforms that serve them.

## Stack

Vite · React 18 · Tailwind CSS · Framer Motion · React Router · react-helmet-async

No CDN dependencies — fonts are self-hosted via `@fontsource`.

## Develop

```bash
nvm use            # Node 22 (see .nvmrc)
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview
```

## Editing content

All copy lives in `src/data/` — components never hard-code text.

| File | What it drives |
|---|---|
| `profile.js` | Name, headline, typed roles, tagline, links, email |
| `stats.js` | Impact strip on the home page |
| `pillars.js` | "What I do" cards |
| `caseStudies.js` | Featured Work cards **and** every `/work/:slug` page |
| `experience.js` | Timeline |
| `skills.js` | Skill groups (icon names are `react-icons/si` exports) |
| `sideProjects.js`, `education.js` | Side projects, education, certifications |

Set `featured: true` on a case study to show it in the main grid; everything
else appears under "More work". Add gallery pairs as `{ before, after, caption }`
to get a drag-to-compare slider.

## Images

Model-output images are WebP files in `public/images/work/`. To regenerate from
source PNGs:

```bash
npm run images -- ../cnu1328/doc_images
```

Put the compiled resume at `public/resume.pdf` — the "Resume" buttons link there.

## Deploy

Netlify builds from `main` with `netlify.toml` (`npm run build`, publish `dist`).
`public/_redirects` handles client-side routing.
