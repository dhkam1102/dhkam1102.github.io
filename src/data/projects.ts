export type Project = {
  slug: string;
  name: string;
  /** One-line short description shown on the card. */
  pitch: string;
  stack: string[];
  /** Static image shown on hover (fallback if no gif/video). */
  image?: string;
  /** Optional looping gif shown on hover (takes precedence over image). */
  gif?: string;
  /** Optional muted/autoplay/looping video shown on hover (takes precedence over gif). */
  video?: string;
  featured?: boolean;
};

// Order here = order on the site. Move items up/down to reorder.
// Set `featured: true` to include on the homepage.
export const projects: Project[] = [
  {
    slug: 'relay',
    name: 'Relay',
    pitch: 'Lightweight pub/sub service for routing events between internal tools.',
    stack: ['Go', 'Redis', 'Docker'],
    image: '/assets/projects/relay-preview.png',
    featured: true,
  },
  {
    slug: 'codebase',
    name: 'Codebase',
    pitch: 'A minimal, keyboard-first reader for browsing open-source repositories.',
    stack: ['TypeScript', 'Astro', 'Tailwind'],
    image: '/assets/projects/codebase-preview.png',
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
