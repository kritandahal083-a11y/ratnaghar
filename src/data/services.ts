/**
 * Service catalog — the single source used by the Services section,
 * the ticker and the contact form select.
 */
export interface Service {
  name: string;
  icon: string;
  intro: string;
  capabilities: string[];
}

export interface ServiceGroup {
  label: string;
  blurb: string;
  services: Service[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    label: 'Build',
    blurb: 'Digital products designed, engineered, and shipped to last.',
    services: [
      {
        name: 'Web Development',
        icon: 'ph:code',
        intro: 'Fast, accessible websites and web apps built on modern, maintainable stacks.',
        capabilities: [
          'Corporate & marketing sites',
          'E-commerce & booking flows',
          'Web apps & client portals',
          'Performance & accessibility audits',
        ],
      },
      {
        name: 'Software Development',
        icon: 'ph:terminal-window',
        intro: 'Custom software engineered around your operations, not the other way around.',
        capabilities: [
          'Internal tools & dashboards',
          'Integrations & APIs',
          'Mobile companion apps',
          'Legacy system modernization',
        ],
      },
      {
        name: 'UI/UX Design',
        icon: 'ph:cursor-click',
        intro: 'Research-led design that turns complexity into a clear, confident experience.',
        capabilities: [
          'Product discovery & wireframes',
          'Design systems',
          'Usability testing',
          'Interactive prototyping',
        ],
      },
    ],
  },
  {
    label: 'Grow',
    blurb: 'Demand, attention, and measurable performance across every channel.',
    services: [
      {
        name: 'Digital Marketing',
        icon: 'ph:megaphone',
        intro: 'Full-funnel campaigns planned around the metrics your business actually cares about.',
        capabilities: [
          'Campaign strategy',
          'Content planning',
          'Analytics & monthly reporting',
          'Conversion optimization',
        ],
      },
      {
        name: 'Social Media Management',
        icon: 'ph:chat-circle-dots',
        intro: 'Consistent, platform-native content and community management across your calendar.',
        capabilities: [
          'Content calendars',
          'Creative production',
          'Community & DM management',
          'Monthly performance reviews',
        ],
      },
      {
        name: 'Digital Advertising',
        icon: 'ph:broadcast',
        intro: 'Paid media built, tested, and optimized against return on spend.',
        capabilities: [
          'Search & display campaigns',
          'Social advertising',
          'Retargeting journeys',
          'A/B creative testing',
        ],
      },
      {
        name: 'SEO Optimization',
        icon: 'ph:magnifying-glass',
        intro: 'Technical and content SEO that compounds into visibility you own.',
        capabilities: [
          'Technical audits',
          'On-page & schema work',
          'Content SEO strategy',
          'Local & Maps presence',
        ],
      },
    ],
  },
  {
    label: 'Brand',
    blurb: 'Identity with the discipline to scale from favicon to billboard.',
    services: [
      {
        name: 'Branding & Graphic Design',
        icon: 'ph:paint-brush',
        intro: 'Identity systems and creative design that make your company unmistakable.',
        capabilities: [
          'Logo & identity systems',
          'Brand guidelines',
          'Print & packaging',
          'Presentation & marketing design',
        ],
      },
    ],
  },
  {
    label: 'Operate',
    blurb: 'The foundation underneath everything — reliable, secure, unhurried.',
    services: [
      {
        name: 'Cloud & IT Infrastructure',
        icon: 'ph:cloud',
        intro: 'Reliable hosting, networks, and cloud environments sized to your growth.',
        capabilities: [
          'Cloud migration',
          'Hosting & DevOps',
          'Networking & security',
          'Backups & continuity',
        ],
      },
      {
        name: 'IT Consulting & Automation',
        icon: 'ph:sliders',
        intro: 'Practical advice and automations that remove the work your team hates.',
        capabilities: [
          'Digital strategy',
          'Process automation',
          'Workplace tooling',
          'Ongoing IT advisory',
        ],
      },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_GROUPS.flatMap((g) => g.services);
