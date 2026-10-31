export interface Industry {
  name: string;
  icon: string;
  text: string;
}

export const INDUSTRIES: Industry[] = [
  {
    name: 'Corporate Businesses',
    icon: 'ph:buildings',
    text: 'Institutional websites and stakeholder-grade polish.',
  },
  {
    name: 'Education',
    icon: 'ph:graduation-cap',
    text: 'Admissions sites and portals that stay easy to use.',
  },
  {
    name: 'Healthcare',
    icon: 'ph:stethoscope',
    text: 'Trust-first design with clarity and accessibility built in.',
  },
  {
    name: 'E-commerce',
    icon: 'ph:storefront',
    text: 'Stores tuned for speed, merchandising, and repeat buyers.',
  },
  {
    name: 'Finance',
    icon: 'ph:bank',
    text: 'Security-conscious UX and precision detail work.',
  },
  {
    name: 'Hospitality',
    icon: 'ph:call-bell',
    text: 'Booking experiences and campaigns that fill rooms.',
  },
  {
    name: 'Real Estate',
    icon: 'ph:city',
    text: 'Property platforms with rich listings and clean flows.',
  },
  {
    name: 'Startups',
    icon: 'ph:rocket-launch',
    text: 'MVP speed now, built to scale when traction arrives.',
  },
];
