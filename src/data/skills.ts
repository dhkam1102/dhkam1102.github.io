export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'Go', 'Java', 'C', 'C++', 'JavaScript', 'Bash', 'HTML/CSS'],
  },
  {
    title: 'Cloud & Infra',
    items: ['AWS', 'GCP', 'Kubernetes', 'Docker', 'Linux', 'Tomcat', 'Maven'],
  },
  {
    title: 'Tools & Frameworks',
    items: ['Flask', 'FastAPI', 'React', 'Node.js', 'Elasticsearch', 'Kibana', 'MongoDB', 'MySQL', 'Cypress', 'Git', 'GitHub Actions', 'BPMN', 'CI/CD'],
  },
  {
    title: 'Certifications',
    items: ['AWS Cloud Practitioner (CLF-C02)', 'AWS Solutions Architect Associate (SAA-C02)'],
  },
  {
    title: 'Spoken Languages',
    items: ['English', 'Korean', 'Japanese'],
  },
];
