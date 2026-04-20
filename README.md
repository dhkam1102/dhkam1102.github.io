# Brian Kam — Portfolio

Personal portfolio at **https://dhkam1102.github.io**.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages via GitHub Actions.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
npm run preview    # preview the built site
```

## Content lives in data files

Everything a recruiter sees is data-driven — edit these, not the templates:

| What                       | File                                   |
| -------------------------- | -------------------------------------- |
| Name, tagline, contacts    | `src/data/site.ts`                     |
| Project list & order       | `src/data/projects.ts`                 |
| Skills                     | `src/data/skills.ts`                   |
| Experience / education     | `src/data/timeline.ts`                 |
| Resume PDF                 | `public/assets/Brian_Kam_resume.pdf`   |
| Profile photos             | `public/assets/`                       |

### Reorder projects

Move entries up or down in `src/data/projects.ts`. The order of the array is the order on the site. Set `featured: true` to include on the homepage.

### Add a project

```ts
{
  slug: 'my-project',
  name: 'My Project',
  pitch: 'One-line pitch.',
  description: 'Fuller description.',
  stack: ['Go', 'AWS'],
  outcomes: ['What changed because of this work', 'A number or signal if possible'],
  github: 'https://github.com/...',
  demo: 'https://...',              // optional
  image: '/assets/screenshot.png',  // optional — drop file in public/assets/
  featured: true,
}
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

**One-time setup:** in the repo settings → Pages → **Source: GitHub Actions**.

## Structure

```
src/
  components/   Nav, Footer, Hero, ProjectCard, Timeline, Skills, Contact, SectionHeading
  data/         site, projects, skills, timeline
  layouts/      Layout.astro — base HTML, meta tags, theme bootstrap
  pages/        index, projects, resume, 404
  styles/       global.css — Tailwind + custom components (.btn, .chip, etc.)
public/
  assets/       resume PDF, photos, logos — served from /
```

## Hidden sections (easy to enable later)

- **Blog** — add `src/pages/blog/` + a content collection in `src/content/`.
- **Currently Learning** — new section in `src/pages/index.astro` reading from a new `src/data/learning.ts`.
- **Achievements** — same pattern.
