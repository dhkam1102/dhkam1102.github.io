export const site = {
  name: 'Brian Kam',
  role: 'Software Engineer',
  location: 'Los Angeles, CA',
  tagline: 'Software Engineer',
  summary: "Before you fall for my commits, catch this —",
  joke: 'A SQL query walks into a bar, walks up to tables and asks, "Can I join you?"',
  looking: '',
  email: 'brianhyunkam@gmail.com',
  github: 'https://github.com/dhkam1102',
  linkedin: 'https://www.linkedin.com/in/dhkam1102',
  resume: '/assets/Brian_Kam_resume.pdf',
  profileImage: '/assets/myFirstPhoto.jpg',
  aboutImage: '/assets/mySecondPhoto.jpeg',
};

export type NavItem = { href: string; label: string };
export const primaryNav: NavItem[] = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];
