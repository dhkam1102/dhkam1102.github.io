export type TimelineItem = {
  org: string;
  role: string;
  period: string;
  bullets: string[];
  logo?: string;
};

// Reverse-chronological. Most recent first.
export const timeline: TimelineItem[] = [
  {
    org: 'Quantinuum',
    role: 'Software Engineer Intern',
    period: 'Sep 2025 – Dec 2025',
    bullets: [
      'Wrote Cypress end-to-end suites for 200+ workflows, raising frontend test coverage to 60%.',
      'Shipped GitHub Actions CI/CD with Dockerized builds, cutting manual validation work 15%.',
      'Standardized UI selectors and added 50+ element IDs, reducing flaky test failures.',
    ],
  },
  {
    org: 'American Express',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 – Aug 2025',
    bullets: [
      'Redesigned Elasticsearch tokenization and parsing, cutting index storage up to 90%.',
      'Built BPMN workflows in ACE to automate indexing jobs, reaching 100% hands-off patch deploys.',
      'Migrated a backend service from E0 to E1/E2, resolving 15+ environment-specific issues.',
    ],
  },
  {
    org: 'EVEMETA',
    role: 'Software Engineer Intern',
    period: 'Jul 2024 – Nov 2024',
    logo: '/assets/evemetalogo.png',
    bullets: [
      'Shipped Go microservices for login and signup, improving reliability 10% and cutting payment errors 10%.',
      'Built a Flutter video player with noise/haze reduction — 60 FPS streaming, 25% less buffering.',
      'Delivered a MongoDB news aggregator — 20% less memory, 35% faster content delivery.',
    ],
  },
  {
    org: 'Commit The Change',
    role: 'Software Developer Intern',
    period: 'Jan 2024 – Jun 2024',
    bullets: [
      'Designed Flask and Java API endpoints, improving backend performance 20%.',
      'Integrated REST APIs into a React frontend serving 300+ daily users (+15% retrieval).',
      'Led GitHub code reviews across 5 engineers, closing 30+ issues (+25% maintainability).',
    ],
  },
  {
    org: 'LikeLion UCI',
    role: 'Co-founder',
    period: 'Aug 2022 – Aug 2023',
    logo: '/assets/likelion.png',
    bullets: [
      "Co-founded UCI's first coding platform and ran 10+ workshops for 100+ students.",
      'Mentored 50+ students across the US/Korea network; 20% landed internships.',
    ],
  },
  {
    org: 'University of California, Irvine',
    role: 'BS in Computer Science · Dean\u2019s List (4x)',
    period: 'Sep 2020 – Dec 2026 (expected)',
    logo: '/assets/uci.png',
    bullets: [
      'Coursework in systems, algorithms, networks, databases, and distributed computing.',
    ],
  },
];
